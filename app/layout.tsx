import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/core/components/Navbar";
import ToastProvider from "@/core/components/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat with :)",
  description: "Chat with :) is a real-time chat application built with Next.js, React, and Socket.IO. It allows users to create accounts, join chat rooms, and communicate with others in real time. The app features a sleek and modern design, making it easy and enjoyable to use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <ToastProvider /> {/* ✅ correct */}
      </body>
    </html>
  );
}
