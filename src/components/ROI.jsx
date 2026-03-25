import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { Award, TrendingUp, DollarSign } from 'lucide-react'

const ROI = () => {
  const data = [
    { investimento: 'Consórcio (Venda Carta)', retorno: 140, color: '#10b981' },
    { investimento: 'Renda Fixa (CDB)', retorno: 13, color: '#6b7280' },
    { investimento: 'Poupança', retorno: 7, color: '#9ca3af' },
  ]

  return (
    <section id="roi" className="py-20 bg-base-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/30 rounded-full mb-4">
            <Award className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ROI na Venda da Carta Contemplada
          </h2>
          <p className="text-xl text-gray-400">
            Giro de Capital: Rentabilidade impossível na Renda Fixa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Tabela de Rentabilidade</h3>

            <div className="space-y-4">
              <div className="bg-base-900 relative rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Capital Aportado</div>
                <div className="text-3xl font-bold text-white">R$ 50.000</div>
                <p className="text-xs text-gray-500 mt-1">Até a contemplação (18 meses)</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Venda do Ágio da Carta</div>
                <div className="text-3xl font-bold text-green-500">R$ 120.000</div>
                <p className="text-xs text-gray-500 mt-1">Valor de mercado da carta contemplada</p>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-4 text-white">
                <div className="text-sm text-green-100 mb-1">Lucro Líquido</div>
                <div className="text-4xl font-bold">R$ 70.000</div>
                <p className="text-xs text-green-100 mt-1">Retorno sobre investimento</p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">ROI Total</div>
                    <div className="text-4xl font-bold text-blue-500">140%</div>
                  </div>
                  <TrendingUp className="w-16 h-16 text-blue-400" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Comparativo de Rentabilidade
            </h3>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] mt-8"><ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical">
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#d97706" stopOpacity={0.3}/>
            </linearGradient>
            <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#059669" stopOpacity={0.3}/>
            </linearGradient>
            <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f87171" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#dc2626" stopOpacity={0.3}/>
            </linearGradient>
          </defs>
        
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="investimento" type="category" stroke="#6b7280" width={150} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(17, 17, 17, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(8px)', padding: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}
                  formatter={(value) => `${value}%`}
                />
                <Bar dataKey="retorno" name="Retorno (%)" radius={[0, 8, 8, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl shadow-2xl p-6 text-center"
          >
            <DollarSign className="w-10 h-10 text-gray-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">R$ 50k</div>
            <div className="text-sm text-gray-400">Investido</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-xl shadow-2xl p-6 text-center"
          >
            <TrendingUp className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-500 mb-1">R$ 120k</div>
            <div className="text-sm text-gray-400">Venda Carta</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl shadow-2xl p-6 text-center"
          >
            <Award className="w-10 h-10 text-blue-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-500 mb-1">R$ 70k</div>
            <div className="text-sm text-gray-400">Lucro Líquido</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
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
          className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Rentabilidade Extraordinária</h3>
          <p className="text-xl text-green-50 max-w-4xl mx-auto">
            Uma rentabilidade de <span className="font-bold">~140% sobre o capital investido</span> é
            <span className="font-bold"> impossível de alcançar na Renda Fixa</span> no mesmo período.
            O consórcio se torna uma ferramenta de multiplicação de capital!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ROI
