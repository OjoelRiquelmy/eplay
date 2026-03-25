
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

  type PurchasePayload = {
    products: Product[]
    billing: {
      name: string
      email: string
      document: string
    }
    delivery: {
      email: string
    }
    payment: {
      card: {
        active: boolean
        owner?: {
          name: string
          document: string
        }
        name?: string
        number?: string
        expires?: {
          month: number
          year: number
        }
        code?: number
      }
      installments: number
    }
  }

  type PurchaseResponse = {
    orderId: string
  }

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-ebac.vercel.app/api/eplay'
    }),
    endpoints: (builder) => ({
        getFeatureGame: builder.query<Game, void>({
            query: () => 'destaque'
        }),
        getOnSale: builder.query<Game[], void>({
            query: () => 'promocoes'
        }),
        getSoon: builder.query<Game[], void>({
            query: () =>  'em-breve'
        }),
        getAction: builder.query<Game[], void>({
            query: () =>  'acao'
        }),
        getRPG: builder.query<Game[], void>({
            query: () =>  'rpg'
        }),
        getEsportes: builder.query<Game[], void>({
            query: () =>  'esportes'
        }),
        getSimulacao: builder.query<Game[], void>({
            query: () =>  'simulacao'
        }),
        getLuta: builder.query<Game[], void>({
            query: () =>  'luta'
        }),
        getGame: builder.query<Game, string>({
            query: (id) =>  `jogos/${id}`
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
          query: (body) => ({
            url: 'checkout',
            method: 'POST',
            body
          })
        })
    })
})

export const { useGetFeatureGameQuery, useGetOnSaleQuery,
    useGetSoonQuery, useGetActionQuery,
    useGetEsportesQuery, useGetLutaQuery,
    useGetRPGQuery, useGetSimulacaoQuery,
    useGetGameQuery, usePurchaseMutation} = api

export default api
