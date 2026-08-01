import { HttpResponse } from '@angular/common/http';

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export function paginationFromResponse<T>(response: HttpResponse<T[]>): PaginatedResult<T> {
  const items = response.body ?? [];
  return {
    items,
    total: Number(response.headers.get('X-Total-Count') ?? items.length),
    page: Number(response.headers.get('X-Page') ?? 1),
    pageSize: Number(response.headers.get('X-Page-Size') ?? (items.length || 1)),
    totalPages: Number(response.headers.get('X-Total-Pages') ?? (items.length ? 1 : 0))
  };
}
