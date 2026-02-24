"use client"

import CheckInBanner from "@/components/CheckInBanner";
import RetrieveBooking from "@/components/RetrieveBooking";
import TravelTip from "@/components/TravelTip";


export default function CheckInPage() {
    const handleRetrieve = (lastName: string, bookingRef: string) => {
        console.log("Retrieving booking:", { lastName, bookingRef });
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <CheckInBanner/>
            <div className="w-full container flex flex-row gap-6 mt-12">
                <RetrieveBooking onRetrieve={handleRetrieve}/>
                <TravelTip />
            </div>
        </div>
    );
}
  