import type { Metadata } from "next";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IndustriesTeaser from "@/components/IndustriesTeaser";
import InteractiveProof from "@/components/InteractiveProof";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
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
          <div className="relative h-[200svh]">
            <InteractiveProof />
          </div>
          <div className="relative h-[200svh]">
            <Capabilities />
          </div>
          <div className="relative z-30 bg-white">
            {/* <Credentials /> */}
            {/* <Problem /> */}
            <Testimonials />
            {/* <IndustriesTeaser /> */}
            {/* <TeamTeaser /> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
