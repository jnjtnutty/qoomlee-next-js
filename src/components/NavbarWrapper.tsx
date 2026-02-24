"use client";

import Navbar from "@/components/Navbar";
import { useMediaQueryContext } from "@/context/MediaQueryContext";

export default function NavbarWrapper() {
  const { isMobile } = useMediaQueryContext();
  return <Navbar isMobile={isMobile} />;
}
