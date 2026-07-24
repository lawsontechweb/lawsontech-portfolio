import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";

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
  title: "LawsonTech | Web Design for Local Businesses",
  description:
    "Fast, mobile-first websites for local businesses — built by a Business Analytics student who also sets up the tracking to show what's working.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}
      >
        <Nav />
        {children}
        <footer>
          <div className="wrap footer-inner">
            <div className="footer-links">
 <a href="mailto:adrianalaws28@gmail.com">adrianalaws28@gmail.com</a>
  <a href="https://github.com/lawsontech" target="_blank" rel="noreferrer">GitHub</a>
  <a href="https://www.linkedin.com/in/adriana-lawson-456638344/" target="_blank" rel="noreferrer">Find me on LinkedIn</a>
</div>
            <div className="footer-copy">&copy; 2026 LawsonTech. Built with Next.js.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
