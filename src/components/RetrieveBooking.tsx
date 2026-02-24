"use client"

import { Card } from "@/components/ui/card"
import {Field, FieldGroup, FieldLabel} from "@/components/ui/field";
import { Input } from "@/components/ui/input"
import {useState} from "react";

interface RetrieveBookingProps {
    onRetrieve: (lastName: string, bookingRef: string) => void;
}

export default function RetrieveBooking({ onRetrieve }: RetrieveBookingProps) {
    const [lastName, setLastName] = useState("");
    const [bookingRef, setBookingRef] = useState("");
    const isValid = lastName.trim() !== "" && bookingRef.trim() !== "";

    return  <Card className="w-full flex flex-col gap-4 border-b-blue-200">
        <div className="flex flex-col gap-2 px-8 py-2">
            <div className="text-xl font-bold py-4"> Retrieve Your Booking </div>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="last-name">
                        Last Name
                    </FieldLabel>
                    <Input
                        id="last-name"
                        placeholder="Your last name"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="booking-ref">
                        Booking Reference (PNR)
                    </FieldLabel>
                    <Input
                        id="booking-ref"
                        placeholder="ABC123 or 1234567890123"
                        required
                        value={bookingRef}
                        onChange={(e) => setBookingRef(e.target.value)}
                    />
                </Field>
            </FieldGroup>
            <button className="text-white bg-sky-500 rounded-lg py-5 font-bold text-lg mt-4 disabled:opacity-50" disabled={!isValid} onClick={() => onRetrieve(lastName.trim(), bookingRef.trim())}>Retrieve Booking</button>
            <div className="flex px-4 py-4 bg-blue-200 rounded-lg">
                <p className="text-gray-600 text-sm"><strong className="text-cyan-700">Tip: </strong>Online check-in opens 24 hours before departure closes 2 hours before departure.</p>
            </div>
        </div>
    </Card>
}