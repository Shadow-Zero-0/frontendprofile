import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://backend-profile-nine.vercel.app/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi