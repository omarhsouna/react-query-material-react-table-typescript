import axios from "axios";
import { Product } from "../types/product";
import { OptionalParamsApi } from "../types";
import { generateURL, getTotalAndPagesCount } from "../utils";
export const getProducts = async (params: OptionalParamsApi<Product>) => {
  const baseUrl = "http://localhost:3001";
  const response = await axios.get<Product[]>(
    generateURL(`${baseUrl}/products`, params)
  );
  return {
    products: response.data,
    ...getTotalAndPagesCount(params.limit, response.headers["x-total-count"]),
  };
};
