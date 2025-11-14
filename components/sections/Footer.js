"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import style from "./Footer.module.css";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style["footer-wrapper"]}>
          <div className={style["footer-content"]}>
            <div className={style["footer-brand"]}>
              <div 
                className={style["footer-logo"]}
                role="button"
                tabIndex={0}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ' || e.keyCode === 13 || e.keyCode === 32) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                <Image
                  className={style["logo-svg"]}
                  src="/KOB_Logo_Final_White_NoBG.png"
                  width={600}
                  height={462}
                  alt="Lucy's Cleaning"
                />
              </div>
              <p>{t("footer.tagline")}</p>
            </div>

            <div className={style["footer-links"]}>
              <h4>{t("footer.legal")}</h4>
              <ul>
                <li>
                  <Link href="/privacy-policy">{t("common.privacyPolicy")}</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">{t("common.termsConditions")}</Link>
                </li>
              </ul>
            </div>

            <div className={style["footer-contact"]}>
              <h4>{t("footer.contact")}</h4>
              <div className={style["contact-items"]}>
                <a
                  href="https://wa.me/15513012908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style["social-link"]}
                >
                  💬 +1 (551) 301-2908
                </a>
              </div>
            </div>
          </div>

          <div className={style["footer-bottom"]}>
            <p>
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
