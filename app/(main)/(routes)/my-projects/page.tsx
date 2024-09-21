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
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[90%] max-h-[70%] overflow-y-auto">
        {(getProjects.isLoading||!getProjects.currentData)?<div>loading...</div>:
          getProjects?.currentData?.map((project) => (
            <div key={project.link} className={'flex flex-col'}>
              <ProjectCard
                  {...project}
              />
            </div>
        ))}
        <AddProjectCard/>
      </div>
    </div>
  );
};

export default Page;
