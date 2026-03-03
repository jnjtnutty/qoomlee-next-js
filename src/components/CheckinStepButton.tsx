"use client";

import {useRouter} from "next/navigation";

interface CheckinStepButtonProps {
    onContinue: () => void;
    onBack?: () => void;
    disabled?: boolean;
    continueLabel?: string;
    backLabel?: string;
    topRight?: React.ReactNode;
}

export default function CheckinStepButton({
                                              onContinue,
                                              onBack,
                                              disabled = false,
                                              continueLabel = "Continue",
                                              backLabel = "Back",
                                              topRight,
                                          }: CheckinStepButtonProps) {
    const router = useRouter();

    return (
        <div className="fixed bottom-0 w-full">
            {topRight && (
                <div className="flex justify-end mb-3">
                    {topRight}
                </div>
            )}
            <div className="bg-white border-t border-gray-200 py-4 px-2">
                <div className="flex flex-row gap-2 justify-between">
                    <button
                        onClick={onBack ?? (() => router.back())}
                        className="w-full flex rounded-xl py-4 justify-center text-base font-semibold border border-sky-600 text-sky-600 bg-white hover:bg-sky-50">
                        {backLabel}
                    </button>
                    <button
                        onClick={onContinue}
                        disabled={disabled}
                        className={[
                            "w-full flex rounded-xl py-4 justify-center text-base font-semibold",
                            disabled
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-sky-600 text-white hover:bg-sky-700 active:scale-[0.98] shadow-md shadow-sky-200",
                        ].join(" ")}>
                        {continueLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
