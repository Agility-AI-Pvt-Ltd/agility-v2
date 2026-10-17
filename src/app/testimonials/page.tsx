import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import TestimonialsShowcase from "@/components/testimonials/TestimonialsShowcase";

export const metadata: Metadata = {
  title: {
    absolute: "Client Voices | Agility AI Enablement Testimonials",
  },
  description:
    "Hear directly from people who have gone through Agility AI's AI enablement sessions, in their own words.",
  openGraph: {
    title: "Client Voices | Agility AI Enablement Testimonials",
    description:
      "Hear directly from people who have gone through Agility AI's AI enablement sessions, in their own words.",
  },
  twitter: {
    title: "Client Voices | Agility AI Enablement Testimonials",
    description:
      "Hear directly from people who have gone through Agility AI's AI enablement sessions, in their own words.",
  },
};

export default function TestimonialsPage() {
  return (
    <SiteChrome>
      <TestimonialsShowcase />
    </SiteChrome>
  );
}
