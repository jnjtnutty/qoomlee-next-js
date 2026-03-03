export interface CountryCode {
    code: string;
    dialCode: string;
    flag: string;
    name: string;
}

export const COUNTRY_CODES: CountryCode[] = [
    { code: "TH", dialCode: "+66", flag: "\u{1F1F9}\u{1F1ED}", name: "Thailand" },
    { code: "US", dialCode: "+1", flag: "\u{1F1FA}\u{1F1F8}", name: "United States" },
    { code: "GB", dialCode: "+44", flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom" },
    { code: "JP", dialCode: "+81", flag: "\u{1F1EF}\u{1F1F5}", name: "Japan" },
    { code: "CN", dialCode: "+86", flag: "\u{1F1E8}\u{1F1F3}", name: "China" },
    { code: "KR", dialCode: "+82", flag: "\u{1F1F0}\u{1F1F7}", name: "South Korea" },
    { code: "SG", dialCode: "+65", flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore" },
    { code: "MY", dialCode: "+60", flag: "\u{1F1F2}\u{1F1FE}", name: "Malaysia" },
    { code: "AU", dialCode: "+61", flag: "\u{1F1E6}\u{1F1FA}", name: "Australia" },
    { code: "DE", dialCode: "+49", flag: "\u{1F1E9}\u{1F1EA}", name: "Germany" },
    { code: "FR", dialCode: "+33", flag: "\u{1F1EB}\u{1F1F7}", name: "France" },
    { code: "IN", dialCode: "+91", flag: "\u{1F1EE}\u{1F1F3}", name: "India" },
    { code: "VN", dialCode: "+84", flag: "\u{1F1FB}\u{1F1F3}", name: "Vietnam" },
    { code: "PH", dialCode: "+63", flag: "\u{1F1F5}\u{1F1ED}", name: "Philippines" },
    { code: "ID", dialCode: "+62", flag: "\u{1F1EE}\u{1F1E9}", name: "Indonesia" },
];

export function getCountryByCode(code: string): CountryCode | undefined {
    return COUNTRY_CODES.find((c) => c.code === code);
}

export function getCountryByDialCode(dialCode: string): CountryCode | undefined {
    return COUNTRY_CODES.find((c) => c.dialCode === dialCode);
}