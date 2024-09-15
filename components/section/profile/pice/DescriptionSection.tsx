import React from 'react';
import {ProfileDto} from "@/lib/dto/ProfileDto";

const DescriptionSection = ({profile}:{profile?: ProfileDto}) => {
    return <p className="text-gray-200  md:block ">
        {profile?.description??""}
    </p>
};

export default DescriptionSection;
