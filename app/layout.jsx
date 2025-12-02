import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lucys-cleaning.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lucy's Cleaning - Professional Home Cleaning Services | Zoila's Home Cleaning",
    template: "%s | Lucy's Cleaning",
  },
  description:
    "Professional home cleaning services. Specializing in deep cleaning, regular maintenance, move-in/move-out cleaning, post-construction cleanup, office cleaning, and more. Trusted, reliable cleaning service you can count on.",
  keywords: ["cleaning services", "home cleaning", "office cleaning", "deep cleaning", "move-in cleaning", "move-out cleaning", "professional cleaning", "Lucy's Cleaning", "Zoila's Cleaning", "Hudson County NJ", "cleaning services Hudson County"],
  authors: [{ name: "Zoila", url: siteUrl }],
  creator: "Zoila",
  publisher: "Lucy's Cleaning LLC",
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'es': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_US'],
    url: siteUrl,
    siteName: "Lucy's Cleaning",
    title: "Lucy's Cleaning - Professional Home Cleaning Services",
    description: "Professional home cleaning services. Specializing in deep cleaning, regular maintenance, move-in/move-out cleaning, post-construction cleanup, office cleaning, and more. Trusted, reliable cleaning service you can count on.",
    images: [
      {
        url: '/new-logo.png',
        width: 1200,
        height: 630,
        alt: "Lucy's Cleaning - Professional Home Cleaning Services",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lucy's Cleaning - Professional Home Cleaning Services",
    description: "Professional home cleaning services. Specializing in deep cleaning, regular maintenance, move-in/move-out cleaning, post-construction cleanup, office cleaning, and more.",
    images: ['/new-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'verification-code-here',
  },
};

export default function RootLayout({ children }) {
  // Default lang is 'es' but will be updated dynamically by LanguageContext
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
