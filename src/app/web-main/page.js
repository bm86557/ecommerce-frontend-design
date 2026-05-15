"use client";
import React from 'react'
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SaleSection from '../components/SaleSection';
import ProductsSection1 from '../components/ProductsSection1';
import ProductsSection2 from '../components/ProductsSection2';
import SendQuoteSection from '../components/SendQuoteSection';
import ProductsDisplay from '../components/ProductsDisplay';
import ServicesSection from '../components/ServicesSection';
import NewsLetterSection from '../components/NewsLetterSection';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <div style={{background: '#F7FAFC', minHeight: '100vh', paddingBottom: '40px'}}>
    <Header/>
    <HeroSection/>
    <SaleSection/>
    <ProductsSection1/>
    <ProductsSection2/>
    <SendQuoteSection/>
    <ProductsDisplay/>
    <ServicesSection/>
    <NewsLetterSection/>
    <Footer/>
    </div>
  )
};

export default MainPage;
