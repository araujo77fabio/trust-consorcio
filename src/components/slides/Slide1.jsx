import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp } from 'lucide-react'

const Slide1 = () => {
  const data = [
    { ano: '2020', patrimonio: 100, juros: 95 },
    { ano: '2021', patrimonio: 150, juros: 88 },
    { ano: '2022', patrimonio: 220, juros: 80 },
    { ano: '2023', patrimonio: 310, juros: 72 },
    { ano: '2024', patrimonio: 420, juros: 65 },
    { ano: '2025', patrimonio: 560, juros: 58 },
  ]

  return (
    <section id="slide1" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              A Nova Era do Patrimônio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Engenharia Financeira: Alavancagem Patrimonial e Multiplicação de Capital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-base-800/80 rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
            >
              <h3 className="text-2xl font-bold text-white tracking-tight mb-6">Crescimento Patrimonial</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="ano" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="patrimonio" 
                    stroke="#0ea5e9" 
                    strokeWidth={3}
                    name="Patrimônio com Consórcio"
                    dot={{ fill: '#0ea5e9', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-base-800/80 rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
            >
              <h3 className="text-2xl font-bold text-white tracking-tight mb-6">Peso dos Juros Bancários</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="ano" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="juros" 
                    fill="#ef4444" 
                    name="Juros Bancários (%)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 text-center shadow-2xl"
          >
            <p className="text-2xl md:text-3xl font-bold text-white">
              "Pare de trabalhar pelo dinheiro e faça o capital coletivo trabalhar para você."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide1
