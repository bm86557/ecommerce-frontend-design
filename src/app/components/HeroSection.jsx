"use client";
import React, { useState } from 'react'
import styles from './HeroSection.module.css';

const categories = [
  'Automobiles',
  'Clothes and wear',
  'Home interiors',
  'Computer and tech',
  'Tools, equipments',
  'Sports and outdoor',
  'Animal and pets',
  'Machinery tools',
  'More category'
]

const HeroSection = () => {
  const [activeCategory,setactiveCategory] = useState('Automobiles');
  return (
    <>
    <section className={styles.hero}>
        <aside className={styles.cats}>
          {
            categories.map((cat)=> (
              <a
              key={cat}
              href="#"
              onClick={(e) =>{
                e.preventDefault()
                setactiveCategory(cat)
              }}
              className={activeCategory === cat ? styles.active : styles['cats-link']}
              >
                {cat}
              </a>
            ))
          }
        </aside>
        <div className={styles.banner}>
        
        </div>
        <div className={styles['right-col']}>
          <div className={styles['user-card']}>
            <div className={styles.top}>
              <div className={styles.avatar}>
                <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6Z"/></svg>
              </div>
              <div className={styles.greet}>Hi, user<b>let's get started</b></div>
            </div>
            <button className={styles['btn-join']}>Join now</button>
            <button className={styles['btn-login']}>Log in</button>
          </div>
          <div className={styles['promo'] + ' ' + styles['promo-orange']}>Get US $10 off<br/>with a new<br/>supplier</div>
          <div className={styles['promo'] + ' ' + styles['promo-teal']}>Send quotes with<br/>supplier<br/>preferences</div>
        </div>
      </section>
    </>

  )
};

export default HeroSection;

