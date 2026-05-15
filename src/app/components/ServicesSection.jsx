import React from 'react'
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  return (
    <>
        <section className={styles.xs}>
        <h2 className={styles['xs-head']}>Our extra services</h2>
        <div className={styles['xs-grid']}>
          {[
            { t:"Source from Industry Hubs", img:"/ServicesSec1.png", icon:(<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3" strokeLinecap="round"/></svg>) },
            { t:"Customize Your Products", img:"/ServicesSec2.png", icon:(<svg viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M4 10h16"/></svg>) },
            { t:"Fast, reliable shipping by ocean or air", img:"/ServicesSec3.png", icon:(<svg viewBox="0 0 24 24"><path d="M3 12l18-8-8 18-2-8-8-2z" strokeLinejoin="round"/></svg>) },
            { t:"Product monitoring and inspection", img:"/ServicesSec4.png", icon:(<svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" strokeLinejoin="round"/></svg>) },
          ].map((it,i) => (
            <div className={styles['xs-card']} key={i}>
              <img className={styles['xs-img']} src={it.img} alt={it.t} loading="lazy" />
              <div className={styles['xs-icon']}>{it.icon}</div>
              <div className={styles['xs-body']}><p className={styles['xs-title']}>{it.t}</p></div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesSection;
