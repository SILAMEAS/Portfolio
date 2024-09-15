import {useEffect, useState} from 'react';
import {ProfileDto} from "@/db/dto/ProfileDto";
import {useModal} from "@/hooks/store/use-modal-store";

const useGetProfile = () => {
    const [profile, setProfile] = useState<ProfileDto | undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(false);
    const { data } = useModal();
    const getData = async () => {
        // { headers: { 'Cache-Control': 'no-cache' }}
        await fetch('/api/profiles', {method:"GET", headers: {'Cache-Control': 'no-cache'}})
            .then((res) => res.json())
            .then((data) => {
                const {id, ...res} = data[0];
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
