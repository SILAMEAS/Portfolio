import {create} from "zustand";
import {ProfileDto} from "@/lib/dto/ProfileDto";

interface IData {
    profile?:ProfileDto
}
interface ProfileStore {
    data:IData;
    setData: ( p: { profile: ProfileDto | undefined }) => void;
}
export const useProfile = create<ProfileStore>((set) => ({
    data: {},
    setData: ( data) => set({ data }),
}));
