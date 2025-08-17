import Link from "next/link";
import { MPDEELogo } from "./mpdee-logo";
import { CONTACT_INFO } from "@/lib/constants/services";

const footerSections = {
  services: {
    title: "Services",
    links: [
      { name: "Remote Support", href: "/services#remote-support" },
      { name: "On-Site Support", href: "/services#onsite-support" },
      { name: "Hardware Services", href: "/services#hardware-services" },
      { name: "Software Solutions", href: "/services#software-solutions" },
      { name: "Consultation", href: "/services#consultation" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { name: "Knowledge Base", href: "/knowledge-base" },
      { name: "Resources", href: "/resources" },
      { name: "FAQ", href: "/knowledge-base#faq" },
      { name: "Contact Support", href: "/contact" },
    ],
  },
  company: {
    title: "MPDEE Family",
    links: [
      { name: "MPDEE Development", href: "https://www.mpdee.co.uk", external: true },
      { name: "MPDEE Creative", href: "https://creative.mpdee.co.uk", external: true },
      { name: "MPDEE Support", href: "/", external: false },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand section */}
          <div className="col-span-2 lg:col-span-1">
            <MPDEELogo size="sm" className="mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Professional IT support services to help your business succeed with technology.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <span className="font-medium">Email:</span>
                <br />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-foreground">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div>
                <span className="font-medium">Response Time:</span>
                <br />
                {CONTACT_INFO.responseTime}
              </div>
              <div>
                <span className="font-medium">Location:</span>
                <br />
                {CONTACT_INFO.location}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {footerSections.services.title}
            </h3>
            <ul className="space-y-2">
              {footerSections.services.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {footerSections.support.title}
            </h3>
            <ul className="space-y-2">
              {footerSections.support.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {footerSections.company.title}
            </h3>
            <ul className="space-y-2">
              {footerSections.company.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.name}
                    {link.external && (
                      <span className="ml-1">
                        <svg
                          className="inline h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {footerSections.legal.title}
            </h3>
            <ul className="space-y-2">
              {footerSections.legal.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MPDEE Support. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-muted-foreground">
                Part of the MPDEE family of services
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
