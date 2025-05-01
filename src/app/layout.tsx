import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "next-themes";
import DraggableChatbot from "../components/DraggableChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tsegaye Tadele | Full Stack Developer & AI Specialist",
  description: "Portfolio of Tsegaye Tadele, a passionate Full Stack Developer and AI Integration Specialist based in Addis Ababa. Explore projects, skills, and experience in Next.js, React, Tailwind CSS, Python, and more.",
  keywords: [
    "Tsegaye Tadele",
    "Portfolio developer",
    "Website developer",
    "Mobile app developer",
    "Full Stack Developer",
    "Full Stack Developer in Ethiopia",
    "AI Integration Specialist",
    "AI Integration Developer",
    "AI Integration Specialist in Ethiopia",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Python",
    "Web Developer",
    "Software Engineer",
    "Addis Ababa",
    "Odoo Customisation In Ethiopia",
    "UI/UX Designer",
    "UI/UX Designer in Ethiopia",
  ],
  authors: [{ name: "Tsegaye Tadele", url: "https://tsegaye-tadele.com" }],
  creator: "Tsegaye Tadele",
  openGraph: {
    title: "Tsegaye Tadele | Full Stack Developer & AI Specialist",
    description: "Portfolio of Tsegaye Tadele, Full Stack Developer & AI Integration Specialist. See my work, skills, and contact info.",
    url: "https://tsegaye-tadele.com",
    siteName: "Tsegaye Tadele Portfolio",
    images: [
      {
        url: "/me-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tsegaye Tadele Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsegaye Tadele | Full Stack Developer & AI Specialist",
    description: "Portfolio of Tsegaye Tadele, Full Stack Developer & AI Integration Specialist.",
    creator: "@tsegayetadele255",
    images: ["/me-og.jpg"]
  },
  icons: {
    icon: "/me-icon.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} font-sans antialiased pt-20`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
        <Footer />
        <DraggableChatbot />
      </body>
    </html>
  );
}
