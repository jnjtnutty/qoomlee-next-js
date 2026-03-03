import {House, Plane, CheckCircleIcon, BaggageClaimIcon, Send, LucideIcon} from "lucide-react";
export interface NavLink {
    label: string;
    shortLabel: string;
    href: string;
    icon: LucideIcon;
}

export const navLinks: NavLink[] = [
    {label: "Home", shortLabel: "Home", href: "/", icon: House},
    {label: "Flights", shortLabel: "Flights", href: "/flights", icon: Plane},
    {label: "Check-in", shortLabel: "Check-in", href: "/check-in", icon: CheckCircleIcon},
    {label: "Manage Booking", shortLabel: "Booking", href: "/manage-booking", icon: BaggageClaimIcon},
    {label: "Contact", shortLabel: "Contact", href: "/contact", icon: Send},
];