"use client";

import {ReactNode} from "react";
import {useMediaQueryContext} from "@/context/MediaQueryContext";
import BottomNav from "@/components/BottomNav";

export default function BottomNavWrapper({children}: { children: ReactNode }) {
    const {isMobile} = useMediaQueryContext();

    return (
        <>
            <div className={isMobile ? "pb-16" : ""}>
                {children}
            </div>
            {isMobile && <BottomNav/>}
        </>
    );
}