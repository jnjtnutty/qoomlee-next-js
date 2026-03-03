import PassengerCard, { Passenger } from "./PassengerCard";

interface PassengerListProps {
    passengers: Passenger[];
    selectedIds: string[];
    onToggle: (id: string) => void;
}

export default function PassengerList({
                                          passengers,
                                          selectedIds,
                                          onToggle
                                      }: PassengerListProps) {

    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Select Passengers</h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Choose passengers for check-in
                    </p>
                </div>
            </div>

            <hr className="my-5 border-gray-100" />

            <div className="flex flex-col gap-4">
                {passengers.map((passenger) => (
                    <PassengerCard
                        key={passenger.id}
                        passenger={passenger}
                        selected={selectedIds.includes(passenger.id)}
                        onToggle={onToggle}
                    />
                ))}
            </div>
        </div>
    );
}