export interface PaginationParams {
  limit: number;
  page: number;
  total: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: 'asc' | 'desc';

  [key: string]: any;
}
