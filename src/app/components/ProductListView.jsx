import React from 'react';
import Link from 'next/link';
import styles from "./ProductListView.module.css";
import { allProducts } from '../data/products';

const ProductListView = () => {
  return (
    <div className={styles.mainWrapper}>
      
      {/* PART 1: Top Bar (Width: 920px, Height: 62px) */}
      <div className={styles.topBar}>
        <div className={styles.itemCount}>
          {allProducts.length} items in <span className={styles.boldText}>All Products</span>
        </div>
        
        <div className={styles.topBarActions}>
          <label className={styles.verifiedLabel}>
            <input type="checkbox" defaultChecked className={styles.checkboxInput} />
            <span>Verified only</span>
          </label>
          
          <div className={styles.selectWrapper}>
            <select className={styles.sortSelect} defaultValue="Featured">
              <option value="Featured">Featured</option>
              <option value="Price">Price</option>
            </select>
          </div>
          
          <div className={styles.viewToggleGroup}>
            <button className={styles.gridBtn}>
              {/* Grid SVG Icon */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M1 1h5v5H1V1zm7 0h5v5H8V1zm-7 7h5v5H1V8zm7 0h5v5H8V8z"/></svg>
            </button>
            <button className={`${styles.listBtn} styles.activeView`}>
              {/* List SVG Icon */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M1 2h14v2H1V2zm0 5h14v2H1V7zm0 5h14v2H1v-2z"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* PART 2: Products List View (Width: 920px, Height: 1430px Container) */}
      <div className={styles.listViewContainer}>
        {allProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageSection}>
              <img src={product.img} alt={product.title} className={product.productImg} />
            </div>
            
            <div className={styles.infoSection}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              
              <div className={styles.priceRow}>
                <span className={styles.currentPrice}>{product.price}</span>
                {product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice}</span>}
              </div>
              
              <div className={styles.ratingMeta}>
                <div className={styles.starsGroup}>
                  <span className={styles.starActive}>★</span>
                  <span className={styles.starActive}>★</span>
                  <span className={styles.starActive}>★</span>
                  <span className={styles.starActive}>★</span>
                  <span className={styles.starHalf}>★</span>
                  <span className={styles.ratingValue}>{product.rating}</span>
                </div>
                <span className={styles.dotSeparator}>•</span>
                <span className={styles.ordersText}>{product.orders} orders</span>
                <span className={styles.dotSeparator}>•</span>
                <span className={styles.shippingText}>{product.shipping}</span>
              </div>
              
              <p className={styles.description}>{product.desc}</p>
              <Link href={`/web-detail/${product.id}`} className={styles.detailsBtn}>
                View details
              </Link>
            </div>
            
            <button className={styles.wishlistBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d7aff" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>
        ))}
      </div>

      {/* PART 3: Pagination Controls Area */}
      <div className={styles.paginationRow}>
        <div className={styles.selectQuantityWrapper}>
          <select className={styles.quantitySelect}>
            <option>Show 10</option>
            <option>Show 20</option>
            <option>Show 30</option>
          </select>
        </div>
        
        <div className={styles.paginationButtons}>
          <button className={styles.arrowPageBtn}>&lt;</button>
          <button className={`${styles.numPageBtn} styles.activePage`}>1</button>
          <button className={styles.numPageBtn}>2</button>
          <button className={styles.numPageBtn}>3</button>
          <button className={styles.arrowPageBtn}>&gt;</button>
        </div>
      </div>

    </div>
)
};

export default ProductListView
