"use client"
import React from 'react';
import {Loading} from "@/components/Loading";
import useApiGetProfile from "@/components/hooks/profile/useApiGetProfile";
import TitleDescriptionSection from "@/components/section/profile/pice/TitleDescriptionSection";
import {useProfile} from "@/hooks/store/use-profile-store";

const ProfileSection = () => {
    const {profile,isLoading}=useApiGetProfile();
    const {setData}=useProfile();
    React.useEffect(()=>{
        setData({profile})
    },[ profile, setData])
    return <div className={'absolute top-36 md:top-48 lg:top-40 '}>
        {
            (isLoading || !profile) ? <Loading className={'p-0 md:pl-20'}/> : <div className={''}>
                {/*<ProfileImageSection/>*/}
                <TitleDescriptionSection profile={profile}/>
            </div>
        }

    </div>
};

export default ProfileSection;
