"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  { href: "/work", label: "Work" },
  { href: "/why-a-website", label: "Why a Website" },
  { href: "/analytics", label: "Analytics" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <Link href="/" className="brand">
          Lawson<span className="brand-dot">Tech</span>
        </Link>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Book a Free Audit
          </Link>
        </nav>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "\u2715" : "\u2630"}
        </button>
      </div>
    </header>
  );
}
