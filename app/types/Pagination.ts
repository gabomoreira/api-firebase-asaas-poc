export interface IPaginationAsaas<T> {
  object: string;
  hasMore: boolean;
  totalCount: number;
  limit: number;
  offset: number;
  data: T[];
}

export interface IPagination<T> {
  data: T[];
  totalCount: number;
}
