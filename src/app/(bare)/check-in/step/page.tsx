"use client";

import {useState} from "react";
import { Passenger } from "@/components/PassengerCard";
import {useCheckinStep} from "@/context/CheckinStepContext";
import {CheckInPage2} from "@/app/(bare)/check-in/step/checkInPage2";
import {CheckinPage3} from "@/app/(bare)/check-in/step/checkinPage3";

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

    if (currentStep === 3) {
        return <CheckinPage3 passengers={selectedPassengers}/>;
    }
    return <CheckInPage2 passengers={PASSENGERS} onContinue={handlePage2Continue}/>;
}