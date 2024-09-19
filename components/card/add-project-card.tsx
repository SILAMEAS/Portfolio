"use client"
import React from 'react';
import {PlusCircle} from "lucide-react";
import {useModal} from "@/hooks/store/use-modal-store";
import {useProfile} from "@/hooks/store/use-profile-store";

const AddProjectCard = () => {
    const {data}=useProfile();
    const {onOpen}=useModal();
    return <div
        className={'flex items-center flex-col card bg-[#15263F] w-70 h-[25rem] rounded-xl p-6 space-y-4 justify-center'}>
        <PlusCircle className={'h-28 w-28'} onClick={()=>onOpen('modify-project',{profile:data?.profile})}/>
    </div>
};

export default AddProjectCard;
