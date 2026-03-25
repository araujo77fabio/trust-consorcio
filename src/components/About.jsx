import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Shield, Award } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-base-800 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            A Nova <span className="text-gradient">Era do Patrimônio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Engenharia Financeira pura: estruturamos a sua alavancagem patrimonial e garantimos a multiplicação exponencial do seu capital de forma segura.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-8"
          >
            <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
              <TrendingUp className="w-7 h-7 text-gold-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Multiplicação de Capital</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Transforme seu dinheiro em patrimônio real através de estratégias inteligentes de alavancagem financeira, potencializando seus resultados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card glass-card-hover rounded-2xl p-8"
          >
            <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
              <Shield className="w-7 h-7 text-gold-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Proteção Patrimonial</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              O seu investimento protegido contra a volatilidade, garantindo a preservação do seu poder de compra.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card glass-card-hover rounded-2xl p-8"
          >
            <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
              <Award className="w-7 h-7 text-gold-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">ROI Excepcional</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Rentabilidade de até 140% sobre o capital investido, criando um cenário virtualmente impossível na renda fixa tradicional.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 relative p-[1px] rounded-3xl bg-gradient-to-r from-gold-600/50 via-gold-400/50 to-gold-600/50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-base-900/80 backdrop-blur-xl"></div>
          <div className="relative z-10 p-12 text-center rounded-3xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              "Pare de trabalhar pelo dinheiro e faça o <span className="text-gradient">capital coletivo</span> trabalhar para você."
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
