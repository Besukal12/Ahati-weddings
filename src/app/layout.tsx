import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JournalCta } from "@/components/journal/JournalCta";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahati Weddings",
  description: "Ethiopian best religious wedding planner.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <JournalCta />
        <Footer />
      </body>
    </html>
  );
}
