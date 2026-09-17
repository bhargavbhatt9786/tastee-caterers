import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Tastee Caterers | Best Catering Service in Bardoli",
  description:
    "Tastee Caterers provides premium catering services in Bardoli, Gujarat for weddings, birthdays, corporate events, parties and special occasions.",
  keywords: [
    "Tastee Caterers",
    "Tastee Catering Services",
    "Catering Service Bardoli",
    "Caterers in Bardoli",
    "Wedding Catering Bardoli",
    "Birthday Catering Bardoli",
    "Food Catering Bardoli",
    "Catering Services Gujarat",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}