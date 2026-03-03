import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

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
        })
    })
})

export const { useGetFeatureGameQuery, useGetOnSaleQuery, 
    useGetSoonQuery, useGetActionQuery, 
    useGetEsportesQuery, useGetLutaQuery, 
    useGetRPGQuery, useGetSimulacaoQuery,
    useGetGameQuery} = api

export default api