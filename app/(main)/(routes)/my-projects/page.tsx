"use client";

import ProjectCard from "@/components/card/ProjectCard";
import useApiGetProject from "@/components/hooks/project/useApiGetProject";
import React from "react";
import AddProjectCard from "@/components/card/add-project-card";

const Page = () => {
  const {project}=useApiGetProject();
  return (
    <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[90%] max-h-[70%] overflow-y-auto">
        {project.map((project, index) => (
            <div key={project.link} className={'flex flex-col'}>
              <ProjectCard
                  {...project}
              />
            </div>
        ))}
        {
          project.length>0&& <AddProjectCard/>
        }

      </div>
    </div>
  );
};

export default Page;
