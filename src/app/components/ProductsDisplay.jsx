import React from 'react'
import Link from 'next/link'
import styles from "./ProductsDisplay.module.css"
import { allProducts } from '../data/products'

const ProductsDisplay = () => {
  const products = allProducts.slice(0, 10)

  return (
    <>
      <section className={styles.rec}>
        <h2>Recommended items</h2>
        <div className={styles['rec-grid']}>
          {products.map((product) => (
            <Link href={`/web-detail/${product.id}`} key={product.id} className={styles['r-card']}>
              <img className={styles.thumb} src={product.img} alt={product.title} loading="lazy" />
              <p className={styles.price}>{product.price}</p>
              <p className={styles.desc}>{product.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProductsDisplay;
