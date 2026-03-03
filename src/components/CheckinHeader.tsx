"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";

interface CheckinHeaderProps {
    title: string;
    subtitle: string;
    currentStep: number;
    totalSteps: number;
}

export default function CheckinHeader({
                                          title,
                                          subtitle,
                                          currentStep,
                                          totalSteps,
                                      }: CheckinHeaderProps) {
    const router = useRouter();

    return (
        <header className="sticky top-0 z-10 bg-white">
            <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push("/check-in")}
                        aria-label="Close"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <X size={22} strokeWidth={2.5} />
                    </button>
                    <div>
                        <h1 className="text-lg font-bold text-gray-900 leading-tight">
                            {title}
                        </h1>
                        <p className="text-sm text-gray-500">{subtitle}</p>
                    </div>
                </div>
                <span className="text-sm font-medium text-gray-500">
          Step {currentStep} of {totalSteps}
        </span>
            </div>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </header>
    );
}