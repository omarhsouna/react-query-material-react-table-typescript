import { QueryKey, UseQueryOptions } from "react-query";
export type OptionsTypeReactQuery<TData> =
  | Omit<UseQueryOptions<TData, Error, TData, QueryKey>, "queryKey" | "queryFn">
  | undefined;
export type SortingState = "desc" | "asc";
export type SortType<T> = Partial<Record<keyof T, SortingState>>;
export type FilterType<T> = Partial<Record<keyof T, string>>;
export interface OptionalParamsApi<T> {
  page?: number;
  limit?: number;
  sort?: SortType<T>;
  filter?: FilterType<T>;
}
export interface PaginationResponse {
  pages: number;
  total: number;
}
