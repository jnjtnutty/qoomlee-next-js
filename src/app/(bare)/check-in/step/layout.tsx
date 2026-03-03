import CheckinHeader from "@/components/CheckinHeader";

const TOTAL_STEPS = 5;
const CURRENT_STEP = 2;

export default function StepLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <CheckinHeader
                title="Check-in"
                subtitle="Select Passengers"
                currentStep={CURRENT_STEP}
                totalSteps={TOTAL_STEPS}
            />
            {children}
        </>
    );
}