"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    trackConversion?: (action: string) => void;
    trackHubReferral?: () => void;
  }
}

const navigationItems = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Knowledge base", href: "/knowledge-base" },
  { name: "Contact", href: "/contact" },
];

function Arrow() {
  return (
    <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function close(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="MPDEE Support home" onClick={() => setOpen(false)}>
          <Image
            className="brand-mark"
            src="/Images/MPDEE-Support-logo.png"
            alt=""
            width={40}
            height={40}
            priority
          />
          <span className="brand-name">
            <span>
              mpdee<span className="brand-stop">.</span>
            </span>
            <span className="brand-sub">SUPPORT</span>
          </span>
        </Link>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-controls="main-navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
          <span className={open ? "menu-lines is-open" : "menu-lines"} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
        <nav id="main-navigation" aria-label="Main navigation" className={open ? "main-nav is-open" : "main-nav"}>
          {navigationItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            className="header-cta"
            href="/contact"
            onClick={() => {
              setOpen(false);
              window.trackConversion?.("contact_nav");
            }}
          >
            Get support <Arrow />
          </Link>
        </nav>
      </div>
    </header>
  );
}
