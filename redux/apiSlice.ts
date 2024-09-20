// src/redux/apiSlice.ts
import {BaseQueryApi, createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import * as process from "process";
import {undefined} from "zod";
import {
    BaseQueryError,
    BaseQueryExtraOptions,
    BaseQueryMeta,
    QueryReturnValue
} from "@reduxjs/toolkit/src/query/baseQueryTypes";
import {MaybePromise} from "@reduxjs/toolkit/src/query/tsHelpers";
interface Product {
    id: string;
    name: string;
    price: number;
}

export const apiSlice = createApi({
    reducerPath: "userApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    }),
    endpoints: (builder) => ({
        getAllProduct: builder.query<any,{}>({
            query: () => ({
                url: `/api/profile`,
                method: 'GET',
            })
        }),
    }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetAllProductQuery } = apiSlice;
