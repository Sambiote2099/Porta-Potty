import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";
import SmoothScroll from "@/components/gsap/SmoothScroll";
import ClickSpark from "@/components/ui/ClickSpark";
import Navbar from '@/components/Navbar';
import DynamicScrollbar from '@/components/DynamicScrollbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arif Hasan Sameer - Portfolio",
  description: "Software Developer | CSE Student | Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <DynamicScrollbar />
        
          <ClickSpark sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
          <Navbar/>
          <SmoothScroll>
          {children}
          <Footer/>
          </SmoothScroll>
          </ClickSpark>
      </body>
    </html>
  );
}
