import {Card} from "@/components/ui/card";
import {ArrowRight, Clock} from "lucide-react";

export default function FlightStatus() {
    return <Card className="w-full flex-wrap flex-col gap-3 border-b-blue-200 shadow-blue-200 px-4 md:px-6 rounded-md">
        <div className="flex flex-row items-center gap-4">
            <div className="w-fit bg-sky-100 p-2 rounded-md inline-flex items-center justify-center">
                <Clock className="w-6 h-6 text-sky-800"/>
            </div>
            <div className="text-lg font-bold text-black">Flight Status</div>
        </div>
        <div className="text-sm text-gray-500">Track your flight in real-time. Get updates on departure, arrival, gate
            changes, and delays.
        </div>
        <div className="flex flex-row items-center">
            <div className="text-sm font-bold text-sky-600">Check Status</div>
            <ArrowRight className="w-6 h-4 text-sky-500"/>
        </div>
    </Card>
}