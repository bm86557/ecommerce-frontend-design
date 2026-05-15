import React from 'react';
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <aside className={styles.sidebar}>
      {/* Category Section */}
      <div className={styles.section}>
        <div className={styles.header}>
          <h3>Category</h3>
          <span className={styles.arrow}>up</span>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Mobile accessory</li>
          <li className={styles.listItem}>Electronics</li>
          <li className={styles.listItem}>Smartphones</li>
          <li className={styles.listItem}>Modern tech</li>
          <li className={`${styles.listItem} styles.seeAll`}>See all</li>
        </ul>
      </div>

      <hr className={styles.divider} />

      {/* Brands Section */}
      <div className={styles.section}>
        <div className={styles.header}>
          <h3>Brands</h3>
          <span className={styles.arrow}>up</span>
        </div>
        <div className={styles.checkboxGroup}>
          {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map((brand) => (
            <label key={brand} className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.inputCheck} /> {brand}
            </label>
          ))}
          <span className={styles.seeAll}>See all</span>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Features Section */}
      <div className={`${styles.section} ${styles.featuresSection}`}>
        <div className={styles.header}>
          <h3>Features</h3>
          <span className={styles.arrow}>up</span>
        </div>
        <div className={styles.checkboxGroup}>
          {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map((f) => (
            <label key={f} className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.inputCheck} /> {f}
            </label>
          ))}
          <span className={styles.seeAll}>See all</span>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Price Range Section */}
      <div className={`${styles.section} ${styles.priceSection}`}>
        <div className={styles.header}>
          <h3>Price range</h3>
          <span className={styles.arrow}>up</span>
        </div>
        <div className={styles.rangeWrapper}>
          <div className={styles.slider}>
            <div className={styles.track}></div>
            <div className={`${styles.thumb} ${styles.leftThumb}`}></div>
            <div className={`${styles.thumb} ${styles.rightThumb}`}></div>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputBox}>
              <label>Min</label>
              <input type="number" className={styles.priceInput} placeholder="0" />
            </div>
            <div className={styles.inputBox}>
              <label>Max</label>
              <input type="number" className={styles.priceInput} placeholder="999999" />
            </div>
          </div>
          <button className={styles.applyBtn}>Apply</button>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Condition Section */}
      <div className={`${styles.section} ${styles.conditionSection}`}>
        <div className={styles.header}>
          <h3>Condition</h3>
          <span className={styles.arrow}>up</span>
        </div>
        <div className={styles.radioGroup}>
          {['Any', 'Refurbished', 'Brand new', 'Old items'].map((cond, idx) => (
            <label key={cond} className={styles.radioLabel}>
              <input 
                type="radio" 
                name="condition" 
                className={styles.inputRadio} 
                defaultChecked={idx === 0} 
              /> {cond}
            </label>
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Ratings Section */}
      <div className={`${styles.section} ${styles.ratingsSection}`}>
        <div className={styles.header}>
          <h3>Ratings</h3>
          <span className={styles.arrow}>up</span>
        </div>
        <div className={styles.ratingGroup}>
          {[5, 4, 3, 2].map((stars) => (
            <label key={stars} className={styles.ratingLabel}>
              <input type="checkbox" className={styles.inputCheck} />
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < stars ? styles.starActive : styles.starEmpty}>★</span>
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>
    </aside>
    </>
  )
}

export default Sidebar
