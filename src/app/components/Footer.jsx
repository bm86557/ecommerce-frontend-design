import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
      <footer className={styles.footerMain}>
   
      <div className={styles.footerTop}>
        
     
        <div className={styles.brandSection}>
          <div className={styles.logoRow}>
            <img src="/logo.png" alt="Brand Logo" className={styles.logoImage} />
          </div>
          <p className={styles.brandDesc}>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className={styles.socialIcons}>
          
            <a href="#" className={styles.iconCircle}>f</a>
            <a href="#" className={styles.iconCircle}>t</a>
            <a href="#" className={styles.iconCircle}>in</a>
            <a href="#" className={styles.iconCircle}>ig</a>
            <a href="#" className={styles.iconCircle}>yt</a>
          </div>
        </div>

   
        <div className={styles.linksColumnsWrapper}>
 
          <div className={`${styles.linkColumn} ${styles.colAbout}`}>
            <h3>About</h3>
            <a href="#">About Us</a>
            <a href="#">Find store</a>
            <a href="#">Categories</a>
            <a href="#">Blogs</a>
          </div>

     
          <div className={`${styles.linkColumn} ${styles.colPartnership}`}>
            <h3>Partnership</h3>
            <a href="#">About Us</a>
            <a href="#">Find store</a>
            <a href="#">Categories</a>
            <a href="#">Blogs</a>
          </div>

      
          <div className={`${styles.linkColumn} ${styles.colInformation}`}>
            <h3>Information</h3>
            <a href="#">Help Center</a>
            <a href="#">Money Refund</a>
            <a href="#">Shipping</a>
            <a href="#">Contact us</a>
          </div>

      
          <div className={`${styles.linkColumn} ${styles.colUsers}`}>
            <h3>For users</h3>
            <a href="#">Login</a>
            <a href="#">Register</a>
            <a href="#">Settings</a>
            <a href="#">My Orders</a>
          </div>
        </div>

       
        <div className={styles.appSection}>
          <h3>Get app</h3>
          <a href="#" className={styles.appBtn}>
            {/* Standard representation of App Store button */}
            <span className={styles.appBtnText}>Download on the</span>
            <span className={styles.appBtnTitle}>App Store</span>
          </a>
          <a href="#" className={styles.appBtn}>
            {/* Standard representation of Google Play button */}
            <span className={styles.appBtnText}>GET IT ON</span>
            <span className={styles.appBtnTitle}>Google Play</span>
          </a>
        </div>

      </div>
      <div className={styles.footerBottom}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>© 2023 Ecommerce.</p>
          <div className={styles.langSelector}>
            <span className={styles.flagIcon}>🇺🇸</span>
            <span className={styles.langText}>English</span>
            <span className={styles.arrowIcon}>▲</span>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
};

export default Footer;
