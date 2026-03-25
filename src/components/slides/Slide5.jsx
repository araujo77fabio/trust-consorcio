import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts'
import { Home, TrendingUp, DollarSign } from 'lucide-react'

const Slide5 = () => {
  const breakEvenData = [
    { mes: 'Mês 1', aluguel: 0, parcela: 2800, saldo: -2800 },
    { mes: 'Mês 6', aluguel: 0, parcela: 2800, saldo: -16800 },
    { mes: 'Contemplação', aluguel: 2500, parcela: 2800, saldo: -300 },
    { mes: 'Mês 18', aluguel: 2500, parcela: 2800, saldo: -300 },
    { mes: 'Mês 24', aluguel: 2500, parcela: 2800, saldo: -300 },
    { mes: 'Mês 36', aluguel: 2500, parcela: 2800, saldo: -300 },
  ]

  const scenarios = [
    {
      title: 'Cenário Conservador',
      valorImovel: 500000,
      aluguel: 2500,
      parcela: 2800,
      aporteReal: 300,
      color: 'blue'
    },
    {
      title: 'Cenário Otimista',
      valorImovel: 500000,
      aluguel: 3000,
      parcela: 2800,
      lucro: 200,
      color: 'green'
    }
  ]

  return (
    <section id="slide5" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Home className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Alavancagem com Aluguel
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              O Imóvel que se Paga Sozinho
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
              <h3 className="text-2xl font-bold text-white tracking-tight mb-6">Gráfico de Equilíbrio</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={breakEvenData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="mes" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
                  />
                  <Legend />
                  <ReferenceLine y={0} stroke="#666" strokeDasharray="3 3" />
                  <Line 
                    type="monotone" 
                    dataKey="aluguel" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    name="Receita de Aluguel"
                    dot={{ fill: '#10b981', r: 5 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="parcela" 
                    stroke="#ef4444" 
                    strokeWidth={3}
                    name="Parcela Consórcio"
                    dot={{ fill: '#ef4444', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">Após contemplação:</div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Aluguel - Parcela</span>
                  <span className="text-xl font-bold text-primary-600">R$ 2.500 - R$ 2.800</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {scenarios.map((scenario, index) => (
                <div key={index} className="bg-base-800/80 rounded-xl shadow-2xl p-6">
                  <h4 className="text-xl font-bold text-white tracking-tight mb-4">{scenario.title}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-400">Valor do Imóvel</span>
                      <span className="font-semibold">R$ {scenario.valorImovel.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-400">Receita de Aluguel (0,5%)</span>
                      <span className="font-semibold text-green-600">R$ {scenario.aluguel.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-400">Parcela do Consórcio</span>
                      <span className="font-semibold text-red-600">R$ {scenario.parcela.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className={`flex justify-between items-center pt-2 ${scenario.aporteReal ? 'bg-blue-50' : 'bg-green-50'} rounded-lg p-3`}>
                      <span className="font-bold text-white tracking-tight">Aporte Real Mensal</span>
                      <span className={`text-xl font-bold ${scenario.aporteReal ? 'text-blue-600' : 'text-green-600'}`}>
                        {scenario.aporteReal ? `R$ ${scenario.aporteReal}` : `+R$ ${scenario.lucro}`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
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
            transition={{ delay: 0.5 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white tracking-tight mb-2">R$ 500k</div>
              <div className="text-gray-400">Patrimônio Adquirido</div>
            </div>
            <div className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center">
              <Home className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white tracking-tight mb-2">R$ 300</div>
              <div className="text-gray-400">Aporte Real Mensal</div>
            </div>
            <div className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white tracking-tight mb-2">99,4%</div>
              <div className="text-gray-400">Pago pelo Aluguel</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide5
