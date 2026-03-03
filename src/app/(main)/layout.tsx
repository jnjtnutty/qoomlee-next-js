import NavbarWrapper from "@/components/NavbarWrapper";
import BottomNavWrapper from "@/components/BottomNavWrapper";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavbarWrapper/>
            <BottomNavWrapper>
                {children}
            </BottomNavWrapper>
        </>
    );
}