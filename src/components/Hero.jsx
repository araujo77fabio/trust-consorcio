import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, TrendingUp, DollarSign, Shield } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-32 bg-base-900">
      <div className="absolute inset-0 bg-gradient-to-b from-base-800/50 to-base-900 z-0"></div>
      
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-600/20 rounded-full filter blur-[100px] animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full filter blur-[120px] animate-glow" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold tracking-wider uppercase">
            A Nova Era do Patrimônio
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Engenharia <span className="text-gradient">Financeira</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8 tracking-tight">
            Alavancagem Patrimonial e <br className="hidden md:block" /> Multiplicação de Capital
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto font-light">
            Pare de trabalhar pelo dinheiro e faça o <strong className="text-gray-200 font-medium">capital coletivo</strong> trabalhar para você
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ease: "easeOut" }}
              className="glass-card glass-card-hover rounded-2xl p-6 min-w-[200px]"
            >
              <TrendingUp className="w-10 h-10 text-gold-400 mb-4 mx-auto" />
              <div className="text-4xl font-black text-white mb-1">140%</div>
              <div className="text-sm text-gold-200/70 font-medium uppercase tracking-wider">ROI Potencial</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ease: "easeOut" }}
              className="glass-card glass-card-hover rounded-2xl p-6 min-w-[200px]"
            >
              <DollarSign className="w-10 h-10 text-gold-400 mb-4 mx-auto" />
              <div className="text-4xl font-black text-white mb-1">55%</div>
              <div className="text-sm text-gold-200/70 font-medium uppercase tracking-wider">Economia vs Banco</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
              className="glass-card glass-card-hover rounded-2xl p-6 min-w-[200px]"
            >
              <Shield className="w-10 h-10 text-gold-400 mb-4 mx-auto" />
              <div className="text-4xl font-black text-white mb-1">+35</div>
              <div className="text-sm text-gold-200/70 font-medium uppercase tracking-wider">Anos de Mercado</div>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={scrollToNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-base-900 transition-all duration-200 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full hover:from-gold-300 hover:to-gold-500 hover:shadow-lg hover:shadow-gold-500/30 text-lg shadow-xl"
          >
            Descubra Como Multiplicar Seu Patrimônio
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToNext}
      >
        <ChevronDown className="w-8 h-8 text-gray-500 hover:text-gold-400 transition-colors" />
      </motion.div>
    </section>
  )
}

export default Hero
