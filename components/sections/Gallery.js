"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import style from "./Gallery.module.css";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  const galleryItems = [
    {
      id: 1,
      title: t("gallery.items.0.title"),
      image: "/TV-mount.jpg",
      description: t("gallery.items.0.description"),
    },
    {
      id: 2,
      title: t("gallery.items.1.title"),
      image: "/Bathroom-vanity.jpg",
      description: t("gallery.items.1.description"),
    },
    {
      id: 3,
      title: t("gallery.items.2.title"),
      image: "/Smart-thermostat.jpg",
      description: t("gallery.items.2.description"),
    },
    {
      id: 4,
      title: t("gallery.items.3.title"),
      image: "/Light-fixture.jpg",
      description: t("gallery.items.3.description"),
    },
    {
      id: 5,
      title: t("gallery.items.4.title"),
      image: "/Drywall-repair.png",
      description: t("gallery.items.4.description"),
    },
    {
      id: 6,
      title: t("gallery.items.5.title"),
      image: "/RO-filter.jpg",
      description: t("gallery.items.5.description"),
    },
  ];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Calculate max index based on screen size
  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.ceil(galleryItems.length / itemsPerView) - 1;

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === maxIndex ? 0 : prevIndex + 1
      );
    }, 8000); // 8 seconds

    return () => clearInterval(interval);
  }, [maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
  };

  return (
    <section id="gallery" className={style.gallery}>
      <div className={style.container}>
        <div className={style["gallery-wrapper"]}>
          <div className={style["section-header"]}>
            <h2>{t("gallery.title")}</h2>
            <p>{t("gallery.subtitle")}</p>
          </div>
          <div className={style["gallery-container"]}>
            <button className={style["gallery-arrow"]} onClick={goToPrevious}>
              &#8249;
            </button>
            <div className={style["gallery-wrapper"]}>
              <div
                className={style["gallery-slider"]}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: maxIndex + 1 }, (_, groupIndex) => (
                  <div key={groupIndex} className={style["gallery-slide"]}>
                    <div className={style["gallery-group"]}>
                      {galleryItems
                        .slice(
                          groupIndex * itemsPerView,
                          (groupIndex + 1) * itemsPerView
                        )
                        .map((item) => (
                          <div key={item.id} className={style["gallery-item"]}>
                            <div className={style["gallery-image"]}>
                              {item.image.startsWith('/') ? (
                                <Image 
                                  src={item.image} 
                                  alt={item.title}
                                  width={400}
                                  height={300}
                                  className={style["gallery-photo"]}
                                />
                              ) : (
                                <span className={style["gallery-icon"]}>
                                  {item.image}
                                </span>
                              )}
                            </div>
                            <div className={style["gallery-content"]}>
                              <h3 className={style["gallery-title"]}>
                                {item.title}
                              </h3>
                              <p className={style["gallery-description"]}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className={style["gallery-arrow"]} onClick={goToNext}>
              &#8250;
            </button>
          </div>
          <div className={style["gallery-dots"]}>
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                className={`${style["gallery-dot"]} ${
                  index === currentIndex ? style.active : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
