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
  title: "Tsegaye's Portfolio",
  description: "Welcome to Tsegaye's Portfolio - Full Stack Developer & AI Enthusiast.",
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
