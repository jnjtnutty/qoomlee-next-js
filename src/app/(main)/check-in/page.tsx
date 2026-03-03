"use client"

import CheckInBanner from "@/components/CheckInBanner";
import RetrieveBooking from "@/components/RetrieveBooking";
import TravelTip from "@/components/TravelTip";
import FlightStatus from "@/components/FlightStatus";
import BaggageRules from "@/components/BaggageRules";
import {useMediaQueryContext} from "@/context/MediaQueryContext";
import {useRouter} from "next/navigation";


export default function CheckInPage() {
    const {isMobile} = useMediaQueryContext();
    const router = useRouter();

    const handleRetrieve = (lastName: string, bookingRef: string) => {
        console.log("Retrieving booking:", {lastName, bookingRef});
        router.push("/check-in/step");
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <CheckInBanner/>
            {isMobile ? (
                <div className="w-full flex flex-col gap-6 mt-8 px-4">
                    <RetrieveBooking onRetrieve={handleRetrieve}/>
                    <TravelTip/>
                    <FlightStatus/>
                    <BaggageRules/>
                </div>
            ) : (
                <div className="w-full container flex flex-row gap-6 mt-12">
                    <div className="w-full flex flex-col gap-6">
                        <RetrieveBooking onRetrieve={handleRetrieve}/>
                        <div className="w-full flex flex-row justify-between gap-6">
                            <FlightStatus/>
                            <BaggageRules/>
                        </div>
                    </div>
                    <TravelTip/>
                </div>)}
        </div>
    );
}
