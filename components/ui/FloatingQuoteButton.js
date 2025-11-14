"use client";

import style from "./FloatingQuoteButton.module.css";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingQuoteButton = () => {
  const { t } = useLanguage();
  
  return (
    <a
      href="https://wa.me/15513012908"
      target="_blank"
      rel="noopener noreferrer"
      className={style["floating-quote-button"]}
      aria-label={t("common.contactUs")}
    >
      {t("common.contactUs")}
    </a>
  );
};

export default FloatingQuoteButton;
