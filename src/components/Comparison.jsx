import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, CheckCircle } from 'lucide-react'

const Comparison = () => {
  return (
    <section id="comparison" className="py-24 bg-base-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            O Custo <span className="text-gradient">do "Quero Agora"</span>
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Comparativo real para a aquisição de um bem de <span className="font-semibold text-white">R$ 500.000</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Financiamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h3 className="text-lg font-bold text-white">Financiamento</h3>
            </div>
            
            <div className="mb-6">
              <div className="text-sm text-gray-400 mb-1">Total pago em 30 anos</div>
              <div className="text-4xl font-black text-red-400 tracking-tight">R$ 1.350.000</div>
            </div>
            
            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Valor do crédito</span>
                <span className="font-semibold text-gray-200">R$ 500.000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Juros abusivos (10-12% a.a.)</span>
                <span className="font-semibold text-red-400">+ R$ 850.000</span>
              </div>
            </div>
          </motion.div>

          {/* Consórcio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-8 relative overflow-hidden ring-1 ring-gold-500/20 transform md:-translate-y-4 shadow-[0_0_30px_rgba(217,119,6,0.15)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600"></div>
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="w-6 h-6 text-gold-400" />
              <h3 className="text-lg font-bold text-white">Consórcio</h3>
            </div>

            <div className="mb-6">
              <div className="text-sm text-gray-400 mb-1">Total pago no plano</div>
              <div className="text-4xl font-black text-gold-400 tracking-tight">R$ 600.000</div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Valor do crédito</span>
                <span className="font-semibold text-gray-200">R$ 500.000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Custo total (Taxa Adm)</span>
                <span className="font-semibold text-gold-400">+ R$ 100.000</span>
              </div>
            </div>
          </motion.div>

          {/* Resultado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-[1px] bg-gradient-to-br from-gold-500 to-base-800"
          >
            <div className="bg-base-900 rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <TrendingDown className="w-48 h-48 text-gold-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-300 mb-6 tracking-tight">Sua Economia</h3>
                <div className="text-4xl font-black text-white mb-2 tracking-tight">R$ 750.000</div>
                <div className="text-gold-400 font-bold bg-gold-500/10 inline-block px-3 py-1 rounded-full text-sm my-4">
                  Você salva 55%
                </div>
              </div>
              <p className="text-sm text-gray-400 relative z-10 leading-relaxed font-light mt-6">
                No financiamento, você paga o seu bem e compra outro quase inteiro para o banco. No consórcio, esse valor vira patrimônio seu.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Comparison
