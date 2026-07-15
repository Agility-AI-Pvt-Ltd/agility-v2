import Capabilities from "@/components/Capabilities";
import CareersTeaser from "@/components/CareersTeaser";
import ContactCTA from "@/components/ContactCTA";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IndustriesTeaser from "@/components/IndustriesTeaser";
import Navbar from "@/components/Navbar";
import Problem from "@/components/Problem";
import TeamTeaser from "@/components/TeamTeaser";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Credentials />
        <Problem />
        <Capabilities />
        <Testimonials />
        <IndustriesTeaser />
        <TeamTeaser />
        <CareersTeaser />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
