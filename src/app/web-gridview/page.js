import React from 'react';
import styles from "./web-gridview.module.css"
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Sidebar from '../components/Sidebar';
import ProductGridView from '../components/ProductGridView';
import NewsLetterSection from '../components/NewsLetterSection';
import Footer from '../components/Footer';

const ProductGridPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header/>
      <BreadCrumb/>
      <div className={styles.mainLayoutContent}>
      <Sidebar/>
      <ProductGridView/>
      </div>
      <NewsLetterSection/>
      <Footer/>
    </div>
  )
}

export default ProductGridPage;

