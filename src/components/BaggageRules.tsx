import {Card} from "@/components/ui/card";
import {ArrowRight, BaggageClaim} from "lucide-react";

export default function BaggageRules() {
    return <Card className="w-full h-fit flex-wrap flex-col gap-3 border-b-blue-200 shadow-blue-200 px-4 md:px-6 rounded-md">
        <div className="flex flex-row items-center gap-4">
            <div className="w-fit bg-cyan-100 p-2 rounded-md inline-flex items-center justify-center">
                <BaggageClaim className="w-6 h-6 text-cyan-600"/>
            </div>
            <div className="text-lg font-bold text-black">Baggage Rules</div>
        </div>
        <div className="text-sm text-gray-500">Economy: 1 carry-on (7kg) + checked (23kg).
            Business: 2 carry-ons + 2 checked bags (32kg
            each).
        </div>
        <div className="flex flex-row items-center">
            <div className="text-sm font-bold text-cyan-600">Learn More</div>
            <ArrowRight className="w-6 h-4 text-sky-500"/>
        </div>
    </Card>
}