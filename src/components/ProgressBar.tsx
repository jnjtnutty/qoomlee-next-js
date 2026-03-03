interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    return (
        <div className="flex gap-1.5 w-full">
            {Array.from({ length: totalSteps }, (_, i) => {
                const stepIndex = i + 1;
                let bgClass = "bg-gray-200";

                if (stepIndex < currentStep) {
                    bgClass = "bg-sky-400";
                } else if (stepIndex === currentStep) {
                    bgClass = "bg-sky-600";
                }

                return (
                    <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${bgClass}`}
                    />
                );
            })}
        </div>
    );
}