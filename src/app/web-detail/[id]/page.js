"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import BreadCrumb from '../../components/BreadCrumb';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';
import styles from "./product-detail.module.css";


const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.id;

  return (
    <div className={styles.pageContainer}>
      <Header />
      <BreadCrumb />
      <ProductDetail productId={productId} />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;


