"use client"

import CheckInBanner from "@/components/CheckInBanner";
import RetrieveBooking from "@/components/RetrieveBooking";
import TravelTip from "@/components/TravelTip";
import FlightStatus from "@/components/FlightStatus";
import BaggageRules from "@/components/BaggageRules";


export default function CheckInPage() {
    const handleRetrieve = (lastName: string, bookingRef: string) => {
        console.log("Retrieving booking:", { lastName, bookingRef });
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <CheckInBanner/>
            <div className="w-full container flex flex-row gap-6 mt-12">
                <div className="w-full flex flex-col gap-6">
                    <RetrieveBooking onRetrieve={handleRetrieve}/>
                    <div className="w-full flex flex-row justify-between gap-6">
                        <FlightStatus/>
                        <BaggageRules/>
                    </div>
                </div>
                <TravelTip />
            </div>
        </div>
    );
}
  