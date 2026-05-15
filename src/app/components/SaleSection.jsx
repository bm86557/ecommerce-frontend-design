import React from 'react'
import styles from './SaleSection.module.css'

const SaleSection = () => {
  return (
    <>
    <section className={styles.box}>
      <div className={styles.leftpanel}>
        <div className={styles.textblock}>
          <h2 className={styles.title}>Deals and Offers</h2>
          <p className={styles.subtitle}>Hygiene Equipments</p>
        </div>
        <div className={styles.timer}>
         <div className={styles.cell}>04<span>Days</span></div>
         <div className={styles.cell}>13<span>Hour</span></div>
         <div className={styles.cell}>34<span>Min</span></div>
        <div className={styles.cell}>56<span>Sec</span></div>
        </div>
      </div>
      <div className={styles.rightpanel}>
        <div className={styles.product}>
          <img  className= {styles.img}src="./watch.jpg" alt="Smart Watch" />
          <p className={styles.name}>Smart Watches</p>
          <span className={styles.badge}>25%</span>
        </div>
        <div className={styles.product}>
           <img className={styles.img} src="./laptop.jpg" alt="Laptop" />
          <p className={styles.name}>Laptops</p>
          <span className={styles.badge}>15%</span>
        </div>
        <div className={styles.product}>
           <img className={styles.img} src="./camera.jpg" alt="GoPro Camera" />
          <p className={styles.name}>GoPro Cameras</p>
          <span className={styles.badge}>40%</span>
        </div>
        <div className={styles.product}>
           <img className={styles.img} src="./headphone.jpg" alt="Headphones" />
          <p className={styles.name}>HeadPhones</p>
          <span className={styles.badge}>25%</span>
        </div>
        <div className={styles.product}>
           <img className={styles.img}src="./phone.jpg" alt="Smartphone" />
          <p className={styles.name}>SmartPhones</p>
          <span className={styles.badge}>25%</span>
        </div>
      </div>
      </section>
    </>
  )
};

export default SaleSection;
