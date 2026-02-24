"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Flights", href: "/flights" },
    { label: "Check-in", href: "/check-in" },
    { label: "Manage Booking", href: "/manage-booking" },
    { label: "Contact", href: "/contact" },
];

interface NavbarProps {
    isMobile: boolean;
}

export default function Navbar({ isMobile }: NavbarProps) {

    const pathname = usePathname();

    return (
        <nav className="w-full h-auto bg-white flex justify-center items-center px-8 py-4">
            <div className="max-w-5xl w-full flex justify-between">
            <div className="flex items-center gap-2">
                <Image
                    src="/next.svg"
                    width={32}
                    height={32}
                    alt="Logo"
                />
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-black">Qoomlee</h1>
                    <p className="text-sm text-sky-500 text-align-center">Airline</p>
                </div>
            </div>

            {isMobile ? (
                <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white border-4 border-solid border-gray-200">
                    P
                </div>
            ) : (
                <ul className="flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`text-md font-bold transition-colors pb-1 ${
                                        isActive
                                            ? "text-sky-500 border-b-2 border-sky-500 pb-1"
                                            : "text-gray-700 hover:text-sky-500"
                                    }`}>
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
            </div>
        </nav>
    );
}