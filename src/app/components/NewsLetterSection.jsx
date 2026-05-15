"use client";
import React from 'react';
import styles from "./NewsLetterSection.module.css"

const NewsLetterSection = () => {
  return (
    <>
      <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Subscribe on our newsletter</h2>
        <p className={styles.subtitle}>
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        
        <form className={styles.formGroup} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputWrapper}>
            
            <svg 
              className={styles.mailIcon} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <input 
              type="email" 
              placeholder="Email" 
              className={styles.inputField} 
              required 
            />
          </div>
          <button type="submit" className={styles.subscribeBtn}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
    </>
  )
};

export default NewsLetterSection;
