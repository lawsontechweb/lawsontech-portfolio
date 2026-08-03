import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import { Analytics } from "@vercel/analytics/react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata = {
  title: {
    default: "LawsonTech | Web Design for Local Businesses",
    template: "%s | LawsonTech",
  },
  description:
    "Fast, mobile-first websites for local businesses, built by a Business Analytics student who tracks what's working.",
  metadataBase: new URL("https://lawsontech-portfolio.vercel.app"),
  verification: {
    google: "l0SiT4I-TE6KczfH7Ed8gT8AFbksjU7l-nMW_rj_Ccw",
  },
  openGraph: {
    title: "LawsonTech | Web Design for Local Businesses",
    description:
      "Fast, mobile-first websites for local businesses, built by a Business Analytics student who tracks what's working.",
    siteName: "LawsonTech",
    type: "website",
    url: "https://lawsontech-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "LawsonTech | Web Design for Local Businesses",
    description:
      "Fast, mobile-first websites for local businesses, built by a Business Analytics student who tracks what's working.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}
      >
        <Nav />
        <main>{children}</main>
        <Analytics />
        <footer>
          <div className="wrap footer-inner">
            <div className="footer-links">
 <span>adrianalaws28@gmail.com</span>
<a href="https://github.com/lawsontechweb" target="_blank" rel="noreferrer">GitHub</a>
  <a href="https://www.linkedin.com/in/adriana-lawson-456638344/" target="_blank" rel="noreferrer">Find me on LinkedIn</a>
  <a href="/privacy">Privacy Policy</a>
  <a href="/terms">Terms of Service</a>
</div>
            <div className="footer-copy">&copy; 2026 LawsonTech. Built with Next.js.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}