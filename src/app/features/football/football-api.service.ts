import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, timeout } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PaginatedResult, paginationFromResponse } from 'src/app/shared/pagination.models';
import { FootballLeague, FootballPredictionResponse, FootballUpdateResponse, StoredFootballPrediction } from './football.models';

@Injectable({ providedIn: 'root' })
export class FootballApiService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/api/v1/football/predictions`;

  generate(date: string, league: FootballLeague, limit: number): Observable<FootballPredictionResponse> {
    const params = new HttpParams()
      .set('date', date)
      .set('timezone', 'America/Mexico_City')
      .set('league', league)
      .set('limit', limit);
    return this.http
      .get<FootballPredictionResponse>(this.url, { params })
      .pipe(timeout({ first: 60_000 }));
  }

  getResults(date: string, league: FootballLeague, page: number, pageSize: number, hour: string): Observable<PaginatedResult<StoredFootballPrediction>> {
    let params = new HttpParams().set('date', date).set('league', league).set('page', page).set('page_size', pageSize);
    if (hour !== 'all') params = params.set('hour', hour);
    return this.http
      .get<StoredFootballPrediction[]>(`${environment.apiUrl}/api/v1/football/results`, { params, observe: 'response' })
      .pipe(timeout({ first: 20_000 }), map(paginationFromResponse));
  }

  updateResults(date: string): Observable<FootballUpdateResponse> {
    return this.http
      .post<FootballUpdateResponse>(`${environment.apiUrl}/api/v1/football/results/update`, { date })
      .pipe(timeout({ first: 60_000 }));
  }
}
