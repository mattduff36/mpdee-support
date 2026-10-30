import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { generateMPDEEMetadata } from "@/src/shared/seo-utils";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import StructuredData from "@/components/StructuredData";

const manrope = localFont({
  src: "../public/fonts/Manrope.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
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
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
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

            function trackConversion(action) {
              gtag('event', 'conversion', {
                'send_to': 'G-FNQX2LJQQE/' + action,
                'service_type': 'support',
                'source_site': 'specialized'
              });
            }

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

        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
