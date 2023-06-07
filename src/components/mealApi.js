import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = "https://www.themealdb.com/api/json/v1/1";

export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getAllMealCategories: builder.query({
      query: (query) => ({
        url: '/categories.php',
        method: "GET",
      })
    }),
    getCategoryDetail: builder.query({
      query: (query) => ({
        url: '/filter.php',
        method: "GET",
        params: {
          c: `${query}`
        }
      })
    }),

    getMealSingleDetail: builder.query({
      query: (query) => ({
        url: "/lookup.php",
        method: "GET",
        params: {
          i: `${query}`
        }
      })
    }),

    getSearchedMeal: builder.query({
      query: (query) => ({
        url: "/search.php",
        method: "GET",
        params: {
          s: `${query}`
        }
      })
    })

  })



});


export const { useGetAllMealCategoriesQuery, useGetCategoryDetailQuery, useGetMealSingleDetailQuery, useGetSearchedMealQuery } = mealApi;