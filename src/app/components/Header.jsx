import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
  <>
  <nav className={styles.nb}>
    <div className={styles.brand}>
      <Image src="/logo.png" alt="Brand" width={150} height={46} priority />
    </div>

    <div className={styles.search}>
      <input type="text" placeholder="Search" />
      <select className={styles.cat} defaultValue="All category">
        <option>All category</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Home</option>
      </select>
      <button className={styles.btn}>Search</button>
    </div>

    <div className={styles.icons}>
      <a href="#" className={styles.item}>
        <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6Z"/></svg>
        Profile
      </a>
      <a href="#" className={styles.item}>
        <svg viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4Z"/></svg>
        Message
      </a>
      <a href="#" className={styles.item}>
        <svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"/></svg>
        Orders
      </a>
      <a href="#" className={styles.item}>
        <svg viewBox="0 0 24 24"><path d="M7 4h-2l-1 2 3 12h12l3-9H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>
        My cart
      </a>
    </div>
  </nav>

  <nav className={styles.nb2}>
    <div className={styles.nb2Left}>
      <button className={styles.catBtn}>
        <span className={styles.bars}><span/><span/><span/></span>
        All category
      </button>
      <a href="#" className={styles.nlink}>Hot offers</a>
      <a href="#" className={styles.nlink}>Gift boxes</a>
      <a href="#" className={styles.nlink}>Projects</a>
      <a href="#" className={styles.nlink}>Menu item</a>
      <a href="#" className={styles.nlink}>
        Help <svg viewBox="0 0 12 12"><path d="M2 4l4 4 4-4z"/></svg>
      </a>
    </div>

    <a href="#" className={`${styles.nlink} ${styles.nb2Lang}`}>
      English, USD <svg viewBox="0 0 12 12"><path d="M2 4l4 4 4-4z"/></svg>
    </a>

    <a href="#" className={`${styles.nlink} ${styles.nb2Ship}`}>
      Ship to <span className={styles.flag} />
      <svg viewBox="0 0 12 12"><path d="M2 4l4 4 4-4z"/></svg>
    </a>
  </nav>
</>

    
  )
}

export default Header;
