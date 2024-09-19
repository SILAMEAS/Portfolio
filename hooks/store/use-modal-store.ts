import {create} from "zustand";
import {ProfileDto} from "@/lib/dto/ProfileDto";

export type ModalType =
    | "modify-profile"|'modify-project';
interface IData {
    profile?:ProfileDto
}
interface ModalStore {
    type: ModalType | null;
    isOpen: boolean;
    data:IData;
    onOpen: (type: ModalType, p: { profile: ProfileDto | undefined }) => void;
    onClose: () => void;
}
export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data) => set({ isOpen: true, type,data }),
    onClose: () => set({ isOpen: false, type: null }),
}));
