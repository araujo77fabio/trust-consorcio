import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { AlertTriangle, TrendingDown, Phone, Mail, MessageCircle, QrCode, ArrowRight } from 'lucide-react'

const Slide12 = () => {
  const [showQR, setShowQR] = useState(false)

  const opportunityCostData = [
    { mes: 'Hoje', patrimonio: 0, perdido: 0 },
    { mes: '3 meses', patrimonio: 0, perdido: 15000 },
    { mes: '6 meses', patrimonio: 0, perdido: 35000 },
    { mes: '12 meses', patrimonio: 0, perdido: 80000 },
    { mes: '18 meses', patrimonio: 0, perdido: 150000 },
    { mes: '24 meses', patrimonio: 0, perdido: 250000 },
  ]

  const contactMethods = [
    { icon: Phone, label: 'Telefone', value: '(11) 3000-0000', color: 'blue' },
    { icon: Mail, label: 'E-mail', value: 'contato@novacapu.com.br', color: 'green' },
    { icon: MessageCircle, label: 'WhatsApp', value: '(11) 99999-9999', color: 'green' },
  ]

  return (
    <section id="slide12" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              O Custo da Inércia
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quanto você está perdendo ao esperar para começar?
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-base-800/80/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-12 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Gráfico de Perda Financeira: Custo de Esperar 12 Meses
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={opportunityCostData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="mes" stroke="#ffffff80" />
                <YAxis stroke="#ffffff80" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }}
                  formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="perdido" 
                  stroke="#ef4444" 
                  strokeWidth={4}
                  name="Oportunidade Perdida"
                  dot={{ fill: '#ef4444', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-6 bg-red-500/20 border-l-4 border-red-500 rounded-lg p-6">
              <div className="flex items-start">
                <TrendingDown className="w-8 h-8 text-red-400 mr-4 flex-shrink-0" />
                <div>
                  <div className="text-xl font-bold text-white mb-2">
                    Perda Estimada em 12 Meses: R$ 80.000
                  </div>
                  <p className="text-gray-300">
                    Cada mês que você espera é uma oportunidade de multiplicação de patrimônio que você deixa passar. 
                    O tempo é seu maior aliado ou seu maior inimigo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl p-10 mb-12 shadow-2xl"
          >
            <div className="text-center text-white mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                "Não espere para comprar imóveis.<br />Compre consórcio e espere para ter imóveis."
              </h3>
              <p className="text-xl text-accent-100">
                A diferença entre quem constrói patrimônio e quem apenas sonha com ele.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-base-800/80/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">140%</div>
                <div className="text-accent-100">ROI Potencial</div>
              </div>
              <div className="bg-base-800/80/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">R$ 750k</div>
                <div className="text-accent-100">Economia vs Banco</div>
              </div>
              <div className="bg-base-800/80/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">R$ 300</div>
                <div className="text-accent-100">Aporte Real Mensal</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowQR(!showQR)}
              className="w-full bg-base-800/80 text-accent-600 py-6 rounded-xl text-xl font-bold shadow-2xl hover:bg-base-800/30 transition-all flex items-center justify-center"
            >
              <QrCode className="w-6 h-6 mr-3" />
              {showQR ? 'Ocultar QR Code' : 'Ver QR Code para Simulação'}
            </motion.button>

            {showQR && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 bg-base-800/80 rounded-xl p-8 text-center"
              >
                <div className="w-48 h-48 bg-base-800/30 mx-auto rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="w-24 h-24 text-gray-400" />
                </div>
                <p className="text-gray-400">Escaneie para fazer sua simulação imediata</p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-base-800/80/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Entre em Contato</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                  className="bg-base-800/80/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-base-800/80/20 transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    method.color === 'blue' ? 'bg-blue-500/30' : 'bg-green-500/30'
                  }`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-gray-300 mb-2">{method.label}</div>
                  <div className="text-white font-semibold">{method.value}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-5 rounded-xl text-lg font-bold shadow-2xl hover:from-green-700 hover:to-green-600 transition-all flex items-center justify-center"
            >
              Agende sua Consultoria Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm mb-2">
              © 2024 Novacapu Consórcios. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs">
              Administradora de Consórcios regulamentada pelo Banco Central do Brasil
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide12
