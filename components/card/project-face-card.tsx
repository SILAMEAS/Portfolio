"use client"
import React, {MouseEventHandler} from 'react';
import Image from "next/image";
import {Edit, SwitchCamera} from "lucide-react";
import {MdPreview} from "react-icons/md";
import {useAppDispatch} from "@/redux/hooks";
import {onOpen} from "@/redux/slices/modalSlice";
import Link from "next/link";
import {ProjectDto} from "@/lib/dto/ProjectDto";
import {Button} from "@/components/ui/button";

export interface ICardProject extends ProjectDto{
    onClick?: MouseEventHandler<HTMLDivElement>
}
const ProjectFaceCard = (props:ICardProject) => {
    const dispatch=useAppDispatch();
    return <div className={'flex items-center card bg-black rounded-md p-6 space-y-4 relative w-auto justify-between'}>
        <SwitchCamera className={'h-4 w-4'}
                      onClick={()=>props.onClick}/>
        <Image src={props.image.url} alt={"project_image"} width={200} height={200}
               className={'h-[100px] w-[200px] animate-pulse'} onClick={props.onClick}/>
        <div className={'flex space-x-5'}>
            <Edit className={'h-7 w-7'}
                  onClick={() => dispatch(onOpen({type: "modify-project", data: {project: {...props}}}))}/>
            <Link href={props.link} target={'_blank'}><MdPreview className={'h-7 w-7'}/></Link>
        </div>
    </div>
}
export default ProjectFaceCard