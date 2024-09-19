"use client";
import {useEffect, useState} from "react";
import EditTitleSheet from "@/components/sheet/EditTitleSheet";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <>
            <EditTitleSheet/>
            {/*<EditTitleModal />*/}
        </>
    );
};
