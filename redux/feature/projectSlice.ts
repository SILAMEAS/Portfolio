import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import * as process from "process";
import {Verb} from "@/redux/type";
import {ProjectDto} from "@/lib/dto/ProjectDto";

export const projectSlice = createApi({
    reducerPath: "projectApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_GETWAY,
    }),
    tagTypes:['Project'],
    endpoints: (builder) => ({
        getProjects: builder.query<Array<ProjectDto>,{}>({
            query: () => ({
                url: `/api/project`,
                method: Verb.Get,
            }),
            providesTags: () => [{type: 'Project', id: 'ID'}]
        }),
        createProject: builder.mutation<any, FormData>({
            query: body => ({
                url: `/api/project`,
                method: Verb.Post,
                body,
            }),
            invalidatesTags: () => [{type: 'Project', id: 'ID'}]
        }),
    }),
});

export const { useGetProjectsQuery ,useCreateProjectMutation} = projectSlice;
