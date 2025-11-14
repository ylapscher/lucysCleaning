"use client";

import { useRef, useEffect, useState } from "react";

import ServiceCard from "@/components/ui/ServiceCard";
import { scrollToContact } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  primaryServices,
  secondaryServices,
  additionalServices,
} from "@/assets/data/services";

import style from "./Services.module.css";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  // Intersection Observer to pause animations when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className={`${style.services} ${isVisible ? style.visible : ""}`}
      ref={sectionRef}
    >
      <div className={style.container}>
        <div className={style["services-wrapper"]}>
          {/* Main Header */}
          <div className={style["services-main-header"]}>
            <h2>{t("services.title")}</h2>
            <p>{t("services.subtitle")}</p>
          </div>

          {/* All Services Grid */}
          <div className={style["services-grid"]}>
            {primaryServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
            {secondaryServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
            {additionalServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Call to Action */}
          <div className={style["services-cta"]}>
            <div className={style["cta-content"]}>
              <h3>{t("services.cta.title")}</h3>
              <p>{t("services.cta.description")}</p>
              <button className={style["cta-button"]} onClick={scrollToContact}>
                {t("services.cta.button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
