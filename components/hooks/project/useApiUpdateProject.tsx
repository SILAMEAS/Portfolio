"use client"
import {ProfileDto} from "@/lib/dto/ProfileDto";
import axios from "axios";
import qs from "query-string";
import {useModal} from "@/hooks/store/use-modal-store";


export const useApiUpdateProject=()=>{
    const {onOpen}=useModal();
    const updateProfile=async (value:any)=>{
       try {
           const url=qs.stringifyUrl({
               url:`${process.env.NEXT_PUBLIC_URL_GETWAY}/api/profile/1`,
           })
           const profile: ProfileDto = await axios.patch(url, value,{ headers: { 'Cache-Control': 'no-cache' }});
           onOpen('editTitle',{profile})
       }catch (e){
           console.log('update profile failed',e)
       }
    }
    return {updateProfile}
}