'use client'

import style from './Contact.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className={style.contact}>
      <div className={style.container}>
        <div className={style['contact-content']}>
          <div className={style['contact-info']}>
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.subtitle")}</p>
            
            <div className={style['contact-details']}>
              <div className={style['contact-item']}>
                <span className={style['contact-icon']}>💬</span>
                <div>
                  <strong>{t("contact.whatsapp")}</strong>
                  <p>
                    <a 
                      href="https://wa.me/15513012908" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={style['whatsapp-link']}
                    >
                      +1 (551) 301-2908
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;