import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "محمد ترمه چی | Portfolio",
  description:
    "Mohammad Termeh Chi - Frontend Developer specializing in React, Next.js, and Web Security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full`}>
      <body className="relative min-h-full bg-background text-foreground antialiased">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
