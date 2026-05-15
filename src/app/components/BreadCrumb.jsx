import React from 'react';
import styles from "./BreadCrumb.module.css";

const BreadCrumb = () => {
  const breadcrumbs = [
    { label: 'Home', link: '#' },
    { label: 'Clothings', link: '#' },
    { label: 'Men’s wear', link: '#' },
    { label: 'Summer clothing', link: null }, 
  ];
  return (
    <>
    <nav className={styles.breadcrumbWrapper}>
      <div className={styles.breadcrumbContent}>
        {breadcrumbs.map((item, index) => (
          <div key={index} className={styles.itemWrapper}>
            <span className={`${styles.label} ${!item.link ? styles.active : ''}`}>
              {item.label}
            </span>
            {index < breadcrumbs.length - 1 && (
              <span className={styles.separator}>
               
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                   <path d="M1 9L5 5L1 1" stroke="#8B96A5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
    </>
  )
};

export default BreadCrumb;
