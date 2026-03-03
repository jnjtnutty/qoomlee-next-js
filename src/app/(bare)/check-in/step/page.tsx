"use client";

import { useState, useCallback } from "react";
import PassengerList from "@/components/PassengerList";
import { Passenger } from "@/components/PassengerCard";
import CheckinStepButton from "@/components/CheckinStepButton";
import SelectAllButton from "@/components/SelectAllButton";

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
        console.log("Continue with passengers:", selectedIds);
    };

    const handleSelectAll = useCallback(() => {
        setSelectedIds(PASSENGERS.map((p) => p.id));
    }, []);

    const handleClearAll = useCallback(() => {
        setSelectedIds([]);
    }, []);

    const hasSelection = selectedIds.length > 0;

    const allSelected = PASSENGERS.length > 0 && selectedIds.length === PASSENGERS.length;

    return (
        <div className="min-h-screen bg-sky-50/50">
            <main className="mx-auto max-w-lg px-5 py-8 pb-28">
                <PassengerList
                    passengers={PASSENGERS}
                    selectedIds={selectedIds}
                    onToggle={handleToggle}
                />
            </main>
            <CheckinStepButton
                onContinue={handleContinue}
                disabled={!hasSelection}
                topRight={
                    <SelectAllButton
                        allSelected={allSelected}
                        onToggle={allSelected ? handleClearAll : handleSelectAll}
                    />
                }
            />
        </div>
    );
}