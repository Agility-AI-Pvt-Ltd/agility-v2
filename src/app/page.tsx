import type { Metadata } from "next";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeImpactMetrics from "@/components/HomeImpactMetrics";
import InteractiveProof from "@/components/InteractiveProof";
import Navbar from "@/components/Navbar";
import OurClients from "@/components/OurClients";
import ProgrammesPartnerships from "@/components/ProgrammesPartnerships";
import WorkInAction from "@/components/WorkInAction";
import { COMPANY_SUBHEADING } from "@/lib/company";

export const metadata: Metadata = {
  title:
    "Agility AI | AI Automation, Assistants and Training for Government, Corporates and Institutions",
  description: COMPANY_SUBHEADING,
  openGraph: {
    title:
      "Agility AI | AI Automation, Assistants and Training for Government, Corporates and Institutions",
    description: COMPANY_SUBHEADING,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Agility AI | AI Automation, Assistants and Training for Government, Corporates and Institutions",
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
          <ProgrammesPartnerships />
          <HomeImpactMetrics />
          <InteractiveProof />
          <Capabilities />
          <WorkInAction />
          <OurClients />
        </div>
      </main>
      <Footer />
    </div>
  );
}
