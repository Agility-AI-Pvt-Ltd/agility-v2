import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Admin | Agility AI",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-white antialiased">
      {children}
    </div>
  );
}
