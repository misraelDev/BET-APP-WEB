import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, timeout } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PaginatedResult, paginationFromResponse } from 'src/app/shared/pagination.models';
import {
  BaseballLeague,
  BaseballPredictionRequest,
  BaseballPredictionResponse,
  BaseballResultsUpdateRequest,
  BaseballResultsUpdateResponse,
  StoredBaseballPrediction
} from './baseball.models';

@Injectable({ providedIn: 'root' })
export class BaseballApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/baseball`;

  generate(payload: BaseballPredictionRequest): Observable<BaseballPredictionResponse> {
    return this.http
      .post<BaseballPredictionResponse>(`${this.baseUrl}/predictions`, payload)
      .pipe(timeout({ first: 45_000 }));
  }

  getResults(date: string, league: BaseballLeague, page: number, pageSize: number, hour: string): Observable<PaginatedResult<StoredBaseballPrediction>> {
    let params = new HttpParams().set('league', league).set('page', page).set('page_size', pageSize);
    if (date) {
      params = params.set('date', date);
    }
    if (hour !== 'all') params = params.set('hour', hour);
    return this.http
      .get<StoredBaseballPrediction[]>(`${this.baseUrl}/results`, { params, observe: 'response' })
      .pipe(timeout({ first: 20_000 }), map(paginationFromResponse));
  }

  updateResults(payload: BaseballResultsUpdateRequest): Observable<BaseballResultsUpdateResponse> {
    return this.http
      .post<BaseballResultsUpdateResponse>(`${this.baseUrl}/results/update`, payload)
      .pipe(timeout({ first: 45_000 }));
  }
}
