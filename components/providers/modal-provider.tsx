"use client";
import {useEffect, useState} from "react";
import EditTitleSheet from "@/components/sheet/EditTitleSheet";
import ModifyProjectModal from "@/components/modal/ModifyProjectModal";
import CreateProjectModal from "@/components/modal/CreateProjectModal";

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
            <CreateProjectModal/>
        </>
    );
};
