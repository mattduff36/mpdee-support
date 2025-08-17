import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MPDEE Support - Professional IT Support Services",
  description: "Professional IT support services for businesses and consumers. Remote helpdesk, on-site support, hardware installation, software troubleshooting, and more.",
  keywords: "IT support, technical support, remote helpdesk, on-site support, hardware installation, software troubleshooting, computer repair, business IT support",
  authors: [{ name: "MPDEE Support" }],
  creator: "MPDEE Support",
  publisher: "MPDEE Support",
  metadataBase: new URL("https://support.mpdee.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MPDEE Support - Professional IT Support Services",
    description: "Professional IT support services for businesses and consumers. Remote helpdesk, on-site support, hardware installation, software troubleshooting, and more.",
    url: "https://support.mpdee.co.uk",
    siteName: "MPDEE Support",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPDEE Support - Professional IT Support Services",
    description: "Professional IT support services for businesses and consumers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
