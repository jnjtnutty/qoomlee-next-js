import {Card} from "@/components/ui/card";
import DangerousGoodsDeclaration from "@/components/DangerousGoodsDeclaration";
import CheckinStepButton from "@/components/CheckinStepButton";
import {useCheckinStep} from "@/context/CheckinStepContext";

export function CheckInPage4() {
    const {goNext, goBack} = useCheckinStep();
    const handleContinue = () => {
        goNext();
    };
    return <div>
        <DangerousGoodsDeclaration />
        <CheckinStepButton
            onBack={goBack}
            onContinue={handleContinue}
        />
    </div>
}