"use client";

import Image from "next/image";
import style from "./Hero.module.css";
import { scrollToContact } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

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
            src="/KOB_Logo_Final_Dark_NoBG.png"
            alt="Lucy's Cleaning logo"
            width={400}
            height={400}
            className={style["placeholder-image"]}
            priority
            sizes="(max-width: 640px) 180px, (max-width: 968px) 350px, 350px"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
