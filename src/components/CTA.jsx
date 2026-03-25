import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, ArrowRight, QrCode } from 'lucide-react'

const CTA = () => {
  const [showQR, setShowQR] = useState(false)

  return (
    <section id="cta" className="py-24 bg-base-900 relative border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            O Custo <span className="text-gradient">da Inércia</span>
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Quanto você está perdendo ao esperar para começar?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-1 bg-gradient-to-br from-gold-500/80 to-gold-600/20 shadow-[0_0_40px_rgba(217,119,6,0.15)] mb-16"
        >
          <div className="bg-base-900/90 backdrop-blur-xl rounded-[23px] p-10">
            <div className="text-center text-white mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
                "Não espere para comprar imóveis.<br />Compre consórcio e <span className="text-gold-400">espere para ter imóveis</span>."
              </h3>
              <p className="text-xl text-gray-400 font-light">
                A diferença entre quem constrói patrimônio e quem apenas sonha com ele.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="glass-card rounded-xl p-6 text-center border-gold-500/20">
                <div className="text-4xl font-black text-gold-400 mb-2">140%</div>
                <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">ROI Potencial</div>
              </div>
              <div className="glass-card rounded-xl p-6 text-center border-gold-500/20">
                <div className="text-4xl font-black text-gold-400 mb-2">R$ 750k</div>
                <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">Economia vs Banco</div>
              </div>
              <div className="glass-card rounded-xl p-6 text-center border-gold-500/20">
                <div className="text-4xl font-black text-gold-400 mb-2">R$ 300</div>
                <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">Aporte Real Mensal</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowQR(!showQR)}
              className="w-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-base-900 py-5 rounded-xl text-xl font-bold shadow-2xl transition-all flex items-center justify-center"
            >
              <QrCode className="w-6 h-6 mr-3" />
              {showQR ? 'Ocultar QR Code' : 'Ver QR Code para Simulação'}
            </motion.button>

            {showQR && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 glass-card rounded-xl p-8 text-center"
              >
                <div className="w-56 h-56 bg-white mx-auto rounded-xl flex items-center justify-center mb-4 p-4 shadow-inner">
                  <QrCode className="w-full h-full text-base-900" />
                </div>
                <p className="text-gray-300 font-medium tracking-wide">Escaneie para fazer sua simulação imediata</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-10"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center tracking-tight">Especialistas à sua disposição</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="glass-card glass-card-hover rounded-xl p-8 text-center cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-medium">Ligue</div>
              <div className="text-white font-bold text-lg">(92) 98123-8565</div>
            </div>

            <div className="glass-card glass-card-hover rounded-xl p-8 text-center cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-medium">WhatsApp</div>
              <div className="text-white font-bold text-lg">(92) 98123-8565</div>
            </div>

            <div className="glass-card glass-card-hover rounded-xl p-8 text-center cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-medium">E-mail</div>
              <div className="text-white font-bold text-lg">contato@novacapu.com.br</div>
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-base-800 border border-white/10 rounded-full hover:bg-base-700 hover:border-white/20 hover:shadow-xl text-lg"
            >
              Agende sua Consultoria Gratuita
              <ArrowRight className="w-5 h-5 ml-3 text-gold-400" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
