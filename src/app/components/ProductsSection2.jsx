import React from 'react'
import Link from 'next/link'
import styles from "./ProductsSection2.module.css"

const ProductsSection2 = () => {
  const products = [
    { id: 4, t:"Smart watches", p:"USD 19", img:"/watch.jpg" },
    { id: 9, t:"Cameras", p:"USD 89", img:"/camera.jpg" },
    { id: 10, t:"Headphones", p:"USD 10", img:"/headphone.jpg" },
    { id: 11, t:"Smart phones", p:"USD 19", img:"/phone.jpg" },
    { id: 12, t:"Gaming laptop", p:"USD 231", img:"/laptop.jpg" },
    { id: 6, t:"Blenders", p:"USD 39", img:"/blender.jpg" },
    { id: 13, t:"Automatic mixer", p:"USD 39", img:"/mixer.jpg" },
    { id: 14, t:"Washing pool", p:"USD 10", img:"/pool.jpg" },
  ];

  return (
    <>
       <section className={styles.home}>
  <div className={styles.leftpanel}>
    <h2>Consumer electronics and gadgets</h2>
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
}

export default ProductsSection2;
