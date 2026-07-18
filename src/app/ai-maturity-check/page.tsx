import type { Metadata } from "next";
import MaturityCheckExperience from "@/components/maturity/MaturityCheckExperience";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: {
    absolute:
      "AI Maturity Check | Find Out Where You Stand | Agility AI",
  },
  description:
    "Answer five quick questions to find out where your organisation sits on the AI maturity ladder, from unaware to AI fluent, and what to do next.",
  openGraph: {
    title: "AI Maturity Check | Find Out Where You Stand | Agility AI",
    description:
      "Answer five quick questions to find out where your organisation sits on the AI maturity ladder, from unaware to AI fluent, and what to do next.",
  },
  twitter: {
    title: "AI Maturity Check | Find Out Where You Stand | Agility AI",
    description:
      "Answer five quick questions to find out where your organisation sits on the AI maturity ladder, from unaware to AI fluent, and what to do next.",
  },
};

export default function AiMaturityCheckPage() {
  return (
    <SiteChrome>
      <MaturityCheckExperience />
    </SiteChrome>
  );
}
