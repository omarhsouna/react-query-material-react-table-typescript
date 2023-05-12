import { OptionalParamsApi } from "../types";

export const getTotalAndPagesCount = (limit: number = 10, total: number) => ({
  total,
  pages: Math.ceil(total / limit),
});
export const generateURL = <T,>(
  path: string,
  { page = 1, limit = 10, sort = {}, filter = {} }: OptionalParamsApi<T>
) => {
  const url = new URL(path);
  url.searchParams.set("_page", page.toString());
  url.searchParams.set("_limit", limit.toString());
  url.searchParams.set("_sort", Object.keys(sort).join(","));
  url.searchParams.set("_order", Object.values(sort).join(","));
  Object.entries(filter).forEach(([key, value]) => {
    url.searchParams.set(key, value as string);
  });
  return url.href;
};
