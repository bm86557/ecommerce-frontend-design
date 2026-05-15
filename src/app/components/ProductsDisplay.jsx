import React from 'react'
import styles from "./ProductsDisplay.module.css"

const ProductsDisplay = () => {
  return (
    <>
    <section className={styles.rec}>
  <h2>Recommended items</h2>
  <div className={styles['rec-grid']}>
    {[
      { p:"$10.30", d:"T-shirts with multiple colors, for men", img:"/product1.png", },
      { p:"$10.30", d:"Jeans shorts for men blue color", img:"/product4.png" },
      { p:"$12.50", d:"Brown winter coat medium size", img:"/product3.png" },
      { p:"$34.00", d:"Jeans bag for travel for men", img:"/product5.png" },
      { p:"$99.00", d:"Headphones for music lovers", img:"/headphone.jpg" },
      { p:"$9.99",  d:"Canon camera black, 100x zoom", img:"/camera.jpg" },
      { p:"$8.99",  d:"Phone ", img:"/phone.jpg" },
      { p:"$10.30", d:"Smartwatch silver color modern", img:"/watch.jpg" },
      { p:"$10.30", d:"Blender", img:"/blender.jpg" },
      { p:"$80.95", d:"Jeans bag for travel for men", img:"/product5.png" },
    ].map((it, i) => (
      <div className={styles['r-card']} key={i}>
        <img className={styles.thumb} src={it.img} alt={it.d} loading="lazy" />
        <p className={styles.price}>{it.p}</p>
        <p className={styles.desc}>{it.d}</p>
      </div>
    ))}
  </div>
</section>
    </>
  )
}

export default ProductsDisplay;
