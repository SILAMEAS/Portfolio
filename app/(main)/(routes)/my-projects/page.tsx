"use client";

import React from "react";
import ProjectCard from "../../../../components/card/ProjectCard";
import AddProjectCard from "../../../../components/card/add-project-card";
import {useGetProjectsQuery} from "@/redux/feature/projectSlice";

const Page = () => {
  const getProjects=useGetProjectsQuery({});
  return (
    <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className=" w-screen h-screen flex flex-col items-start justify-center bg-center bg-cover"
    >
      <div className={'mt-14 mb-4 flex self-end w-full px-5 items-center justify-between'}>
        <p className={'text-red-600'}>{getProjects?.currentData?.length} projects</p>
        <AddProjectCard/>
      </div>
      <div className=" w-full max-h-[60%] overflow-hidden overflow-y-auto scrollbar scrollbar-thumb-muted grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 px-5">
        {(getProjects.isLoading||!getProjects.currentData)?<div>loading...</div>:
          getProjects?.currentData?.map((project) => (
              <ProjectCard
                  key={project.link+project.title+project.image}
                  {...project}
              />
        ))}

      </div>
    </div>
  );
};

export default Page;
