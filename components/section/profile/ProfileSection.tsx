"use client"
import React from 'react';
import {useProfile} from "@/hooks/store/use-profile-store";
import {Loading} from "../../Loading";
import TitleDescriptionSection from "./pice/TitleDescriptionSection";

const ProfileSection = () => {
    const {data}=useProfile();
    return <div className={'absolute top-36 md:top-48 lg:top-40 '}>
        {
            (!data?.profile) ? <Loading className={'p-0 md:pl-20'}/> : <div className={''}>
                {/*<ProfileImageSection/>*/}
                <TitleDescriptionSection profile={data?.profile}/>
            </div>
        }

    </div>
};

export default ProfileSection;
