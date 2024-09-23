import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import * as process from "process";
import {ProfileDto} from "@/lib/dto/ProfileDto";
import {Verb} from "@/redux/type";

export const skillSlice = createApi({
    reducerPath: "skillApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_GETWAY,
    }),
    tagTypes:['Profile'],
    endpoints: (builder) => ({
        /** profile */
        getSkill: builder.query<ProfileDto,{}>({
            query: () => ({
                url: `/api/skill`,
                method: Verb.Get,
            }),
            providesTags: () => [{type: 'Profile', id: 'ID'}]
        }),
    }),
});

export const { useGetSkillQuery } = skillSlice;
