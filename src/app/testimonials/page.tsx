import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import TestimonialsShowcase from "@/components/testimonials/TestimonialsShowcase";

export const metadata: Metadata = {
  title: {
    absolute: "Client Voices | Agility AI Enablement Testimonials",
  },
  description:
    "Leaders and teams from government, corporates, institutions and social enterprises on working with Agility AI.",
  openGraph: {
    title: "Client Voices | Agility AI Enablement Testimonials",
    description:
      "Leaders and teams from government, corporates, institutions and social enterprises on working with Agility AI.",
  },
  twitter: {
    title: "Client Voices | Agility AI Enablement Testimonials",
    description:
      "Leaders and teams from government, corporates, institutions and social enterprises on working with Agility AI.",
  },
};

export default function TestimonialsPage() {
  return (
    <SiteChrome>
      <TestimonialsShowcase />
    </SiteChrome>
  );
}
