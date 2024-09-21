import React from 'react';
import {Edit} from "lucide-react";
import {ProfileDto} from "@/lib/dto/ProfileDto";
import {useAppDispatch} from "@/redux/hooks";
import {onOpen} from "@/redux/slices/modalSlice";

const TitleSection = ({profile}:{profile?: ProfileDto}) => {
    const dispatch=useAppDispatch();
    return <h1 className="text-[18px] md:text-[50px] lg:text-[50px] text-white font-semibold z-50">
        {profile?.title}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-[18px] md:text-[50px] lg:text-[50px]">
            {` ${profile?.mainTitle}`}
                        </span>
        <Edit
            onClick={() =>{
                dispatch(onOpen({ type: 'modify-profile', data: { profile } }));
            }
        }
            className={
                "text-zinc-300 inline z-100 cursor-pointer ml-[10px]"
            }
        />
        {/*<ToggleThem/>*/}
    </h1>
};

export default TitleSection;
