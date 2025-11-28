import type { Metadata } from "next";
import { Space_Grotesk, Syncopate } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
});

export const metadata: Metadata = {
  title: "Manzar 2025 | Visual Euphoria",
  description: "An immersive audiovisual odyssey in Tokyo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${syncopate.variable} antialiased bg-[#31326f] text-white overflow-x-hidden selection:bg-[#4fb7b3] selection:text-black`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
