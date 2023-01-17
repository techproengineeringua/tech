import React from "react"
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ROUTE_NAMES } from './data/data'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ServicesPage from './pages/ServicesPage'
import ServicePage from './pages/ServicePage'
import FeedbackPage from './pages/FeedbackPage'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

function App() {
  return (
    <HelmetProvider>
      <RecoilRoot>
        <Router>
          <Header />
          <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<HomePage />} />
            <Route path={ROUTE_NAMES.ABOUT_US} element={<AboutUsPage />} />
            <Route path={ROUTE_NAMES.SERVISES} element={<ServicesPage />} exact />
            <Route path={ROUTE_NAMES.SERVISE} element={<ServicePage />} />
            <Route path={ROUTE_NAMES.FEEDBACK} element={<FeedbackPage />} />
          </Routes>
          <ScrollToTop />
          <Footer />
        </Router>
      </RecoilRoot>
    </HelmetProvider>
  )
}

export default App
