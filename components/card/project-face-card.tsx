import React from 'react';
import Image from "next/image";
import {Edit2Icon, Eye, Github, Play} from "lucide-react";
import {TbEyeStar} from "react-icons/tb";

interface ImageProjectEntity{
    public_id:string;
    url:string;
    format:string;
}
export interface ICardProject {
    title: string,
    description: string,
    link: string,
    image: ImageProjectEntity,
}
const ProjectFaceCard = ({description,
                          link,
                         image,
                         title='title'}:ICardProject) => {
    return <>
        {/* component */}
        <div
            className="card bg-[#15263F] w-80 h-[25rem] rounded-xl p-6 space-y-4 flex flex-col justify-between items-center">
            <Image src={image.url} alt={"project_image"} width={200} height={200}/>
            <div id="description" className="space-y-4">
                <p className="text-slate-500 text-sm select-none">{description}</p>
                <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
        <span
            id="price"
            className="text-cyan-300 flex justify-between items-center"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 320 512"
              fill="#67E7F9"
          >
            {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
              <path
                  d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/>
          </svg>
             <a href={link} target={'_blank'}>
            {title}
             </a>
        </span>
                </div>
                <div className={'flex justify-evenly w-full pb-52'}>
                    <Github className={'text-white h-5 w-5 '}/>
                    <Eye className={'text-white h-5 w-5 '}/>
                </div>
            </div>
        </div>
    </>
}
export default ProjectFaceCard