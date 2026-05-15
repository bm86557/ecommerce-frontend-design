import React from 'react'
import styles from "./SendQuoteSection.module.css"

const SendQuoteSection = () => {
  return (
    <>
     <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1>An easy way to send requests to all suppliers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className={styles.formBlock}>
          <h3>Send quote to suppliers</h3>
          <form>
            <input type="text" placeholder="What item you need?" />
            <textarea placeholder="Type more details" rows="3"></textarea>
            <div className={styles.formRow}>
              <input type="number" placeholder="Quantity" />
              <select>
                <option>Pcs</option>
              </select>
            </div>
            <button type="submit">Send inquiry</button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
};

export default SendQuoteSection;
