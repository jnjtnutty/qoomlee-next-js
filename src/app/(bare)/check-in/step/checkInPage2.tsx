import {useCallback, useState} from "react";
import CheckinStepButton from "@/components/CheckinStepButton";
import PassengerList from "@/components/PassengerList";
import SelectAllButton from "@/components/SelectAllButton";
import {Passenger} from "@/components/PassengerCard";

interface CheckInPage2Props {
    passengers: Passenger[]
    onContinue: (selectedPassengers: Passenger[]) => void;
}

export function CheckInPage2({passengers, onContinue}: CheckInPage2Props) {
    const [selectedIds, setSelectedIds] = useState<string[]>(["1"]);

    const handleToggle = useCallback((id: string) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
        );
    }, []);

    const handleContinue = () => {
        const selected = passengers.filter((p) => selectedIds.includes(p.id));
        onContinue(selected);
    };

    const handleSelectAll = useCallback(() => {
        setSelectedIds(passengers.map((p) => p.id));
    }, [passengers]);

    const handleClearAll = useCallback(() => {
        setSelectedIds([]);
    }, []);

    const hasSelection = selectedIds.length > 0;

    const allSelected = passengers.length > 0 && selectedIds.length === passengers.length;

    return (
        <>
            <main className="mx-auto max-w-lg px-5 py-8 pb-28">
                <PassengerList
                    passengers={passengers}
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
        </>
    );
}