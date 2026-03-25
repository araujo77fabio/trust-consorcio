import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Home, TrendingUp, DollarSign } from 'lucide-react'

const Leverage = () => {
  const data = [
    { mes: 'Início', aluguel: 0, parcela: 2800 },
    { mes: 'Contemplação', aluguel: 2500, parcela: 2800 },
    { mes: 'Mês 24', aluguel: 2500, parcela: 2800 },
    { mes: 'Mês 36', aluguel: 2500, parcela: 2800 },
  ]

  return (
    <section id="leverage" className="py-20 bg-base-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/30 rounded-full mb-4">
            <Home className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Alavancagem com Aluguel
          </h2>
          <p className="text-xl text-gray-400">
            O Imóvel que se Paga Sozinho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Gráfico de Equilíbrio</h3>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[300px] mt-8"><ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
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
                <XAxis dataKey="mes" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(17, 17, 17, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(8px)', padding: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}
                  formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="aluguel"
                  stroke="#34d399" strokeWidth={3}
                  strokeWidth={3}
                  name="Receita de Aluguel"
                />
                <Line
                  type="monotone"
                  dataKey="parcela"
                  stroke="#f87171" strokeWidth={3}
                  strokeWidth={3}
                  name="Parcela Consórcio"
                />
              </LineChart>
            </ResponsiveContainer></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Cenário Real</h3>

            <div className="space-y-4">
              <div className="bg-base-900 relative rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Valor do Imóvel</div>
                <div className="text-3xl font-bold text-white">R$ 500.000</div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Receita de Aluguel (0,5%)</div>
                <div className="text-3xl font-bold text-green-500">R$ 2.500</div>
              </div>

              <div className="bg-red-50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Parcela do Consórcio</div>
                <div className="text-3xl font-bold text-red-500">R$ 2.800</div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
                <div className="text-sm text-gray-400 mb-1">Aporte Real Mensal</div>
                <div className="text-4xl font-bold text-blue-500">R$ 300</div>
                <p className="text-sm text-gray-400 mt-2">Apenas 0,06% do valor do imóvel por mês!</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 shadow-2xl"
        >
          <div className="text-center text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-green-200" />
            <h3 className="text-3xl font-bold mb-4">Conclusão Poderosa</h3>
            <p className="text-xl text-green-50 max-w-4xl mx-auto">
              O cliente adquire um <span className="font-bold">patrimônio de meio milhão</span> aportando
              apenas <span className="font-bold">R$ 300/mês</span> após a contemplação.
              O imóvel praticamente <span className="font-bold">se paga sozinho</span> com o aluguel!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          <div className="glass-card rounded-xl shadow-2xl p-6 text-center">
            <DollarSign className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">R$ 500k</div>
            <div className="text-gray-400">Patrimônio Adquirido</div>
          </div>
          <div className="glass-card rounded-xl shadow-2xl p-6 text-center">
            <Home className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">R$ 300</div>
            <div className="text-gray-400">Aporte Real Mensal</div>
          </div>
          <div className="glass-card rounded-xl shadow-2xl p-6 text-center">
            <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">99,4%</div>
            <div className="text-gray-400">Pago pelo Aluguel</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Leverage
