"use client";

import style from "./FloatingQuoteButton.module.css";

const FloatingQuoteButton = () => {
  return (
    <a
      href="https://wa.me/15513012908"
      target="_blank"
      rel="noopener noreferrer"
      className={style["floating-quote-button"]}
      aria-label="Contact Us"
    >
      Contact Us
    </a>
  );
};

export default FloatingQuoteButton;
