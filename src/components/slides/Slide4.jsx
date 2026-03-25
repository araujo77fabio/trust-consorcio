import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Calculator, Percent } from 'lucide-react'

const Slide4 = () => {
  const cetData = [
    { tipo: 'Consórcio', cet: 1.6, color: '#10b981' },
    { tipo: 'Financiamento', cet: 11.5, color: '#ef4444' },
  ]

  const yearlyComparison = [
    { ano: 'Ano 1', consorcio: 1.6, financiamento: 11.5 },
    { ano: 'Ano 2', consorcio: 1.6, financiamento: 11.5 },
    { ano: 'Ano 3', consorcio: 1.6, financiamento: 11.5 },
    { ano: 'Ano 5', consorcio: 1.6, financiamento: 11.5 },
    { ano: 'Ano 10', consorcio: 1.6, financiamento: 11.5 },
  ]

  return (
    <section id="slide4" className="min-h-screen flex items-center py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              A Matemática da Taxa de Administração
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Custo Efetivo Total (CET): A verdade por trás dos números
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
              <h3 className="text-2xl font-bold text-white tracking-tight mb-6">Fórmula do CET</h3>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="text-center mb-4">
                  <div className="text-lg font-semibold text-gray-300 mb-2">CET do Consórcio</div>
                  <div className="text-4xl font-mono font-bold text-primary-600 mb-4">
                    CET = Taxa Adm / Prazo
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Taxa de Administração:</span>
                      <span className="font-bold text-white tracking-tight">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Prazo:</span>
                      <span className="font-bold text-white tracking-tight">120 meses</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Prazo em Anos:</span>
                      <span className="font-bold text-white tracking-tight">10 anos</span>
                    </div>
                    <div className="border-t-2 border-primary-200 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-white tracking-tight">CET Anual:</span>
                        <span className="text-2xl font-bold text-green-600">2% a.a.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <span className="font-bold">Resultado:</span> O custo real do consórcio fica entre 
                  <span className="font-bold text-green-600"> 1,2% a 2% ao ano</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-base-800/80 rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8"
            >
              <h3 className="text-2xl font-bold text-white tracking-tight mb-6">Comparação de CET</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={yearlyComparison}>
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
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center"
            >
              <Percent className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-green-600 mb-2">1,6%</div>
              <div className="text-gray-400">CET Consórcio (a.a.)</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center"
            >
              <Percent className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-red-600 mb-2">11,5%</div>
              <div className="text-gray-400">CET Financiamento (a.a.)</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl shadow-2xl p-6 text-center text-white"
            >
              <div className="text-4xl font-bold mb-2">7x</div>
              <div className="text-primary-100">Mais barato que financiamento</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 bg-primary-50 border-l-4 border-primary-500 rounded-lg p-6"
          >
            <p className="text-lg text-gray-200">
              <span className="font-bold text-primary-600">Importante:</span> Enquanto o financiamento 
              raramente baixa de <span className="font-bold">10% ao ano</span>, o consórcio oferece 
              um custo real de apenas <span className="font-bold">1,2% a 2% ao ano</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide4
