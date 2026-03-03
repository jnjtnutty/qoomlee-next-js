import { Check } from "lucide-react";

export interface Passenger {
    id: string;
    name: string;
    type: "ADT" | "CHD" | "INF";
    seat: string;
}

interface PassengerCardProps {
    passenger: Passenger;
    selected: boolean;
    onToggle: (id: string) => void;
}

export default function PassengerCard({
                                          passenger,
                                          selected,
                                          onToggle,
                                      }: PassengerCardProps) {
    return (
        <button
            type="button"
            onClick={() => onToggle(passenger.id)}
            className={[
                "relative w-full text-left rounded-xl border-2 p-5 transition-all duration-200",
                selected
                    ? "border-sky-500 bg-sky-50/60 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm",
            ].join(" ")}
        >
            {selected && (
                <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden rounded-tr-[10px]">
                    <svg
                        className="absolute top-0 right-0"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                    >
                        <polygon points="0,0 40,0 40,40" fill="#0ea5e9" />
                    </svg>
                    <Check
                        size={14}
                        strokeWidth={3}
                        className="absolute top-1.5 right-1.5 text-white"
                    />
                </div>
            )}

            <p
                className={[
                    "text-base font-bold tracking-wide",
                    selected ? "text-gray-900 uppercase" : "text-gray-800",
                ].join(" ")}
            >
                {passenger.name}
            </p>

            <div className="mt-2 flex items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-0.5 text-xs font-semibold text-sky-700">
          {passenger.type}
        </span>
                <span className="text-sm font-medium text-sky-700">
          Seat {passenger.seat}
        </span>
            </div>
        </button>
    );
}