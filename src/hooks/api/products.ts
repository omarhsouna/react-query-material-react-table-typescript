import { getProducts } from "../../apis/products";
import { OptionsTypeReactQuery, OptionalParamsApi } from "../../types";
import { Product, ProductsPaginationResponse } from "../../types/product";
import { useQuery } from "react-query";
export const useGetProducts = (
  params: OptionalParamsApi<Product>,
  options?: OptionsTypeReactQuery<ProductsPaginationResponse>
) => {
  return useQuery<ProductsPaginationResponse, Error>(
    ["products", params],
    async () => {
      const products = await getProducts(params);
      return products;
    },
    options
  );
};
