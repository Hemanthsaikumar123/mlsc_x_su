"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MLSCBackground from "@/components/MLSCBackground";
import ClickSpark from "@/components/ClickSpark";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <div className="min-h-screen w-full bg-[#020817]">{children}</div>;
  }

  return (
    <ClickSpark
      sparkColor="#1652b5"
      sparkSize={19}
      sparkRadius={50}
      sparkCount={8}
      duration={400}
    >
      {/* Shared ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <MLSCBackground />
      </div>

      <Navbar />

      <div className="relative">{children}</div>

      <Footer />
    </ClickSpark>
  );
}
