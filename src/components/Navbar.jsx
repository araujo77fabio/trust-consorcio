import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: 'hero', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'comparison', label: 'Comparativo' },
    { id: 'leverage', label: 'Vantagens' },
    { id: 'trust', label: 'Novacapu' },
    { id: 'cta', label: 'Contato' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base-900/80 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div className="flex items-center">
            <img src="/logo-primetrust.svg" alt="PrimeTrust" className="h-16 md:h-20 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  activeSection === item.id
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-base-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-gold-500/20">
              Simular Agora
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 text-gray-300 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-base-900 border-t border-white/5"
        >
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-base-900 px-6 py-3 rounded-full font-bold mt-4 shadow-lg">
              Simular Agora
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
