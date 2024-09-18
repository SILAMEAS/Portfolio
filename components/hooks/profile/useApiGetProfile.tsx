import {useEffect, useState} from 'react';
import {ProfileDto} from "@/lib/dto/ProfileDto";
import axios from "axios";
import {useModal} from "@/hooks/store/use-modal-store";

const useApiGetProfile = () => {
    const [profile, setProfile] = useState<ProfileDto | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {data}=useModal();
    const getProfile=async ()=>{
        axios.get(process.env.NEXT_PUBLIC_URL_GETWAY+'/api/profile').then((data)=>{
            const {id, ...res} = data.data[0];
            setProfile(res as ProfileDto);
            setIsLoading(false);
        });
    }
    useEffect(() => {
        if(data.profile){
            getProfile().then(r => r)
        }else {
            setIsLoading(true);
            getProfile().then(r => r)
        }
    }, [data.profile]);

    return {profile,isLoading}
};

export default useApiGetProfile;
