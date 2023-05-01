import axios from "axios";
import { ProductsPaginationResponse } from "../types/product";
import { ParamsEndpointPagination } from "../types";

export const getProducts = async ({
  skip = 0,
  limit,
}: ParamsEndpointPagination) => {
  const response = await axios.get<ProductsPaginationResponse>(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );

  return response.data;
};
