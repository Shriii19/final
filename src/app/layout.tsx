import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ValtoriaCloud - Premium Game Server Hosting",
  description: "Premium game server hosting with enterprise-grade infrastructure, advanced security, and dedicated support for gamers worldwide. Host Minecraft servers, VPS, Discord bots, and more with ValtoriaCloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}