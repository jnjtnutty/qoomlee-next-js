"use client";

import {createContext, useContext, useState, useCallback, ReactNode} from "react";

interface CheckinStepContextType {
    currentStep: number;
    totalSteps: number;
    goNext: () => void;
    goBack: () => void;
}

const CheckinStepContext = createContext<CheckinStepContextType | undefined>(undefined);

export function CheckinStepProvider({children, totalSteps = 5}: { children: ReactNode; totalSteps?: number }) {
    const [currentStep, setCurrentStep] = useState(2);

    const goNext = useCallback(() => {
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }, [totalSteps]);

    const goBack = useCallback(() => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    }, []);

    return (
        <CheckinStepContext.Provider value={{currentStep, totalSteps, goNext, goBack}}>
            {children}
        </CheckinStepContext.Provider>
    );
}

export function useCheckinStep() {
    const context = useContext(CheckinStepContext);
    if (context === undefined) {
        throw new Error("useCheckinStep must be used within a CheckinStepProvider");
    }
    return context;
}
