"use client"
import TreeSection from "@/components/section/image-section/TreeSection";
import StartDownSection from "@/components/section/image-section/StartDownSection";
import HorseOnCliffSection from "@/components/section/image-section/hore-on-cliff/HorseOnCliffSection";
import ProfileSection from "@/components/section/profile/ProfileSection";
import BgProfile from "@/components/section/profile/pice/BgProfile";
import axios from "axios";
import React from "react";
import {useModal} from "@/hooks/store/use-modal-store";

export default function Home() {
    const {data}=useModal();
    const getData = async () => {
        return await axios.get('/api/profiles', {
            params: {
                t: new Date().getTime()
            }, headers: {'Cache-Control': 'no-cache'}
        }).then((data) => {
            console.log("data HOME",data.data[0].title)
        });
    }
    React.useEffect(()=>{
        getData().then(r => r)
    },[data])
    return (
        <main className="w-screen h-screen relative">
            {/** background profile **/}
            <BgProfile/>
            {/** horse on cliff **/}
            <HorseOnCliffSection/>
            {/** profile section **/}
            <ProfileSection/>
            {/** tree section **/}
            <TreeSection/>
            {/** start down **/}
            <StartDownSection/>
        </main>
    );
}
