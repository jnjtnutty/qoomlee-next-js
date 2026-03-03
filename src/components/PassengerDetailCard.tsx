import NationalityInput from "./NationalityInput";
import PhoneInput from "./PhoneInput";
import { CountryCode } from "@/data/countryCodes";

export interface PassengerDetail {
    id: string;
    name: string;
    nationality: string;
    phoneCountry: CountryCode;
    phoneNumber: string;
}

interface PassengerDetailCardProps {
    index: number;
    passenger: PassengerDetail;
    onNationalityChange: (id: string, value: string) => void;
    onPhoneCountryChange: (id: string, country: CountryCode) => void;
    onPhoneNumberChange: (id: string, value: string) => void;
}

export default function PassengerDetailCard({
                                                index,
                                                passenger,
                                                onNationalityChange,
                                                onPhoneCountryChange,
                                                onPhoneNumberChange,
                                            }: PassengerDetailCardProps) {
    return (
        <div className="rounded-xl border border-gray-200 p-3 md:p-5">
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-3 md:mb-4">
                {index + 1}. {passenger.name.toUpperCase()}
            </h3>

            <div className="flex flex-col gap-3 md:gap-5">
                <NationalityInput
                    value={passenger.nationality}
                    onChange={(val) => onNationalityChange(passenger.id, val)}
                />
                <PhoneInput
                    selectedCountry={passenger.phoneCountry}
                    phoneNumber={passenger.phoneNumber}
                    onCountryChange={(country) => onPhoneCountryChange(passenger.id, country)}
                    onPhoneChange={(val) => onPhoneNumberChange(passenger.id, val)}
                />
            </div>
        </div>
    );
}