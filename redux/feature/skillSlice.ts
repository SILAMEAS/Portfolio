import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import * as process from "process";
import {Verb} from "@/redux/type";
import {SkillDto} from "@/lib/dto/SkillDto";

export const skillSlice = createApi({
    reducerPath: "skillApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_GETWAY,
    }),
    tagTypes:['Skill'],
    endpoints: (builder) => ({
        /** profile */
        getSkill: builder.query<Array<SkillDto>,{}>({
            query: () => ({
                url: `/api/skill`,
                method: Verb.Get,
            }),
            providesTags: () => [{type: 'Skill', id: 'ID'}]
        }),
        updateSkill: builder.mutation<any, {body:FormData,id:number}>({
            query: ({body,id}) => ({
                url: `/api/skill/${id}`,
                method: Verb.Patch,
                body,
            }),
            invalidatesTags: () => [{type: 'Skill', id: 'ID'}]
        }),
        deleteSkill: builder.mutation<Array<SkillDto>,{id:number}>({
            query: ({id}) => ({
                url: `/api/skill/${id}`,
                method: Verb.Delete,
            }),
            invalidatesTags: () => [{type: 'Skill', id: 'ID'}]
        }),
    }),
});

export const { useGetSkillQuery,useUpdateSkillMutation,useDeleteSkillMutation } = skillSlice;
