"use client";

import React from 'react';
import FAQItem from '../ui/FAQItem';
import { faqs } from '../../assets/data/faqs';
import { useLanguage } from '@/contexts/LanguageContext';
import style from './FAQ.module.css';

const FAQ = () => {
  const { t } = useLanguage();
  
  return (
    <section id="faq" className={style.faq}>
      <div className={style.container}>
        <div className={style['faq-wrapper']}>
        <div className={style['section-header']}>
          <h2>{t("faq.title")}</h2>
          <p>{t("faq.subtitle")}</p>
        </div>
        <div className={style['faq-list']}>
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;