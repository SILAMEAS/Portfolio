import {useEffect, useState} from 'react';
import {ProfileDto} from "@/lib/dto/ProfileDto";
import axios from "axios";
import {useModal} from "@/hooks/store/use-modal-store";

const useGetProfile = () => {
    const [profile, setProfile] = useState<ProfileDto | undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(false);
    const {data}=useModal();
    useEffect(() => {
        setLoading(true);
        axios.get(process.env.NEXT_PUBLIC_URL_GETWAY+'/api/profile').then((data)=>{
            const {id, ...res} = data.data[0];
            setProfile(res)
            setLoading(false);
        });
    }, [data.profile]);
    return {profile,isLoading}
};

export default useGetProfile;
