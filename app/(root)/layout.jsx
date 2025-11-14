"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FloatingQuoteButton from "@/components/ui/FloatingQuoteButton";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <div className="root-app-layout">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingQuoteButton />
      </div>
    </LanguageProvider>
  );
}
