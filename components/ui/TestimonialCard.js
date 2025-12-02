"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import style from './TestimonialCard.module.css';

const TestimonialCard = ({ testimonial }) => {
  const { t } = useLanguage();
  
  // Get translated testimonial
  const testimonialIndex = testimonial.id - 1;
  const text = t(`testimonials.items.${testimonialIndex}.text`) || testimonial.text;
  const date = t(`testimonials.items.${testimonialIndex}.date`) || testimonial.date;
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`${style['star']} ${i < rating ? style['filled'] : ''}`}>
        ★
      </span>
    ));
  };

  // Get initials for avatar
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <article className={style['testimonial-card']}>
      <div className={style['testimonial-quote-icon']} aria-hidden="true">
        &ldquo;
      </div>
      <div className={style['testimonial-content']}>
        <div className={style['testimonial-rating']} aria-label={`${testimonial.rating} out of 5 stars`}>
          {renderStars(testimonial.rating)}
        </div>
        <blockquote className={style['testimonial-text']} cite={`${testimonial.name}`}>
          {text}
        </blockquote>
      </div>
      <footer className={style['testimonial-footer']}>
        <div className={style['testimonial-author']}>
          <div className={style['author-avatar']} aria-hidden="true">
            {getInitials(testimonial.name)}
          </div>
          <div className={style['author-info']}>
            <cite className={style['author-name']}>{testimonial.name}</cite>
            {testimonial.location && (
              <div className={style['author-location']}>{testimonial.location}</div>
            )}
            {date && (
              <time className={style['testimonial-date']} dateTime={date}>{date}</time>
            )}
          </div>
        </div>
      </footer>
    </article>
  );
};

export default TestimonialCard;