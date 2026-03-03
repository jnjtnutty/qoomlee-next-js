import {CheckinStepProvider} from "@/context/CheckinStepContext";
import StepHeader from "@/components/StepHeader";

export default function StepLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CheckinStepProvider totalSteps={5}>
            <StepHeader/>
            {children}
        </CheckinStepProvider>
    );
}