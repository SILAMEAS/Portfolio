import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileDto } from "@/lib/dto/ProfileDto";
import {ProjectDto} from "@/lib/dto/ProjectDto";

// Define the types
export type ModalType = "modify-profile" | "modify-project" | 'create-project'

interface IData {
    profile?: ProfileDto;
    project?:ProjectDto;
}

interface ModalState {
    type: ModalType | null;
    isOpen: boolean;
    data: IData;
}

// Initial state
const initialState: ModalState = {
    type: null,
    isOpen: false,
    data: {},
};

// Create a slice of the Redux store
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        onOpen: (state, action: PayloadAction<{ type: ModalType, data?: IData }>) => {
            state.isOpen = true;
            state.type = action.payload.type;
            state.data = action.payload.data??{};
        },
        onClose: (state) => {
            state.isOpen = false;
            state.type = null;
            state.data = {};
        },
    },
});

// Export actions and reducer
export const { onOpen, onClose } = modalSlice.actions;
export default modalSlice.reducer;
