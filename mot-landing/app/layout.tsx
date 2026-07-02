import LiveChat from "@/components/LiveChat";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "MOT — AI Agentic & Web Development Agency for Startups",
  description:
    "MOT builds agentic AI systems and high-converting websites for early-stage startups. We help founders ship faster without hiring a full tech team.",
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
      <body className="min-h-full flex flex-col">
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "NGO"],
              name: "MOT",
              alternateName: "MOT Agency",
              description:
                "MOT is a boutique agency building agentic AI systems and high-converting websites for early-stage startups. We help founders ship faster without hiring a full tech team.",
              url: "https://mot.id",
              logo: "https://mot.id/logo.png",
              sameAs: [
                "https://github.com/rianmuhamad-coddx/tott",
                "https://x.com/rianmuhamad",
              ],
            }),
          }}
        />
        {children}
        <LiveChat />
      </body>
    </html>
  );
}
