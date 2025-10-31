export interface CRUDListResponse<T> {
  items: T[];
  total: number;
}

export interface CRUDQueryParams {
  page: number;
  pageSize: number;
  search?: string;
}
