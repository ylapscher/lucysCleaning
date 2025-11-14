"use client";

import Image from "next/image";
import style from "./About.module.css";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className={style.about}>
      <div className={style.container}>
        <div className={style["about-content"]}>
          <div className={style["about-image"]}>
            <Image
              src="/Zach-circle.png"
              width={300}
              height={300}
              alt="Zoila at Work"
              className={style["about-photo"]}
            />
          </div>
          <div className={style["about-text"]}>
            <h2>{t("about.title")}</h2>
            <p>{t("about.description")}</p>
            <div className={style["about-highlights"]}>
              <div className={style.highlight}>
                <span className={style["highlight-number"]}>10+</span>
                <span className={style["highlight-text"]}>
                  {t("about.highlights.years")}
                </span>
              </div>
              <div className={style.highlight}>
                <span className={style["highlight-number"]}>100%</span>
                <span className={style["highlight-text"]}>
                  {t("about.highlights.satisfaction")}
                </span>
              </div>
              <div className={style.highlight}>
                <span className={style["highlight-number"]}>6</span>
                <span className={style["highlight-text"]}>
                  {t("about.highlights.counties")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
