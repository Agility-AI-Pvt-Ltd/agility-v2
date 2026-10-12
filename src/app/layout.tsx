import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BookCallModal from "@/components/BookCallModal";
import Chatbot from "@/components/Chatbot";
import SmoothScroll from "@/components/SmoothScroll";
import { COMPANY_SUBHEADING } from "@/lib/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Agility AI | AI Enablement, Integration and Products",
    template: "%s | Agility AI",
  },
  description: COMPANY_SUBHEADING,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-geist-mono)]">
        <SmoothScroll />
        {children}
        <BookCallModal />
        <Chatbot />
      </body>
    </html>
  );
}
