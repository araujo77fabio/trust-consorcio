import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { DollarSign, PiggyBank } from 'lucide-react'

const Slide3 = () => {
  const monthlyData = [
    { mes: 'Mês 1', financiamento: 5200, consorcio: 2800, diferenca: 2400 },
    { mes: 'Mês 6', financiamento: 5200, consorcio: 2800, diferenca: 2400 },
    { mes: 'Mês 12', financiamento: 5200, consorcio: 2800, diferenca: 2400 },
    { mes: 'Mês 24', financiamento: 5200, consorcio: 2800, diferenca: 2400 },
    { mes: 'Mês 36', financiamento: 5200, consorcio: 2800, diferenca: 2400 },
  ]

  const investmentGrowth = [
    { ano: 'Ano 1', acumulado: 28800 },
    { ano: 'Ano 2', acumulado: 59040 },
    { ano: 'Ano 3', acumulado: 90840 },
    { ano: 'Ano 4', acumulado: 124320 },
    { ano: 'Ano 5', acumulado: 159600 },
    { ano: 'Ano 10', acumulado: 350000 },
  ]

  return (
    <section id="slide3" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Comparativo de Fluxo de Caixa
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A diferença mensal pode gerar um segundo patrimônio
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
              <h3 className="text-2xl font-bold text-white tracking-tight mb-6">Parcelas Mensais</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="mes" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
                  />
                  <Legend />
                  <Bar dataKey="financiamento" fill="#ef4444" name="Financiamento" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="consorcio" fill="#10b981" name="Consórcio" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Financiamento</div>
                  <div className="text-2xl font-bold text-red-600">R$ 5.200</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Consórcio</div>
                  <div className="text-2xl font-bold text-green-600">R$ 2.800</div>
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
                Investindo a Diferença (R$ 2.400/mês)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={investmentGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="ano" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
                  />
                  <Bar 
                    dataKey="acumulado" 
                    fill="#0ea5e9" 
                    name="Patrimônio Acumulado (CDI)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>

              <div className="mt-6 bg-primary-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Em 10 anos</div>
                    <div className="text-2xl font-bold text-primary-600">R$ 350.000</div>
                  </div>
                  <PiggyBank className="w-12 h-12 text-primary-400" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-center shadow-2xl"
          >
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              Insight de Fechamento
            </p>
            <p className="text-xl text-green-50">
              A diferença de <span className="font-bold">R$ 2.400 mensais</span> investida em CDI 
              durante o mesmo período gera um <span className="font-bold">segundo patrimônio "de graça"</span> 
              de mais de R$ 350 mil em 10 anos!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide3
