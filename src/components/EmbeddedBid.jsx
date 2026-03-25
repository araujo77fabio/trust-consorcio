import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Target, Zap } from 'lucide-react'

const EmbeddedBid = () => {
  const data = [
    { name: 'Recursos Próprios', value: 75, color: '#3b82f6' },
    { name: 'Lance Embutido', value: 25, color: '#f59e0b' },
  ]

  return (
    <section id="embeddedbid" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
            <Target className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Estratégia de Lance Embutido
          </h2>
          <p className="text-xl text-gray-400">
            Rodobens: Aumente suas chances sem desembolso extra
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8 border border-white/5"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Composição do Lance
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-6 space-y-3">
              <div className="bg-blue-900/20 rounded-lg p-4 flex items-center justify-between">
                <span className="text-gray-300 font-medium">Recursos Próprios</span>
                <span className="text-2xl font-bold text-blue-600">75%</span>
              </div>
              <div className="bg-orange-900/20 rounded-lg p-4 flex items-center justify-between">
                <span className="text-gray-300 font-medium">Do Próprio Crédito</span>
                <span className="text-2xl font-bold text-orange-600">25%</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8 border border-white/5"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Aumento de Chances
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-300">Sem Lance</span>
                  <span className="text-2xl font-bold text-red-600">5%</span>
                </div>
                <div className="w-full bg-base-800/30 rounded-full h-4">
                  <div className="bg-red-500 h-4 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-300">Com Lance Tradicional</span>
                  <span className="text-2xl font-bold text-gold-500">25%</span>
                </div>
                <div className="w-full bg-base-800/30 rounded-full h-4">
                  <div className="bg-gold-500 h-4 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-300">Com Lance Embutido</span>
                  <span className="text-2xl font-bold text-green-600">45%</span>
                </div>
                <div className="w-full bg-base-800/30 rounded-full h-4">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-green-900/20 border-l-4 border-green-500 rounded-lg p-4">
              <div className="flex items-start">
                <Zap className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-green-400 mb-1">Vantagem Estratégica</div>
                  <p className="text-sm text-gray-300">
                    Aumente suas chances em até <span className="font-bold">40%</span> sem
                    desembolso imediato de capital extra!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default EmbeddedBid
