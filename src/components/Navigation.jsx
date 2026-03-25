import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, TrendingUp } from 'lucide-react'

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection }) => {
  const menuItems = [
    { id: 'hero', label: 'Início' },
    { id: 'slide1', label: 'Nova Era' },
    { id: 'slide2', label: 'Custo do Financiamento' },
    { id: 'slide3', label: 'Fluxo de Caixa' },
    { id: 'slide4', label: 'Taxa de Administração' },
    { id: 'slide5', label: 'Alavancagem' },
    { id: 'slide6', label: 'Lance Embutido' },
    { id: 'slide7', label: 'ROI' },
    { id: 'slide8', label: 'Compra à Vista' },
    { id: 'slide9', label: 'Previsibilidade' },
    { id: 'slide10', label: 'Proteção Patrimonial' },
    { id: 'slide11', label: 'Novacapu' },
    { id: 'slide12', label: 'Conclusão' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-base-800/80/95 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-white tracking-tight">Novacapu Consórcio</span>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-base-800/30 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-16 right-0 bottom-0 w-80 bg-base-800/80 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              <h3 className="text-lg font-bold text-white tracking-tight mb-4">Navegação</h3>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        activeSection === item.id
                          ? 'bg-primary-600 text-white shadow-2xl'
                          : 'hover:bg-base-800/30 text-gray-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
