import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, DollarSign, Award } from 'lucide-react'

const Slide7 = () => {
  const roiData = [
    { investimento: 'Consórcio (Venda Carta)', retorno: 140, color: '#10b981' },
    { investimento: 'Renda Fixa (CDB)', retorno: 13, color: '#6b7280' },
    { investimento: 'Poupança', retorno: 7, color: '#9ca3af' },
    { investimento: 'Tesouro Direto', retorno: 11, color: '#6b7280' },
  ]

  const timelineData = [
    { periodo: 'Início', aportado: 0, valor: 0 },
    { periodo: '6 meses', aportado: 15000, valor: 15000 },
    { periodo: '12 meses', aportado: 30000, valor: 30000 },
    { periodo: '18 meses', aportado: 50000, valor: 50000 },
    { periodo: 'Contemplação', aportado: 50000, valor: 120000 },
  ]

  return (
    <section id="slide7" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              ROI na Venda da Carta Contemplada
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Giro de Capital: Rentabilidade impossível na Renda Fixa
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
              <h3 className="text-2xl font-bold text-white tracking-tight mb-6">Tabela de Rentabilidade</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Capital Aportado</span>
                    <span className="text-xl font-bold text-white tracking-tight">R$ 50.000</span>
                  </div>
                  <div className="text-xs text-gray-500">Até a contemplação (18 meses)</div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Venda do Ágio da Carta</span>
                    <span className="text-xl font-bold text-green-600">R$ 120.000</span>
                  </div>
                  <div className="text-xs text-gray-500">Valor de mercado da carta contemplada</div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Lucro Líquido</span>
                    <span className="text-2xl font-bold">R$ 70.000</span>
                  </div>
                  <div className="text-xs text-green-100">Retorno sobre investimento</div>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-500 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">ROI Total</div>
                    <div className="text-3xl font-bold text-primary-600">140%</div>
                  </div>
                  <TrendingUp className="w-12 h-12 text-primary-400" />
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
                Comparativo de Rentabilidade
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={roiData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" stroke="#6b7280" label={{ value: 'ROI (%)', position: 'bottom' }} />
                  <YAxis dataKey="investimento" type="category" stroke="#6b7280" width={150} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    formatter={(value) => `${value}%`}
                  />
                  <Bar dataKey="retorno" name="Retorno (%)" radius={[0, 8, 8, 0]}>
                    {roiData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center"
            >
              <DollarSign className="w-10 h-10 text-gray-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white tracking-tight mb-1">R$ 50k</div>
              <div className="text-sm text-gray-400">Investido</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center"
            >
              <TrendingUp className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-1">R$ 120k</div>
              <div className="text-sm text-gray-400">Venda Carta</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center"
            >
              <Award className="w-10 h-10 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-600 mb-1">R$ 70k</div>
              <div className="text-sm text-gray-400">Lucro Líquido</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl shadow-2xl p-6 text-center text-white"
            >
              <div className="text-3xl font-bold mb-1">140%</div>
              <div className="text-sm text-green-100">ROI Total</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-center shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Rentabilidade Extraordinária</h3>
            <p className="text-xl text-green-50 max-w-4xl mx-auto">
              Uma rentabilidade de <span className="font-bold">~140% sobre o capital investido</span> é 
              <span className="font-bold"> impossível de alcançar na Renda Fixa</span> no mesmo período. 
              O consórcio se torna uma ferramenta de multiplicação de capital!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide7
