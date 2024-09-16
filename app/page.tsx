import TreeSection from "@/components/section/image-section/TreeSection";
import StartDownSection from "@/components/section/image-section/StartDownSection";
import HorseOnCliffSection from "@/components/section/image-section/hore-on-cliff/HorseOnCliffSection";
import ProfileSection from "@/components/section/profile/ProfileSection";
import BgProfile from "@/components/section/profile/pice/BgProfile";

export default function Home() {
    return (
        <main className="w-full h-full relative overflow-hidden">
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
