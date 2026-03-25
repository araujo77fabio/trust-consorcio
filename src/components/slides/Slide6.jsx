import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { Target, TrendingUp, Zap } from 'lucide-react'

const Slide6 = () => {
  const lanceData = [
    { name: 'Recursos Próprios', value: 75, color: '#0ea5e9' },
    { name: 'Lance Embutido (Crédito)', value: 25, color: '#f59e0b' },
  ]

  const advantageData = [
    { title: 'Sem Lance', chance: 5, color: 'red' },
    { title: 'Com Lance Tradicional', chance: 25, color: 'yellow' },
    { title: 'Com Lance Embutido', chance: 45, color: 'green' },
  ]

  return (
    <section id="slide6" className="min-h-screen flex items-center py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
              <Target className="w-8 h-8 text-accent-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Estratégia de Lance Embutido
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Rodobens: Aumente suas chances sem desembolso extra
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-base-800/80 rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
            >
              <h3 className="text-2xl font-bold text-white tracking-tight mb-6 text-center">
                Composição do Lance Embutido
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={lanceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {lanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>

              <div className="mt-6 space-y-3">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Recursos Próprios</span>
                    <span className="text-xl font-bold text-primary-600">75%</span>
                  </div>
                </div>
                <div className="bg-accent-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Do Próprio Crédito</span>
                    <span className="text-xl font-bold text-accent-600">25%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-base-800/80 rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
            >
              <h3 className="text-2xl font-bold text-white tracking-tight mb-6">
                Aumento de Chances de Contemplação
              </h3>
              
              <div className="space-y-6">
                {advantageData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-300">{item.title}</span>
                      <span className={`text-2xl font-bold ${
                        item.color === 'green' ? 'text-green-600' : 
                        item.color === 'yellow' ? 'text-gold-500' : 'text-red-600'
                      }`}>
                        {item.chance}%
                      </span>
                    </div>
                    <div className="w-full bg-base-800/30 rounded-full h-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.chance}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (0.1 * index) }}
                        className={`h-full rounded-full ${
                          item.color === 'green' ? 'bg-green-500' : 
                          item.color === 'yellow' ? 'bg-gold-500' : 'bg-red-500'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-green-900 mb-1">Vantagem Estratégica</div>
                    <p className="text-sm text-green-800">
                      Com o Lance Embutido, você aumenta suas chances em até <span className="font-bold">40%</span> sem 
                      precisar desembolsar capital extra imediatamente!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">75%</div>
              <div className="text-gray-400">Recursos Próprios</div>
              <div className="text-sm text-gray-500 mt-2">Você controla</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-accent-600 mb-2">25%</div>
              <div className="text-gray-400">Do Próprio Crédito</div>
              <div className="text-sm text-gray-500 mt-2">Sem desembolso extra</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl shadow-2xl p-6 text-center text-white"
            >
              <TrendingUp className="w-12 h-12 mx-auto mb-2 text-green-200" />
              <div className="text-4xl font-bold mb-2">+40%</div>
              <div className="text-green-100">Mais chances</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl p-8 text-center shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-3">Exclusividade Rodobens</h3>
            <p className="text-xl text-accent-50">
              O Lance Embutido permite que você use parte do próprio crédito para aumentar 
              significativamente suas chances de contemplação, sem precisar ter todo o valor em mãos!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide6
