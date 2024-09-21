"use client"
import React from 'react';
import {Loading} from "../../Loading";
import TitleDescriptionSection from "./pice/TitleDescriptionSection";
import {useGetProfileQuery} from "@/redux/feature/profileSlice";

const ProfileSection = () => {
    const getProfile=useGetProfileQuery({});
    return <div className={'absolute top-36 md:top-48 lg:top-40 '}>
        {
            (getProfile.isLoading) ? <Loading className={'p-0 md:pl-20'}/> : <div className={''}>
                {/*<ProfileImageSection/>*/}
                <TitleDescriptionSection profile={getProfile?.currentData}/>
            </div>
        }

    </div>
};

export default ProfileSection;
