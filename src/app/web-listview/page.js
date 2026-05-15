import React from 'react'
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Sidebar from '../components/Sidebar';
import ProductListView from '../components/ProductListView';
import styles from "./web-listview.module.css"
import NewsLetterSection from '../components/NewsLetterSection';
import Footer from '../components/Footer';


const ProductListViewPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header/>
      <BreadCrumb/>
      <div className={styles.mainLayoutContent}>
      <Sidebar/>
      <ProductListView/>
      </div>
      <NewsLetterSection/>
      <Footer/>
    </div>
  )
};

export default ProductListViewPage;
