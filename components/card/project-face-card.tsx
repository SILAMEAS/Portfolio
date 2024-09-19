import React from 'react';
import Image from "next/image";
import {Edit, Edit2Icon, Eye, Github, GithubIcon, Play} from "lucide-react";
import {TbEyeStar} from "react-icons/tb";
import {MdPreview} from "react-icons/md";

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
    return <div className={'flex items-center flex-col card bg-[#15263F] w-70 h-[25rem] rounded-xl p-6 space-y-4 relative'}>
        <Image src={image.url} alt={"project_image"} width={200} height={200} className={'h-[200px] w-[200px]'}/>
        <p className={'m-2'}>{title}</p>
        <div className={'flex space-x-10 absolute bottom-10'}>
            <Edit className={'h-7 w-7'}/>
            <MdPreview className={'h-7 w-7'}/>
            <GithubIcon className={'h-7 w-7'}/>
        </div>
    </div>
}
export default ProjectFaceCard