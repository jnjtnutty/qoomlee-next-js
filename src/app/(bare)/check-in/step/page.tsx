"use client";

import { useState, useCallback } from "react";
import PassengerList from "@/components/PassengerList";
import { Passenger } from "@/components/PassengerCard";

const PASSENGERS: Passenger[] = [
    { id: "1", name: "Alex Huum", type: "ADT", seat: "12A" },
    { id: "2", name: "Somsee Kuum", type: "ADT", seat: "12B" },
];


export default function CheckinPage() {
    const [selectedIds, setSelectedIds] = useState<string[]>(["1"]);

    const handleToggle = useCallback((id: string) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
        );
    }, []);

    const handleContinue = () => {
        // Proceed to next step
        console.log("Continue with passengers:", selectedIds);
    };

    const hasSelection = selectedIds.length > 0;

    return (
        <div className="min-h-screen bg-sky-50/50">
            <main className="mx-auto max-w-lg px-5 py-8">
                <PassengerList
                    passengers={PASSENGERS}
                    selectedIds={selectedIds}
                    onToggle={handleToggle}
                />

                <div className="mt-8">
                    <button
                        onClick={handleContinue}
                        disabled={!hasSelection}
                        className={[
                            "w-full rounded-xl py-4 text-base font-semibold transition-all duration-200",
                            hasSelection
                                ? "bg-sky-600 text-white hover:bg-sky-700 active:scale-[0.98] shadow-md shadow-sky-200"
                                : "bg-gray-200 text-gray-400 cursor-not-allowed",
                        ].join(" ")}
                    >
                        Continue
                    </button>
                </div>
            </main>
        </div>
    );
}