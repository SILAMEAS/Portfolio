import React from 'react';
import {Edit} from "lucide-react";
import {ProfileDto} from "@/lib/dto/ProfileDto";
import {useModal} from "@/hooks/store/use-modal-store";

const TitleSection = ({profile}:{profile?: ProfileDto}) => {
    const { onOpen } = useModal();
    return <h1 className="text-[18px] md:text-[50px] lg:text-[50px] text-white font-semibold z-50">
        {profile?.title}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-[18px] md:text-[50px] lg:text-[50px]">
            {` ${profile?.mainTitle}`}
                        </span>
        <Edit
            onClick={() => onOpen('editTitle', {profile})}
            className={
                "text-zinc-300 inline z-100 cursor-pointer ml-[10px]"
            }
        />
    </h1>
};

export default TitleSection;
