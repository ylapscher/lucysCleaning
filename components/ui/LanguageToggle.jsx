"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import style from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={style["language-toggle"]}
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
      title={`Switch to ${language === "en" ? "Spanish" : "English"}`}
    >
      <span className={style["flag"]}>
        {language === "en" ? "🇪🇸" : "🇺🇸"}
      </span>
    </button>
  );
};

export default LanguageToggle;

