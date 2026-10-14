import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope, Instrument_Serif } from "next/font/google";
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

export const viewport: Viewport = {
  themeColor: "#08090B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.portfolioUrl),
  title: `${siteConfig.name} — Developer by Skills, Explorer by Nature`,
  description:
    "Portfolio of Rutvik Bhil, a React and Next.js developer building modern websites and web applications for businesses. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Rutvik Bhil",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Freelance Web Developer Gujarat India",
    "Ik Safar",
    "Valley View Homestay",
    "Simplifyte",
    "Creative Developer Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.portfolioUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.portfolioUrl,
    title: `${siteConfig.name} — Developer by Skills, Explorer by Nature`,
    description:
      "Portfolio of Rutvik Bhil, a React and Next.js developer building modern websites and web applications for businesses. Available for freelance projects and full-time opportunities.",
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/images/kedarkantha-summit.jpg",
        width: 1200,
        height: 630,
        alt: "Rutvik Bhil on Kedarkantha Peak Summit, 12,500 ft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Developer by Skills, Explorer by Nature`,
    description:
      "Portfolio of Rutvik Bhil, a React and Next.js developer building modern websites and web applications for businesses. Available for freelance projects and full-time opportunities.",
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
      className={`${dmSans.variable} ${manrope.variable} ${instrumentSerif.variable} font-sans scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-[#08090B] text-[#F5F4F0] selection:bg-[#91B9F5] selection:text-[#08090B] relative">
        <div className="fixed inset-0 pointer-events-none noise-overlay z-50 opacity-40" />
        <SmoothScroll>
          <Navbar />
          <div className="flex-1 w-full">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
