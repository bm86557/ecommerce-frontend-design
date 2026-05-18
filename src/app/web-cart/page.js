"use client";
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import { allProducts } from '../data/products';
import styles from './web-cart.module.css';

const CartPage = () => {
  // Get product ID from URL (e.g., /web-cart?id=1)
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  
  // If product ID exists in URL, show that product in cart
  let cartItems = [];
  if (productId) {
    const product = allProducts.find(p => p.id === Number(productId));
    if (product) {
      cartItems = [{ ...product, quantity: 1 }];
    }
  } else {
    // Default cart items if no product ID in URL
    cartItems = [
      { ...allProducts[0], quantity: 2 }, // Soft chairs
      { ...allProducts[1], quantity: 1 }, // Lamp
      { ...allProducts[8], quantity: 1 }, // Cameras
    ];
  }

  // Saved items (always same)
  const savedItems = [
    allProducts[3], // Smart watches
    allProducts[9], // Headphones
  ];

  // Calculate total price
  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + (price * item.quantity);
  }, 0);
  
  const discount = 60.00;
  const tax = 14.00;
  const total = subtotal - discount + tax;

  return (
    <div style={{background: '#F7FAFC', minHeight: '100vh'}}>
      <Header />
      <BreadCrumb 
        items={[
          { label: 'Home', href: '/web-main' },
          { label: 'My cart', href: '/web-cart' }
        ]} 
      />
      
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.cartSection}>
            <h1 className={styles.title}>My cart ({cartItems.length})</h1>
            
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.img} alt={item.title} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemMeta}>Size: medium, Color: blue, Material: Plastic</p>
                  <p className={styles.itemSeller}>Seller: {item.brand}</p>
                  <div className={styles.itemActions}>
                    <button className={styles.actionBtn}>Remove</button>
                    <button className={styles.actionBtn}>Save for later</button>
                  </div>
                </div>
                <div className={styles.itemPrice}>
                  <p className={styles.price}>{item.price}</p>
                  <div className={styles.quantityControl}>
                    <label>Qty: {item.quantity}</label>
                  </div>
                </div>
              </div>
            ))}
            
            <div className={styles.cartFooter}>
              <Link href="/web-gridview" className={styles.backBtn}>
                ← Back to shop
              </Link>
              <button className={styles.removeAllBtn}>Remove all</button>
            </div>
          </div>

          <div className={styles.summarySection}>
            <div className={styles.couponBox}>
              <h3>Have a coupon?</h3>
              <div className={styles.couponInput}>
                <input type="text" placeholder="Add coupon" />
                <button>Apply</button>
              </div>
            </div>

            <div className={styles.summaryBox}>
              <div className={styles.summaryRow}>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Discount:</span>
                <span className={styles.discount}>-${discount.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Tax:</span>
                <span className={styles.tax}>+${tax.toFixed(2)}</span>
              </div>
              <div className={styles.summaryTotal}>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className={styles.checkoutBtn}>Checkout</button>
              <div className={styles.paymentIcons}>
                <span>💳</span>
                <span>🔴</span>
                <span>🅿️</span>
                <span>💳</span>
                <span>🍎</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <span className={styles.icon}>🔒</span>
            <div>
              <h4>Secure payment</h4>
              <p>Have you ever finally just</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.icon}>💬</span>
            <div>
              <h4>Customer support</h4>
              <p>Have you ever finally just</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.icon}>🚚</span>
            <div>
              <h4>Free delivery</h4>
              <p>Have you ever finally just</p>
            </div>
          </div>
        </div>

        <div className={styles.savedSection}>
          <h2 className={styles.savedTitle}>Saved for later</h2>
          <div className={styles.savedGrid}>
            {savedItems.map((item) => (
              <div key={item.id} className={styles.savedCard}>
                <img src={item.img} alt={item.title} />
                <p className={styles.savedPrice}>{item.price}</p>
                <p className={styles.savedTitle}>{item.title}</p>
                <div className={styles.savedActions}>
                  <button className={styles.moveBtn}>
                    🛒 Move to cart
                  </button>
                  <button className={styles.removeBtn}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
