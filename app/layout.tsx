import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { generateMPDEEMetadata } from "@/src/shared/seo-utils";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...generateMPDEEMetadata({
    title: "MPDEE Support - Professional IT Support Services",
    description:
      "Professional IT support services for businesses and consumers. Remote helpdesk, on-site support, hardware installation, software troubleshooting, and more.",
    keywords: [
      "IT support",
      "technical support",
      "remote helpdesk",
      "on-site support",
      "hardware installation",
      "software troubleshooting",
      "computer repair",
      "business IT support",
      "professional IT services",
      "technical assistance",
    ],
    canonicalUrl: "/",
    service: "support",
  }),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Cross-Domain Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FNQX2LJQQE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-cross-domain" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FNQX2LJQQE', {
              linker: {
                domains: ['mpdee.co.uk', 'creative.mpdee.co.uk', 'development.mpdee.co.uk', 'support.mpdee.co.uk']
              },
              custom_map: {
                'custom_parameter_1': 'service_conversion'
              }
            });
            
            // Track conversions
            function trackConversion(action) {
              gtag('event', 'conversion', {
                'send_to': 'G-FNQX2LJQQE/' + action,
                'service_type': 'support',
                'source_site': 'specialized'
              });
            }
            
            // Track hub referrals
            function trackHubReferral() {
              gtag('event', 'hub_referral', {
                'service_type': 'support',
                'destination': 'hub'
              });
            }
            
            window.trackConversion = trackConversion;
            window.trackHubReferral = trackHubReferral;
          `}
        </Script>
        
        <Navigation />
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-center">
          <p className="text-sm text-amber-800">
            🚧 Website under construction - Some features may be temporarily unavailable
          </p>
        </div>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
