import {useEffect, useState} from 'react';
import {ProfileDto} from "@/db/dto/ProfileDto";
import {useModal} from "@/hooks/store/use-modal-store";
import axios from "axios";

const useGetProfile = () => {
    const [profile, setProfile] = useState<ProfileDto | undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(false);
    const { data } = useModal();
    const getData = async () => {
        await axios.get('/api/profiles',{
            params: {
                t: new Date().getTime()
            }, headers: { 'Cache-Control': 'no-cache' }}).then((data)=>{
            const {id, ...res} = data.data[0];
            setProfile(res)
            setLoading(false);
        });

    }
    useEffect(() => {
        setLoading(true);
        getData().then(r => r);
    }, [data]);
    return {profile,isLoading}
};

export default useGetProfile;
