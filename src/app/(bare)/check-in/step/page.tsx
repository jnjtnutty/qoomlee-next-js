"use client";

import {useState} from "react";
import { Passenger } from "@/components/PassengerCard";
import {useCheckinStep} from "@/context/CheckinStepContext";
import {CheckInPage2} from "@/app/(bare)/check-in/step/checkInPage2";
import {CheckInPage3} from "@/app/(bare)/check-in/step/checkInPage3";
import {CheckInPage4} from "@/app/(bare)/check-in/step/checkInPage4";

const PASSENGERS: Passenger[] = [
    { id: "1", name: "Alex Huum", type: "ADT", seat: "12A" },
    { id: "2", name: "Somsee Kuum", type: "ADT", seat: "12B" },
];

export default function CheckinPage() {
    const {currentStep, goNext} = useCheckinStep();
    const [selectedPassengers, setSelectedPassengers] = useState<Passenger[]>([]);

    const handlePage2Continue = (selected: Passenger[]) => {
        setSelectedPassengers(selected);
        goNext();
    };

    switch (currentStep) {
        case 2: return <CheckInPage2 passengers={PASSENGERS} onContinue={handlePage2Continue}/>
        case 3: return <CheckInPage3 passengers={selectedPassengers}/>
        case 4: return <CheckInPage4 />
        case 5: return <CheckInPage4 />
        default : return <></>
    }
}