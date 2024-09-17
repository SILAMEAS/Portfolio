"use client";

import {Projects} from '@/constants/constants';
import ProjectCard from "@/components/ProjectCard";
import CardProject from "@/components/card/cart-project";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[90%] max-h-[70%] overflow-y-auto">
        {/*{*/}
        {/*  [1,2,3,4,5,6,7,8,9,10].map(i=>{*/}
        {/*    return <CardProject key={i}/>*/}
        {/*  })*/}
        {/*}*/}
        {Projects.map((project, index) => (
          <CardProject
            key={project.src + project.url}
            title={project.title}
            description={project.text}
            image={{url:project.src,format:"sdf",public_id:"dsfds"}}
            link={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
