import { getProducts } from "../../apis/products";
import { OptionsTypeReactQuery, ParamsEndpointPagination } from "../../types";
import { ProductsPaginationResponse } from "../../types/product";
import { useQuery } from "react-query";
export const useGetProducts = (
  params: ParamsEndpointPagination,
  options?: OptionsTypeReactQuery<ProductsPaginationResponse>
) => {
  return useQuery<ProductsPaginationResponse, Error>(
    ["products", params.limit, params.skip],
    async () => {
      const products = await getProducts(params);
      return products;
    },
    options
  );
};
