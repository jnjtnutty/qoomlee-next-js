import { Check, X } from "lucide-react";

interface SelectAllButtonProps {
    allSelected: boolean;
    onToggle: () => void;
}

export default function SelectAllButton({
                                            allSelected,
                                            onToggle,
                                        }: SelectAllButtonProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            className={[
                "flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                allSelected
                    ? "border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300",
            ].join(" ")}
        >
            {allSelected ? (
                <>
                    <X size={16} strokeWidth={2.5} />
                    Clear All
                </>
            ) : (
                <>
                    <Check size={16} strokeWidth={2.5} />
                    Select All
                </>
            )}
        </button>
    );
}