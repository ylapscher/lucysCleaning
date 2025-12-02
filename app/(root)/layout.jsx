"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FloatingQuoteButton from "@/components/ui/FloatingQuoteButton";
import StructuredData from "@/components/seo/StructuredData";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <StructuredData />
      <div className="root-app-layout">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingQuoteButton />
      </div>
    </LanguageProvider>
  );
}
