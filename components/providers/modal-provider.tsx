"use client";
import {useEffect, useState} from "react";
import EditTitleSheet from "@/components/sheet/EditTitleSheet";
import ModifyProjectModal from "@/components/modal/ModifyProjectModal";

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
            <ModifyProjectModal/>
        </>
    );
};
