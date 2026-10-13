import type { Metadata } from "next";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeClientStrip from "@/components/HomeClientStrip";
import HomeStatsBand from "@/components/HomeStatsBand";
import InteractiveProof from "@/components/InteractiveProof";
import Navbar from "@/components/Navbar";
import { COMPANY_SUBHEADING } from "@/lib/company";

export const metadata: Metadata = {
  title: "Agility AI | AI Enablement, Integration and Products",
  description: COMPANY_SUBHEADING,
  openGraph: {
    title: "Agility AI | AI Enablement, Integration and Products",
    description: COMPANY_SUBHEADING,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agility AI | AI Enablement, Integration and Products",
    description: COMPANY_SUBHEADING,
  },
};

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        <div className="relative">
          <Hero />
          <HomeStatsBand />
          <HomeClientStrip />
          <InteractiveProof />
          <Capabilities />
        </div>
      </main>
      <Footer />
    </div>
  );
}
