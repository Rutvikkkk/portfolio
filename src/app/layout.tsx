import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope, Instrument_Serif, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080B10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.portfolioUrl),
  title: `${siteConfig.name} — Full-Stack Developer & Creative Engineer`,
  description:
    "Portfolio of Rutvik Bhil, a Full-Stack developer building responsive websites, web applications, and real-world client projects.",
  keywords: [
    "Rutvik Bhil",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Ik Safar",
    "Creative Developer Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.portfolioUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.portfolioUrl,
    title: `${siteConfig.name} — Full-Stack Developer`,
    description:
      "Full-stack developer with 1+ year of experience building responsive websites, web applications, and real-world client projects.",
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/images/kedarkantha-summit.jpg",
        width: 1200,
        height: 630,
        alt: "Rutvik Bhil — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Full-Stack Developer`,
    description:
      "Full-stack developer with 1+ year of experience building responsive websites, web applications, and real-world client projects.",
    images: ["/images/kedarkantha-summit.jpg"],
  },
  icons: {
    icon: "/images/kedarkantha-summit.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${manrope.variable} ${instrumentSerif.variable} ${caveat.variable} font-sans scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-[#080B10] text-[#F5F7FA] selection:bg-[#67B7FF] selection:text-[#080B10] relative">
        <div className="fixed inset-0 pointer-events-none noise-overlay z-50 opacity-30" />
        <SmoothScroll>
          <Navbar />
          <div className="flex-1 w-full">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
