import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "@/config";
import { Shop } from "@/types";
import { formatDateToString } from "@/lib/utils";

export const shopAPI = createApi({
  reducerPath: "shopAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["list-products", "list-cart", "list-product-by-id"],

  endpoints: (builder) => ({
    listProducts: builder.query<any, void>({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
      transformResponse: (response: any) => response,
      providesTags: ["list-products"],
    }),
    listProductByID: builder.query<any, { id?: string }>({
      query: (reqBody: { id?: string }) => ({
        url: `/products/${reqBody.id}`,
        method: "GET",
      }),
      transformResponse: (response: any) => response,
      providesTags: ["list-product-by-id"],
    }),
    listCategories: builder.query<any, void>({
      query: () => ({
        url: `/products/categories`,
        method: "GET",
      }),
      transformResponse: (response: any) => response,
    }),
  }),
});

export const {
  useListProductsQuery,
  useListCategoriesQuery,
  useLazyListProductsQuery,
  useListProductByIDQuery
} = shopAPI;
