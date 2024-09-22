"use client"
import React, {MouseEventHandler} from 'react';
import Image from "next/image";
import {Edit} from "lucide-react";
import {MdPreview} from "react-icons/md";
import {useAppDispatch} from "@/redux/hooks";
import {onOpen} from "@/redux/slices/modalSlice";
import Link from "next/link";
import {ProjectDto} from "@/lib/dto/ProjectDto";

export interface ICardProject extends ProjectDto{
    onClick?: MouseEventHandler<HTMLDivElement>
}
const ProjectFaceCard = (props:ICardProject) => {
    const dispatch=useAppDispatch();
    return <div className={'flex items-center flex-col card bg-[#15263F] w-70 h-[25rem] rounded-xl p-6 space-y-4 relative'}>
        <Image src={props.image.url} alt={"project_image"} width={200} height={200} className={'h-[200px] w-[200px] animate-pulse'} onClick={props.onClick}/>
        <p className={'m-2'}>{props.title}</p>
        <div className={'flex space-x-10 absolute bottom-10'}>
            <Edit className={'h-7 w-7'} onClick={()=>dispatch(onOpen({type:"modify-project",data:{project:{...props}}}))}/>
                <Link href={props.link} target={'_blank'}><MdPreview className={'h-7 w-7'}/></Link>
        </div>
    </div>
}
export default ProjectFaceCard