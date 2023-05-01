import { QueryKey, UseQueryOptions } from "react-query";
export type OptionsTypeReactQuery<TData> =
  | Omit<UseQueryOptions<TData, Error, TData, QueryKey>, "queryKey" | "queryFn">
  | undefined;
export interface ParamsEndpointPagination {
  limit: number;
  skip?: number;
}
export interface PaginationResponse {
  limit: number;
  skip: number;
  total: number;
}
