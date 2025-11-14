'use client'

import style from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={style.contact}>
      <div className={style.container}>
        <div className={style['contact-content']}>
          <div className={style['contact-info']}>
            <h2>Contact Us</h2>
            <p>Ready to get your project started? Reach out to us and we'll get back to you with a free estimate.</p>
            
            <div className={style['contact-details']}>
              <div className={style['contact-item']}>
                <span className={style['contact-icon']}>📧</span>
                <div>
                  <strong>Email</strong>
                  <p>info@knockonblock.com</p>
                </div>
              </div>
              <div className={style['contact-item']}>
                <span className={style['contact-icon']}>💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>
                    <a 
                      href="https://wa.me/15513012908" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={style['whatsapp-link']}
                    >
                      (551) 301-2908
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