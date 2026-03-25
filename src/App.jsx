import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Comparison from './components/Comparison'
import CashFlow from './components/CashFlow'
import AdminFee from './components/AdminFee'
import Leverage from './components/Leverage'
import EmbeddedBid from './components/EmbeddedBid'
import ROI from './components/ROI'
import CashPurchase from './components/CashPurchase'
import Predictability from './components/Predictability'
import Protection from './components/Protection'
import Trust from './components/Trust'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Comparison />
      <CashFlow />
      <AdminFee />
      <Leverage />
      <EmbeddedBid />
      <ROI />
      <CashPurchase />
      <Predictability />
      <Protection />
      <Trust />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
