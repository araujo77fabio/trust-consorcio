import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Shield, TrendingUp, Lock } from 'lucide-react'

const Protection = () => {
  const data = [
    { ano: '2020', credito: 500000, valorImovel: 500000 },
    { ano: '2021', credito: 530000, valorImovel: 530000 },
    { ano: '2022', credito: 565000, valorImovel: 565000 },
    { ano: '2023', credito: 595000, valorImovel: 595000 },
    { ano: '2024', credito: 625000, valorImovel: 625000 },
    { ano: '2025', credito: 660000, valorImovel: 660000 },
  ]

  return (
    <section id="protection" className="py-20 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/30 rounded-full mb-4">
            <Shield className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proteção Patrimonial e Reajuste
          </h2>
          <p className="text-xl text-gray-400">
            INCC/IPCA: Seu investimento protegido da inflação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Evolução: Valor do Crédito vs Inflação
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="ano" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="credito"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="Crédito Consórcio"
                />
                <Line
                  type="monotone"
                  dataKey="valorImovel"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="Valor do Imóvel"
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-6 bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="font-bold text-green-500">Proteção Total:</span> Seu crédito acompanha
                a valorização do imóvel, garantindo que você sempre terá poder de compra preservado.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-xl shadow-2xl p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white mb-2">Proteção contra Inflação</h4>
                  <p className="text-gray-400">
                    Seu crédito é reajustado por INCC/IPCA, preservando o poder de compra
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl shadow-2xl p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white mb-2">Valorização Automática</h4>
                  <p className="text-gray-400">
                    Se o imóvel encarece, seu crédito aumenta proporcionalmente
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl shadow-2xl p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white mb-2">Garantia de Aquisição</h4>
                  <p className="text-gray-400">
                    Você sempre conseguirá comprar o bem desejado, independente da inflação
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl shadow-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-white mb-2">R$ 500k</div>
            <div className="text-gray-400">Crédito Inicial (2020)</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-xl shadow-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-green-500 mb-2">R$ 660k</div>
            <div className="text-gray-400">Crédito Final (2025)</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl shadow-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-blue-500 mb-2">+32%</div>
            <div className="text-gray-400">Valorização</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-center shadow-2xl"
        >
          <Shield className="w-16 h-16 text-green-200 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-4">Conceito Fundamental</h3>
          <p className="text-xl text-green-50 max-w-4xl mx-auto">
            O consórcio <span className="font-bold">preserva o poder de compra</span>. Se o imóvel encarece,
            seu crédito aumenta proporcionalmente, garantindo que o investimento
            <span className="font-bold"> não perde valor real</span>. Você está sempre protegido contra a inflação!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Protection
