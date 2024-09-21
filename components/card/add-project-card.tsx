"use client"
import React from 'react';
import {PlusCircle} from "lucide-react";
import {useAppDispatch} from "@/redux/hooks";
import {onOpen} from "@/redux/slices/modalSlice";

const AddProjectCard = () => {
    const dispatch=useAppDispatch();
    return <div
        className={'flex items-center flex-col card bg-[#15263F] w-[300px] h-[25rem] rounded-xl p-6 space-y-4 justify-center'}>
        <PlusCircle className={'h-28 w-28'} onClick={()=> dispatch(onOpen({ type: 'create-project'}))}/>

    </div>
};

export default AddProjectCard;
