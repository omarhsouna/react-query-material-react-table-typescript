import { PaginationResponse } from "./index";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
}
export interface ProductsPaginationResponse extends PaginationResponse {
  products: Product[];
}
