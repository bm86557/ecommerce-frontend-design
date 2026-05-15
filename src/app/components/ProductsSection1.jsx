import React from 'react'
import Link from 'next/link'
import styles from "./ProductsSection1.module.css"

const ProductsSection1 = () => {
  const products = [
    { id: 1, t:"Soft chairs", p:"USD 19", img:"/chair.jpg" },
    { id: 2, t:"Lamp", p:"USD 19", img:"/lamp.jpg" },
    { id: 3, t:"Kitchen Utensils", p:"USD 19", img:"/kitchen-utensil.jpg" },
    { id: 4, t:"Smart watches", p:"USD 19", img:"/watch.jpg" },
    { id: 5, t:"Kitchen mixer", p:"USD 100", img:"/mixer.jpg" },
    { id: 6, t:"Blenders", p:"USD 39", img:"/blender.jpg" },
    { id: 7, t:"Home appliance", p:"USD 19", img:"/home-appliance.jpg" },
    { id: 8, t:"Plant", p:"USD 10", img:"/plant.jpg" },
  ];

  return (
    <>
     <section className={styles.home}>
  <div className={styles.leftpanel}>
    <h2>Home and outdoor</h2>
    <button className={styles.srcbtn}>Source now</button>
  </div>
  <div className={styles.rightpanel}>
    {products.map((it) => (
      <Link href={`/web-detail/${it.id}`} key={it.id} className={styles.hcard}>
        <div className={styles.info}>
          <p className={styles.title}>{it.t}</p>
          <p className={styles.from}>From</p>
          <p className={styles.price}>{it.p}</p>
        </div>
        <img src={it.img} alt={it.t} loading="lazy" width={80} height={80} />
      </Link>
    ))}
  </div>
</section>
    </>
  )
};

export default ProductsSection1;
