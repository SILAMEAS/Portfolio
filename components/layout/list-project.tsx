"use client"
import React from 'react';
import {cn} from "@/lib/utils";
import AddProjectCard from "@/components/card/add-project-card";
import ProjectCard from "@/components/card/ProjectCard";
import {useGetProjectsQuery} from "@/redux/feature/projectSlice";

const LayoutListProject = () => {
    const getProjects=useGetProjectsQuery({});
    return <div className={cn('w-full')}>
        <div className={'mt-14 mb-4 flex self-end w-full px-5 items-center justify-between'}>
            <p className={'text-red-600'}>{getProjects?.currentData?.length} projects</p>
            <AddProjectCard/>
        </div>
        <div
            className={cn(`h-[25rem] md:h-[50rem] lg:h-[30rem] xl:h-[35rem]`, 'overflow-hidden overflow-y-auto scrollbar scrollbar-thumb-muted grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 px-5')}>
            {(getProjects.isLoading || !getProjects.currentData) ? <div>loading...</div> :
                getProjects?.currentData?.map((project) => (
                    // <CardProjectCMD key={project.link}/>
                    <ProjectCard
                        key={project.link + project.title + project.image}
                        {...project}
                    />
                ))}

        </div>
    </div>
};

export default LayoutListProject;
