import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { AlertTriangle, TrendingDown } from 'lucide-react'

const Slide2 = () => {
  const comparisonData = [
    { tipo: 'Financiamento', total: 1350000, juros: 850000, principal: 500000 },
    { tipo: 'Consórcio', total: 600000, taxa: 100000, principal: 500000 },
  ]

  const detailData = [
    { categoria: 'Valor do Bem', financiamento: 500000, consorcio: 500000 },
    { categoria: 'Juros/Taxas', financiamento: 850000, consorcio: 100000 },
    { categoria: 'Total Pago', financiamento: 1350000, consorcio: 600000 },
  ]

  return (
    <section id="slide2" className="min-h-screen flex items-center py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              O Custo do "Quero Agora"
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comparativo: Financiamento vs Consórcio para um bem de R$ 500.000
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-base-800/80 rounded-xl shadow-2xl p-6 border-l-4 border-red-500"
            >
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Financiamento</h3>
              <div className="text-3xl font-bold text-red-600 mb-1">R$ 1.350.000</div>
              <p className="text-sm text-gray-500">Total pago em 30 anos</p>
              <div className="mt-4 text-sm">
                <div className="flex justify-between mb-1">
                  <span>Juros (10-12% a.a.)</span>
                  <span className="font-semibold">R$ 850.000</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-base-800/80 rounded-xl shadow-2xl p-6 border-l-4 border-green-500"
            >
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Consórcio</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">R$ 600.000</div>
              <p className="text-sm text-gray-500">Total pago em 30 anos</p>
              <div className="mt-4 text-sm">
                <div className="flex justify-between mb-1">
                  <span>Taxa Adm (15-20%)</span>
                  <span className="font-semibold">R$ 100.000</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl shadow-2xl p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-2">Economia</h3>
              <div className="text-3xl font-bold mb-1">R$ 750.000</div>
              <p className="text-sm text-primary-100">Você economiza 55%</p>
              <div className="mt-4">
                <TrendingDown className="w-12 h-12 text-primary-200" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-base-800/80 rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight mb-6 text-center">
              Onde está o seu dinheiro?
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={detailData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="categoria" type="category" stroke="#6b7280" width={120} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
                />
                <Legend />
                <Bar dataKey="financiamento" fill="#ef4444" name="Financiamento" radius={[0, 8, 8, 0]} />
                <Bar dataKey="consorcio" fill="#10b981" name="Consórcio" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6"
          >
            <p className="text-lg text-gray-200">
              <span className="font-bold text-red-600">Atenção:</span> No financiamento tradicional, 
              <span className="font-bold"> 63% do valor pago são juros bancários</span>. 
              Você paga quase 3x o valor do bem!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide2
