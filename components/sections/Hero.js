"use client";

import Image from "next/image";
import style from "./Hero.module.css";
import { scrollToContact } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { LOGO_CONFIG } from "@/lib/constants";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className={style.hero}>
      <div className={style["hero-content"]}>
        <div className={style["hero-text"]}>
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.subtitle")}</p>
          <button onClick={scrollToContact} className={style["cta-button"]}>
            {t("hero.cta")}
          </button>
        </div>
        <div className={style["hero-image"]}>
          <Image
            src={LOGO_CONFIG.LOGO_PATH}
            alt="Lucy's Cleaning - Professional Home Cleaning Services Logo. Expert cleaning services in Hudson County, NJ"
            width={400}
            height={400}
            className={style["placeholder-image"]}
            priority
            sizes="(max-width: 640px) 250px, (max-width: 968px) 400px, 400px"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
