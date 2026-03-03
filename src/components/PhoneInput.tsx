import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {COUNTRY_CODES, CountryCode} from "@/data/countryCodes";

interface PhoneInputProps {
    selectedCountry: CountryCode;
    phoneNumber: string;
    onCountryChange: (country: CountryCode) => void;
    onPhoneChange: (value: string) => void;
}

export default function PhoneInput({
                                       selectedCountry,
                                       phoneNumber,
                                       onCountryChange,
                                       onPhoneChange,
                                   }: PhoneInputProps) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone Number
            </label>

            <div className="flex gap-2">
                {/* Country code selector */}
                <div ref={dropdownRef} className="relative">
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                    >
                        <span className="text-base leading-none">{selectedCountry.flag}</span>
                        <span className="font-medium">{selectedCountry.dialCode}</span>
                        <ChevronDown size={14} className="text-gray-400" />
                    </button>

                    {open && (
                        <div className="absolute top-full left-0 z-20 mt-1 w-56 max-h-60 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                            {COUNTRY_CODES.map((country) => (
                                <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => {
                                        onCountryChange(country);
                                        setOpen(false);
                                    }}
                                    className={[
                                        "flex w-full items-center gap-3 px-3 py-2.5 text-sm hover:bg-sky-50 transition-colors",
                                        selectedCountry.code === country.code
                                            ? "bg-sky-50 text-sky-700"
                                            : "text-gray-700",
                                    ].join(" ")}
                                >
                                    <span className="text-base leading-none">{country.flag}</span>
                                    <span className="flex-1 text-left">{country.name}</span>
                                    <span className="text-gray-400">{country.dialCode}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Phone number input */}
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => onPhoneChange(e.target.value.replace(/\D/g, ""))}
                    placeholder="Phone number"
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
            </div>

            <p className="mt-1.5 text-xs text-gray-400">{selectedCountry.name}</p>
        </div>
    );
}