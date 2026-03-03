import {useCheckinStep} from "@/context/CheckinStepContext";
import PassengerDetailCard, {PassengerDetail} from "@/components/PassengerDetailCard";
import CheckinStepButton from "@/components/CheckinStepButton";
import {Passenger} from "@/components/PassengerCard";
import {useCallback, useState} from "react";
import {CountryCode} from "@/data/countryCodes";

interface CheckInPage3Props {
    passengers: Passenger[]
}

export function CheckInPage3({passengers}: CheckInPage3Props) {
    const {goNext, goBack} = useCheckinStep();
    const [passengersDetail, setPassengersDetail] =
        useState<PassengerDetail[]>(() =>
            passengers.map((p) => ({
                ...p,
                nationality: "",
                phoneCountry: { code: "", dialCode: "", flag: "", name: "" },
                phoneNumber: "",
            }))
        );

    const updatePassenger = useCallback(
        (id: string, updates: Partial<PassengerDetail>) => {
            setPassengersDetail((prev) =>
                prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
            );
        },
        []
    );

    const handleNationalityChange = useCallback(
        (id: string, nationality: string) => {
            updatePassenger(id, { nationality });
        },
        [updatePassenger]
    );

    const handlePhoneCountryChange = useCallback(
        (id: string, phoneCountry: CountryCode) => {
            updatePassenger(id, { phoneCountry });
        },
        [updatePassenger]
    );

    const handlePhoneNumberChange = useCallback(
        (id: string, phoneNumber: string) => {
            updatePassenger(id, { phoneNumber });
        },
        [updatePassenger]
    );

    const isValid = passengersDetail.every(
        (p) => p.nationality.length === 2 && p.phoneNumber.length > 0
    );

    const handleContinue = () => {
        goNext();
    };
    return (
        <div className="min-h-screen bg-sky-50/50 pb-28">
            <main className="mx-auto max-w-lg px-4 md:px-5 py-6 md:py-8">
                <div className="rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-gray-100">
                    <h2 className="text-lg md:text-xl font-bold text-gray-900">
                        Passenger Details
                    </h2>
                    <p className="mt-1 text-xs md:text-sm text-gray-500">
                        Enter required information for each passenger
                    </p>

                    <div className="mt-4 md:mt-6 flex flex-col gap-4 md:gap-6">
                        {passengersDetail.map((passenger, idx) => (
                            <PassengerDetailCard
                                key={passenger.id}
                                index={idx}
                                passenger={passenger}
                                onNationalityChange={handleNationalityChange}
                                onPhoneCountryChange={handlePhoneCountryChange}
                                onPhoneNumberChange={handlePhoneNumberChange}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <CheckinStepButton
                onBack={goBack}
                onContinue={handleContinue}
                disabled={!isValid}
            />
        </div>
    );
}