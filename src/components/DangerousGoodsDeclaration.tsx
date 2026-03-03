import { DANGEROUS_GOODS } from "@/data/dangerousGoods";
import { Card } from "@/components/ui/card";

export default function DangerousGoodsDeclaration() {
    return (
        <Card className="h-max rounded-2xl p-4 md:p-6 border-gray-100 m-4 ">
            {/* Header */}
            <h2 className="text-xl font-bold text-gray-900">
                Dangerous Goods Declaration
            </h2>
            <p className="mt-1 text-sm text-gray-500">
                A mandatory safety and legal declaration as required by Thai law
                (CAAT/AOT).
            </p>

            <hr className="my-5 border-gray-100" />

            {/* Warning text */}
            <p className="text-base font-bold text-red-600 leading-relaxed">
                For the safety of the flight, the transport of specific hazardous items
                is strictly forbidden.
            </p>

            {/* Confirmation paragraph */}
            <p className="mt-5 text-sm leading-relaxed text-gray-700">
                By continuing, you confirm that you and those in your booking are NOT
                carrying the following Dangerous Goods in your carry-on or checked
                baggage, which are prohibited under all circumstances:
            </p>

            {/* Items list */}
            <ul className="mt-5 flex flex-col gap-3 pl-1">
                {DANGEROUS_GOODS.map((item) => (
                    <li key={item.title} className="flex gap-3 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                        <span className="leading-relaxed">
              <span className="font-medium text-gray-900">{item.title}</span>{" "}
                            ({item.examples}).
            </span>
                    </li>
                ))}
            </ul>
        </Card>
    );
}