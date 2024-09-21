import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import * as process from "process";
import {ProfileDto} from "@/lib/dto/ProfileDto";
import {Verb} from "@/redux/type";

export const profileSlice = createApi({
    reducerPath: "profileApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_GETWAY,
    }),
    tagTypes:['Profile'],
    endpoints: (builder) => ({
        /** profile */
        getProfile: builder.query<ProfileDto,{}>({
            query: () => ({
                url: `/api/profile/1`,
                method: Verb.Get,
            }),
            providesTags: () => [{type: 'Profile', id: 'ID'}]
        }),
        updateProfile: builder.mutation<ProfileDto, ProfileDto>({
            query: body => ({
                url: `/api/profile/1`,
                method: Verb.Patch,
                body,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: () => [{type: 'Profile', id: 'ID'}],
        }),
    }),
});

export const { useGetProfileQuery,useUpdateProfileMutation } = profileSlice;
