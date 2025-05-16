import React from 'react'

import TopBanner from './components/TopBanner'
import ResponsiveNav from './components/ResponsiveNav'
import  Header from './components/Header'
import NewsletterSection from './components/NewsletterSection'
import NotFoundPage from './components/NotFoundPage'
import ContentSection from './components/ContentSection'
import LogoCloud from './components/LogoCloud'
import FlyOutMenu from './components/FlyOutMenu'


const App = () => {
  return (
    <>
      <TopBanner />
      <ResponsiveNav />
      <Header />
      <FlyOutMenu />
      <ContentSection />
      <LogoCloud />
      <NewsletterSection />
      <NotFoundPage />
    </>
  );
}

export default App