import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { DollarSign, PiggyBank } from 'lucide-react'

const CashFlow = () => {
  const monthlyData = [
    { mes: 'Mês 1', financiamento: 5200, consorcio: 2800 },
    { mes: 'Mês 12', financiamento: 5200, consorcio: 2800 },
    { mes: 'Mês 24', financiamento: 5200, consorcio: 2800 },
    { mes: 'Mês 36', financiamento: 5200, consorcio: 2800 },
  ]

  return (
    <section id="cashflow" className="py-20 bg-base-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comparativo de Fluxo de Caixa
          </h2>
          <p className="text-xl text-gray-400">
            A diferença mensal pode gerar um segundo patrimônio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8 border border-white/5"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Parcelas Mensais</h3>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[300px] mt-8"><ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
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
                <XAxis dataKey="mes" stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 13 }} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 13 }} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(17, 17, 17, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(8px)', padding: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}
                  formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
                />
                <Legend />
                <Bar dataKey="financiamento" fill="url(#redGrad)" name="Financiamento" radius={[8, 8, 0, 0]} />
                <Bar dataKey="consorcio" fill="url(#greenGrad)" name="Consórcio" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer></div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-red-900/20 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Financiamento</div>
                <div className="text-2xl font-bold text-red-600">R$ 5.200</div>
              </div>
              <div className="bg-green-900/20 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Consórcio</div>
                <div className="text-2xl font-bold text-green-600">R$ 2.800</div>
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
              Investindo a Diferença
            </h3>

            <div className="space-y-6">
              <div className="bg-blue-900/20 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-2">Diferença Mensal</div>
                <div className="text-4xl font-bold text-blue-600 mb-4">R$ 2.400</div>
                <p className="text-gray-300">
                  Valor que você economiza todo mês escolhendo o consórcio ao invés do financiamento
                </p>
              </div>

              <div className="bg-green-900/20 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Investindo em CDI (10 anos)</div>
                    <div className="text-3xl font-bold text-green-600">R$ 350.000</div>
                  </div>
                  <PiggyBank className="w-16 h-16 text-green-500" />
                </div>
                <p className="text-gray-300">
                  Patrimônio acumulado investindo a diferença mensal
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-8 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white tracking-tight mb-4">Insight</h3>
          <p className="text-xl text-gray-200">
            A diferença de <span className="font-bold">R$ 2.400 mensais</span> investida em CDI
            durante o mesmo período gera um <span className="font-bold">segundo patrimônio "de graça"</span>
            de mais de R$ 350 mil em 10 anos!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CashFlow
