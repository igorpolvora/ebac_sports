import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '@/types/produto'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Produto[], void>({
      query: () => '',
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
