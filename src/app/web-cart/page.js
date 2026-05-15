"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import styles from './web-cart.module.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    // Load cart and saved items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const saved = JSON.parse(localStorage.getItem('savedForLater') || '[]');
    setCartItems(cart);
    setSavedItems(saved);
  }, []);

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    const updated = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQty } : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const saveForLater = (item) => {
    removeFromCart(item.id);
    const updated = [...savedItems, { ...item, quantity: 1 }];
    setSavedItems(updated);
    localStorage.setItem('savedForLater', JSON.stringify(updated));
  };

  const moveToCart = (item) => {
    const updated = savedItems.filter(i => i.id !== item.id);
    setSavedItems(updated);
    localStorage.setItem('savedForLater', JSON.stringify(updated));
    
    const cartUpdated = [...cartItems, { ...item, quantity: 1 }];
    setCartItems(cartUpdated);
    localStorage.setItem('cart', JSON.stringify(cartUpdated));
  };

  const removeFromSaved = (id) => {
    const updated = savedItems.filter(item => item.id !== id);
    setSavedItems(updated);
    localStorage.setItem('savedForLater', JSON.stringify(updated));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return sum + (price * item.quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal();
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
            
            {cartItems.length === 0 ? (
              <div className={styles.emptyCart}>
                <p>Your cart is empty</p>
                <Link href="/web-gridview" className={styles.shopBtn}>Continue Shopping</Link>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <img src={item.img} alt={item.title} className={styles.itemImage} />
                    <div className={styles.itemDetails}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemMeta}>Size: medium, Color: blue, Material: Plastic</p>
                      <p className={styles.itemSeller}>Seller: {item.brand}</p>
                      <div className={styles.itemActions}>
                        <button onClick={() => removeFromCart(item.id)} className={styles.actionBtn}>Remove</button>
                        <button onClick={() => saveForLater(item)} className={styles.actionBtn}>Save for later</button>
                      </div>
                    </div>
                    <div className={styles.itemPrice}>
                      <p className={styles.price}>{item.price}</p>
                      <div className={styles.quantityControl}>
                        <label>Qty:</label>
                        <select 
                          value={item.quantity} 
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className={styles.qtySelect}
                        >
                          {[1,2,3,4,5,6,7,8,9].map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
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
              </>
            )}
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

        {savedItems.length > 0 && (
          <div className={styles.savedSection}>
            <h2 className={styles.savedTitle}>Saved for later</h2>
            <div className={styles.savedGrid}>
              {savedItems.map((item) => (
                <div key={item.id} className={styles.savedCard}>
                  <img src={item.img} alt={item.title} />
                  <p className={styles.savedPrice}>{item.price}</p>
                  <p className={styles.savedTitle}>{item.title}</p>
                  <div className={styles.savedActions}>
                    <button onClick={() => moveToCart(item)} className={styles.moveBtn}>
                      🛒 Move to cart
                    </button>
                    <button onClick={() => removeFromSaved(item.id)} className={styles.removeBtn}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
