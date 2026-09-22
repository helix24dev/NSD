import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// On preview deploys (Netlify / Vercel), absolute OG and canonical URLs point at the preview instead of the production domain.
const previewUrl =
  process.env.CONTEXT && process.env.CONTEXT !== "production" && process.env.DEPLOY_PRIME_URL
    ? process.env.DEPLOY_PRIME_URL
    : process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production" && process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : null;
const baseUrl = previewUrl ?? site.url;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_AE",
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={sans.variable}
      // data-js is set by the beforeInteractive script below; same technique next-themes uses.
      suppressHydrationWarning
    >
      <body>
        {/* Flags JS before first paint so .reveal only hides content when it can be revealed. */}
        <Script id="js-flag" strategy="beforeInteractive">{`document.documentElement.dataset.js="1"`}</Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
