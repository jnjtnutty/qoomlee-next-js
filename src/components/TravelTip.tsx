import {Card} from "@/components/ui/card";
import {CircleCheckBig, MapPin} from "lucide-react";
import {useMediaQueryContext} from "@/context/MediaQueryContext";

export default function TravelTip() {
    const {isMobile} = useMediaQueryContext();

    return (
        <div className={isMobile ? "flex w-full" : "flex w-lg"}>
            <Card className="w-full flex flex-col gap-4 border-b-blue-200 bg-linear-to-b from-white to-sky-50 px-8 py-8 shadow-blue-200 rounded-md">
                <div className="flex flex-row items-center gap-4">
                    <div className="bg-sky-600 p-2 rounded-md inline-flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white"/>
                    </div>
                    <div className="text-xl font-bold">Travel Tips</div>
                </div>
                <CheckList text="Arrive Early" desc="Arrive 2-3 hours before internal flight, 1-2 hours for domestic."/>
                <CheckList text="Valid Documents" desc="Ensure your passport is valid for 6 months beyond your travel dates."/>
                <CheckList text="Mobile Boarding" desc="Download your boarding pass to your phone for quick access."/>
                <CheckList text="Pack Smart" desc="Keep liquids in containers ≤100ml and place in a clear bag."/>
                <CheckList text="Stay Informed" desc="Check visa requirements and travel advisories for your destination."/>
                <Card className="flex border-blue-200 rounded-md">
                    <div className="flex flex-col gap-2 items-center">
                        <div className="text-xs text-gray-500">Need help? Contact our 24/7 support team</div>
                        <div className="text-md text-cyan-700 font-bold">+1-800-QOOMLEE</div>
                    </div>
                </Card>
            </Card>
        </div>
    )
}

export function CheckList({ text, desc }: { text: string, desc: string }){
    return <div className="flex flex-row gap-2 py-2">
        <CircleCheckBig className="w-8 h-8 text-sky-500"/>
        <div className="flex flex-col">
            <div className="text-sm font-semibold">{text}</div>
            <div className="text-xs text-gray-500">{desc}</div>
        </div>
    </div>
}