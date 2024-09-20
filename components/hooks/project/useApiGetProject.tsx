import {useEffect, useState} from 'react';
import axios from "axios";
import {ProjectDto} from "../../../lib/dto/ProjectDto";
import {useModal} from "../../../hooks/store/use-modal-store";


const useApiGetProject = () => {
    const [project, setProject] = useState<Array<ProjectDto> | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {data}=useModal();
    const getProject=async ()=>{
        axios.get(process.env.NEXT_PUBLIC_URL_GETWAY+'/api/project').then((data)=>{
            setProject(data.data);
            setIsLoading(false);
        });
    }
    useEffect(() => {
        getProject().then(r => r)
    }, []);
    return {project,isLoading}
};

export default useApiGetProject;
