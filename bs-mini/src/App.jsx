import React from 'react'
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

import TopBanner from './components/TopBanner'
import ResponsiveNav from './components/ResponsiveNav'
import FlyOutMenu from './components/FlyOutMenu'
import  Header from './components/Header'
import NewsletterSection from './components/NewsletterSection'
import NotFoundPage from './components/NotFoundPage'
import ContentSection from './components/ContentSection'
import ServicesSection from './components/ServicesSection';
import LogoCloud from './components/LogoCloud'
import Footer from './components/Footer';


const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate data fetch or initialization
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  // Conditional render: spinner while loading, else the app
  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-white">
        <ClipLoader
          color="#4338ca"
          loading={loading}
          size={60}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }

  // Once loading === false, render the full app
  return (
    <>
      <TopBanner />
      <ResponsiveNav />
      <Header />
      <FlyOutMenu />
      <ContentSection />
      <ServicesSection />
      <LogoCloud />
      <NewsletterSection />
      <NotFoundPage />
      <Footer />
    </>
  );
}

export default App