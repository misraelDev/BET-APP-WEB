import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginatedResult, paginationFromResponse } from 'src/app/shared/pagination.models';
import { BasketballLeague, BasketballResponse, BasketballUpdateResponse, StoredBasketballPrediction } from './basketball.models';

@Injectable({ providedIn: 'root' })
export class BasketballApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/nba`;
  generate(date: string, league: BasketballLeague, limit: number): Observable<BasketballResponse> { return this.http.post<BasketballResponse>(`${this.baseUrl}/predictions`, { date, league, limit, timezone: 'America/Mexico_City' }).pipe(timeout({ first: 60_000 })); }
  results(date: string, league: BasketballLeague, page: number, pageSize: number, hour: string): Observable<PaginatedResult<StoredBasketballPrediction>> {
    let params = new HttpParams().set('date', date).set('league', league).set('page', page).set('page_size', pageSize);
    if (hour !== 'all') params = params.set('hour', hour);
    return this.http.get<StoredBasketballPrediction[]>(`${this.baseUrl}/results`, { params, observe: 'response' }).pipe(timeout({ first: 20_000 }), map(paginationFromResponse));
  }
  update(date: string, league: BasketballLeague): Observable<BasketballUpdateResponse> { return this.http.post<BasketballUpdateResponse>(`${this.baseUrl}/results/update`, { date, league }).pipe(timeout({ first: 60_000 })); }
}
