import React from 'react';
import HorseSection from "@/components/section/image-section/hore-on-cliff/HorseSection";
import CliffSection from "@/components/section/image-section/hore-on-cliff/CliffSection";
const HorseOnCliffSection = () => {
    return <div className="absolute bottom-[-280px] right-[-180px] md:bottom-0 md:right-0 z-[10]">
        <HorseSection/>
        <CliffSection/>
    </div>
};

export default HorseOnCliffSection;
