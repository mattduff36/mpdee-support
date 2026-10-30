"use client";

import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants/services";

const explore = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Knowledge base", href: "/knowledge-base" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Remote support", href: "/services#remote-support" },
  { name: "On-site support", href: "/services#onsite-support" },
  { name: "Hardware services", href: "/services#hardware-services" },
  { name: "Software solutions", href: "/services#software-solutions" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link href="/" className="footer-brand-lockup">
              <Image
                className="brand-mark"
                src="/Images/MPDEE-Support-logo.png"
                alt=""
                width={48}
                height={48}
              />
              <span className="footer-brand">
                mpdee<span>.</span>
              </span>
            </Link>
            <p>
              Professional IT support for remote helpdesk, on-site work, hardware and software.
              <br />
              <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              <br />
              {CONTACT_INFO.responseTime}. {CONTACT_INFO.location}.
            </p>
          </div>
          <div className="footer-links">
            <span className="eyebrow">Support</span>
            {explore.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="footer-links">
            <span className="eyebrow">Services</span>
            {services.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MPDEE Support</span>
          <div className="family-links">
            <span>Part of the MPDEE family</span>
            <a
              href="https://mpdee.co.uk"
              target="_blank"
              rel="noreferrer"
              onClick={() => window.trackHubReferral?.()}
            >
              MPDEE
            </a>
            <a href="https://creative.mpdee.co.uk" target="_blank" rel="noreferrer">
              Creative
            </a>
            <a href="https://development.mpdee.co.uk" target="_blank" rel="noreferrer">
              Development
            </a>
          </div>
          <a href="#main-content">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
