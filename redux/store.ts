import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import modalReducer from './slices/modalSlice';
import {profileSlice} from "@/redux/feature/profileSlice";
import {projectSlice} from "@/redux/feature/projectSlice";
import {skillSlice} from "@/redux/feature/skillSlice"; // Example slice

export const store = configureStore({
    reducer: {
        counter: counterReducer, // Add your slices here
        modal:modalReducer,
        [profileSlice.reducerPath]: profileSlice.reducer,
        [projectSlice.reducerPath]: projectSlice.reducer,
        [skillSlice.reducerPath]: skillSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(profileSlice.middleware,projectSlice.middleware,skillSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
