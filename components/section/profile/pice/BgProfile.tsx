"use client"
import React from 'react';
import {useTheme} from "next-themes";

const BgProfile = () => {
    const { theme } = useTheme()
    return <div
        className="flex items-center w-full h-full bg-cover bg-center overflow-hidden"
        style={{backgroundImage:theme=='light'?'none': "url(/main-bg.webp)"}}
    />
};

export default BgProfile;
