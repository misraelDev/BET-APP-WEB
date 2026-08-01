import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, timeout } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PaginatedResult, paginationFromResponse } from 'src/app/shared/pagination.models';
import { StoredTennisPrediction, TennisMatchCountResponse, TennisPredictionResponse, TennisTour, TennisUpdateResponse } from './tennis.models';

@Injectable({ providedIn: 'root' })
export class TennisApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/tennis`;

  generate(date: string, tour: TennisTour, limit: number, page: number): Observable<TennisPredictionResponse> {
    const params = new HttpParams()
      .set('date', date)
      .set('timezone', 'America/Mexico_City')
      .set('tour', tour)
      .set('limit', limit);
    const pagedParams = params.set('page', page);
    return this.http.get<TennisPredictionResponse>(`${this.baseUrl}/predictions`, { params: pagedParams }).pipe(timeout({ first: 60_000 }));
  }

  getMatchCount(date: string, tour: TennisTour): Observable<TennisMatchCountResponse> {
    const params = new HttpParams()
      .set('date', date)
      .set('timezone', 'America/Mexico_City')
      .set('tour', tour);
    return this.http.get<TennisMatchCountResponse>(`${this.baseUrl}/matches/count`, { params }).pipe(timeout({ first: 30_000 }));
  }

  getResults(date: string, tour: TennisTour, page: number, pageSize: number, hour: string, market: string, minProbability: number): Observable<PaginatedResult<StoredTennisPrediction>> {
    let params = new HttpParams().set('date', date).set('tour', tour).set('page', page).set('page_size', pageSize);
    if (hour !== 'all') params = params.set('hour', hour);
    if (minProbability > 0) params = params.set('market', market).set('min_probability', minProbability);
    return this.http.get<StoredTennisPrediction[]>(`${this.baseUrl}/results`, { params, observe: 'response' })
      .pipe(timeout({ first: 20_000 }), map(paginationFromResponse));
  }

  updateResults(date: string, tour: TennisTour): Observable<TennisUpdateResponse> {
    return this.http.post<TennisUpdateResponse>(`${this.baseUrl}/results/update`, { date, tour }).pipe(timeout({ first: 60_000 }));
  }
}
