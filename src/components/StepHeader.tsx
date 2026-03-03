"use client";

import CheckinHeader from "@/components/CheckinHeader";
import {useCheckinStep} from "@/context/CheckinStepContext";

const subtitles: Record<number, string> = {
    2: "Select Passengers",
    3: "Passenger Details",
};

export default function StepHeader() {
    const {currentStep, totalSteps} = useCheckinStep();

    return (
        <CheckinHeader
            title="Check-in"
            subtitle={subtitles[currentStep] ?? ""}
            currentStep={currentStep}
            totalSteps={totalSteps}
        />
    );
}
