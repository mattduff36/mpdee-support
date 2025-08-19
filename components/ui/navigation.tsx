"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Global function declarations for analytics tracking
declare global {
  interface Window {
    trackConversion?: (action: string) => void;
    trackHubReferral?: () => void;
  }
}

const navigationItems = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Knowledge Base", href: "/knowledge-base" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/Images/MPDEE-Support-logo.png"
                alt="MPDEE Support Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
              <span className="text-2xl font-bold support-text-gradient">
                Support
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://mpdee.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && window.trackHubReferral) {
                  window.trackHubReferral();
                }
              }}
              className="support-gradient text-white hover:opacity-90 px-3 py-1.5 rounded-md text-sm font-medium transition-opacity duration-200"
            >
              All MPDEE Services
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white/95">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-foreground hover:bg-muted block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-3 py-2">
            <a
              href="https://mpdee.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setIsOpen(false);
                if (typeof window !== 'undefined' && window.trackHubReferral) {
                  window.trackHubReferral();
                }
              }}
              className="support-gradient text-white hover:opacity-90 w-full block px-3 py-1.5 rounded-md text-sm font-medium text-center transition-opacity duration-200"
            >
              All MPDEE Services
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
