import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';

import { environment } from 'src/environments/environment';
import {
  RankingDetailResponse,
  RankingListResponse,
  RankingPostResponse
} from './football-rankings.models';

@Injectable({ providedIn: 'root' })
export class FootballRankingsApiService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/api/v1/football/rankings`;

  list(filters: {
    date: string;
    league: string;
    analyst: string;
    scope: string;
    rankingType: string;
    page: number;
    pageSize: number;
  }): Observable<RankingListResponse> {
    let params = new HttpParams()
      .set('date', filters.date)
      .set('page', filters.page)
      .set('page_size', filters.pageSize);
    if (filters.league) params = params.set('league', filters.league);
    if (filters.analyst.trim()) params = params.set('analyst', filters.analyst.trim());
    if (filters.scope) params = params.set('scope', filters.scope);
    if (filters.rankingType) params = params.set('ranking_type', filters.rankingType);
    return this.http.get<RankingListResponse>(this.url, { params }).pipe(timeout({ first: 20_000 }));
  }

  detail(rankingId: string, version?: number): Observable<RankingDetailResponse> {
    let params = new HttpParams();
    if (version !== undefined) params = params.set('version', version);
    return this.http.get<RankingDetailResponse>(`${this.url}/${encodeURIComponent(rankingId)}`, { params }).pipe(timeout({ first: 20_000 }));
  }

  publish(payload: unknown): Observable<RankingPostResponse> {
    return this.http.post<RankingPostResponse>(this.url, payload).pipe(timeout({ first: 30_000 }));
  }
}
