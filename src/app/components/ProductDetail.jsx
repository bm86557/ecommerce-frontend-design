"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './ProductDetail.module.css';
import { allProducts } from '../data/products.js';

const ProductDetail = ({ productId }) => {
  const product = allProducts.find(p => p.id === parseInt(productId));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h2>Product not found</h2>
          <Link href="/web-gridview">Back to products</Link>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  // Related products (excluding current product)
  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 6);

  return (
    <div className={styles.container}>
      {/* Main Product Section */}
      <div className={styles.productSection}>
        {/* Left: Images */}
        <div className={styles.imageGallery}>
          <div className={styles.mainImage}>
            <img src={product.images[selectedImage]} alt={product.title} />
            {product.inStock && (
              <span className={styles.stockBadge}>✓ In stock</span>
            )}
          </div>
          <div className={styles.thumbnails}>
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className={`${styles.thumbnail} ${selectedImage === idx ? styles.activeThumbnail : ''}`}
                onClick={() => setSelectedImage(idx)}
              >
                <img src={img} alt={`${product.title} ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Middle: Product Info */}
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          
          <div className={styles.ratingRow}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? styles.starFilled : styles.starEmpty}>★</span>
              ))}
            </div>
            <span className={styles.ratingValue}>{product.rating}</span>
            <span className={styles.reviews}>{product.reviews} reviews</span>
            <span className={styles.orders}>{product.orders} orders</span>
          </div>

          <div className={styles.priceSection}>
            <div className={styles.priceRow}>
              <span className={styles.currentPrice}>{product.price}</span>
              {product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice}</span>}
              <span className={styles.discount}>50% off</span>
            </div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Price:</span>
              <span className={styles.value}>Negotiable</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Type:</span>
              <span className={styles.value}>Classic shoes</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Material:</span>
              <span className={styles.value}>Plastic material</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Design:</span>
              <span className={styles.value}>Modern nice</span>
            </div>
          </div>

          <div className={styles.customization}>
            <p className={styles.customText}>
              Customization: Customized logo and design custom packages
            </p>
          </div>

          <div className={styles.features}>
            <h3>Features:</h3>
            <ul>
              {product.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.protection}>
            <p><strong>Protection:</strong> Refund Policy</p>
            <p><strong>Warranty:</strong> 2 years full warranty</p>
          </div>

          <div className={styles.cartActions}>
            <button onClick={addToCart} className={styles.addToCartBtn}>
              {addedToCart ? '✓ Added to cart' : 'Add to cart'}
            </button>
            <Link href="/web-cart" className={styles.viewCartBtn}>
              View cart
            </Link>
          </div>
        </div>

        {/* Right: Supplier Card */}
        <div className={styles.supplierCard}>
          <div className={styles.supplierHeader}>
            <div className={styles.supplierAvatar}>R</div>
            <div className={styles.supplierInfo}>
              <h3>Supplier</h3>
              <p>Guanjoi Trading LLC</p>
            </div>
          </div>

          <div className={styles.supplierDetails}>
            <div className={styles.detailRow}>
              <span>🇩🇪</span>
              <span>Germany, Berlin</span>
            </div>
            <div className={styles.detailRow}>
              <span>✓</span>
              <span>Verified Seller</span>
            </div>
            <div className={styles.detailRow}>
              <span>🚚</span>
              <span>Worldwide shipping</span>
            </div>
          </div>

          <button className={styles.sendInquiryBtn}>Send inquiry</button>
          <button className={styles.sellerProfileBtn}>Seller's profile</button>
          <button className={styles.saveBtn}>💙 Save for later</button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className={styles.tabsSection}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'description' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'reviews' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'shipping' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('shipping')}
          >
            Shipping
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'seller' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('seller')}
          >
            About seller
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'description' && (
            <div className={styles.descriptionContent}>
              <p>{product.desc}</p>
              <h3>Specifications:</h3>
              <div className={styles.specsGrid}>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className={styles.specRow}>
                    <span className={styles.specLabel}>{key}:</span>
                    <span className={styles.specValue}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className={styles.reviewsContent}>
              <p>Customer reviews will appear here.</p>
            </div>
          )}
          {activeTab === 'shipping' && (
            <div className={styles.shippingContent}>
              <p>Shipping information will appear here.</p>
            </div>
          )}
          {activeTab === 'seller' && (
            <div className={styles.sellerContent}>
              <p>Seller information will appear here.</p>
            </div>
          )}
        </div>
      </div>

      {/* You May Like Section */}
      <div className={styles.relatedSection}>
        <h2>You may like</h2>
        <div className={styles.relatedGrid}>
          {relatedProducts.map((item) => (
            <Link href={`/web-detail/${item.id}`} key={item.id} className={styles.relatedCard}>
              <img src={item.img} alt={item.title} />
              <p className={styles.relatedPrice}>{item.price}</p>
              <p className={styles.relatedTitle}>{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
