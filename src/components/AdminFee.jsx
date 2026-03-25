import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Calculator, Percent } from 'lucide-react'

const AdminFee = () => {
  const cetData = [
    { ano: 'Ano 1', consorcio: 1.6, financiamento: 11.5 },
    { ano: 'Ano 5', consorcio: 1.6, financiamento: 11.5 },
    { ano: 'Ano 10', consorcio: 1.6, financiamento: 11.5 },
  ]

  return (
    <section id="adminfee" className="py-20 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Matemática da Taxa de Administração
          </h2>
          <p className="text-xl text-gray-400">
            Custo Efetivo Total (CET): A verdade por trás dos números
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Fórmula do CET</h3>

            <div className="bg-base-900 relative rounded-xl p-6 mb-6">
              <div className="text-center mb-4">
                <div className="text-lg font-semibold text-gray-300 mb-2">CET do Consórcio</div>
                <div className="text-3xl font-mono font-bold text-blue-500 mb-4">
                  CET = Taxa Adm ÷ Prazo
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Taxa de Administração:</span>
                    <span className="font-bold text-white">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Prazo em Anos:</span>
                    <span className="font-bold text-white">10 anos</span>
                  </div>
                  <div className="border-t-2 border-blue-200 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-white">CET Anual:</span>
                      <span className="text-2xl font-bold text-green-500">2% a.a.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="font-bold">Resultado:</span> O custo real do consórcio fica entre
                <span className="font-bold text-green-500"> 1,2% a 2% ao ano</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Comparação de CET</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cetData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="ano" stroke="#6b7280" />
                <YAxis stroke="#6b7280" label={{ value: '% ao ano', angle: -90, position: 'insideLeft' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => `${value}% a.a.`}
                />
                <Legend />
                <Bar dataKey="consorcio" fill="#10b981" name="Consórcio" radius={[8, 8, 0, 0]} />
                <Bar dataKey="financiamento" fill="#ef4444" name="Financiamento" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Percent className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-500">1,6%</div>
                <div className="text-xs text-gray-400">Consórcio</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <Percent className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-500">11,5%</div>
                <div className="text-xs text-gray-400">Financiamento</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-500">7x</div>
                <div className="text-xs text-gray-400">Mais barato</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6"
        >
          <p className="text-lg text-gray-200">
            <span className="font-bold text-blue-500">Importante:</span> Enquanto o financiamento
            raramente baixa de <span className="font-bold">10% ao ano</span>, o consórcio oferece
            um custo real de apenas <span className="font-bold">1,2% a 2% ao ano</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AdminFee
