"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {navLinks} from "@/lib/navLinks";

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50">
            <ul className="flex flex-row justify-around items-center h-16">
                {navLinks.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`flex flex-col items-center gap-0.5 ${
                                    isActive ? "text-sky-500" : "text-gray-500"
                                }`}
                            >
                                <Icon className="w-5 h-5"/>
                                <span className="text-xs">{item.shortLabel}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}