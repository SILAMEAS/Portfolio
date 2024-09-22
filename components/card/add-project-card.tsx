"use client"
import React from 'react';
import {PlusCircle} from "lucide-react";
import {useAppDispatch} from "@/redux/hooks";
import {onOpen} from "@/redux/slices/modalSlice";
import {Button} from "@/components/ui/button";

const AddProjectCard = () => {
    const dispatch=useAppDispatch();
    return <Button className={'flex space-x-3'} variant={'outline'} onClick={() => dispatch(onOpen({type: 'create-project'}))}>
        <p>create project</p>
        <PlusCircle className={'h-6 w-6'}/>
    </Button>
};

export default AddProjectCard;
