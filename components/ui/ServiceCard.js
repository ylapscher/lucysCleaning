"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import style from './ServiceCard.module.css';

const ServiceCard = ({ service }) => {
  const { t, language } = useLanguage();
  
  // Get translated service data
  const getServiceTranslation = (serviceId, type) => {
    let serviceIndex = -1;
    let serviceArray = null;
    
    if (serviceId <= 3) {
      serviceArray = t("services.primary");
      serviceIndex = serviceId - 1;
    } else if (serviceId <= 6) {
      serviceArray = t("services.secondary");
      serviceIndex = serviceId - 4;
    } else {
      serviceArray = t("services.additional");
      serviceIndex = serviceId - 7;
    }
    
    if (serviceArray && serviceArray[serviceIndex]) {
      return serviceArray[serviceIndex][type];
    }
    return service[type]; // Fallback to original
  };
  
  const title = getServiceTranslation(service.id, "title");
  const description = getServiceTranslation(service.id, "description");
  
  return (
    <div className={style['service-card']}>
      <div className={style['service-icon']}>
        {service.icon}
      </div>
      <h3 className={style['service-title']}>{title}</h3>
      <p className={style['service-description']}>{description}</p>
    </div>
  );
};

export default ServiceCard;