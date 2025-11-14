"use client";

import { createContext, useContext, useState, useEffect } from "react";
import enTranslations from "@/lib/translations/en.json";
import esTranslations from "@/lib/translations/es.json";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [translations, setTranslations] = useState(esTranslations);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "es";
    setLanguage(savedLanguage);
    setTranslations(savedLanguage === "es" ? esTranslations : enTranslations);
    
    // Update HTML lang attribute
    document.documentElement.lang = savedLanguage;
  }, []);

  // Update translations when language changes
  useEffect(() => {
    setTranslations(language === "es" ? esTranslations : enTranslations);
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const t = (path) => {
    const keys = path.split(".");
    let value = translations;
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) {
        console.warn(`Translation missing for path: ${path}`);
        return path;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

