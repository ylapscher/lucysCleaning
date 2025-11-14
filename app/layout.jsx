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

export const metadata = {
  title:
    "Lucy's Cleaning - Professional Home Cleaning Services | Zoila's Home Cleaning",
  description:
    "Professional home cleaning services. Specializing in deep cleaning, regular maintenance, move-in/move-out cleaning, post-construction cleanup, office cleaning, and more. Trusted, reliable cleaning service you can count on.",
  keywords: "cleaning services, home cleaning, office cleaning, deep cleaning, move-in cleaning, move-out cleaning, professional cleaning, Lucy's Cleaning, Zoila's Cleaning",
  alternates: {
    languages: {
      'en': '/',
      'es': '/',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
