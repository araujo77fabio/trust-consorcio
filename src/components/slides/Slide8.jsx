import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Hammer, TrendingDown, CheckCircle } from 'lucide-react'

const Slide8 = () => {
  const discountData = [
    { cenario: 'Desconto Mínimo', percentual: 5, economia: 25000 },
    { cenario: 'Desconto Médio', percentual: 10, economia: 50000 },
    { cenario: 'Desconto Máximo', percentual: 15, economia: 75000 },
  ]

  const comparisonScenarios = [
    {
      title: 'Sem Consórcio',
      valorBem: 500000,
      desconto: 0,
      valorFinal: 500000,
      taxaAdmin: 0,
      custoReal: 500000
    },
    {
      title: 'Com Consórcio + Desconto 10%',
      valorBem: 500000,
      desconto: 50000,
      valorFinal: 450000,
      taxaAdmin: 100000,
      custoReal: 550000
    }
  ]

  return (
    <section id="slide8" className="min-h-screen flex items-center py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Hammer className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              O Poder da Compra à Vista
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              O "Martelo da Negociação" - Descontos que pagam a taxa de administração
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
              <h3 className="text-2xl font-bold text-white tracking-tight mb-6">
                Poder de Desconto à Vista
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={discountData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="cenario" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    formatter={(value, name) => {
                      if (name === 'percentual') return `${value}%`
                      return `R$ ${value.toLocaleString('pt-BR')}`
                    }}
                  />
                  <Bar dataKey="economia" fill="#10b981" name="Economia (R$)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>

              <div className="mt-6 space-y-3">
                {discountData.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-300">{item.cenario}</span>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{item.percentual}%</div>
                        <div className="text-sm text-gray-500">R$ {item.economia.toLocaleString('pt-BR')}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-base-800/80 rounded-xl shadow-2xl p-6">
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                  <Hammer className="w-6 h-6 inline-block mr-2 text-primary-600" />
                  O Martelo da Negociação
                </h3>
                <p className="text-gray-300 mb-4">
                  Com a carta contemplada em mãos, você tem <span className="font-bold">dinheiro à vista</span>. 
                  Isso lhe dá um poder de negociação incomparável no mercado.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Vendedores preferem pagamento à vista</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Descontos de 5% a 15% são comuns</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Você escolhe o melhor negócio do mercado</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Sem pressa, sem pressão de vendedores</span>
                  </div>
                </div>
              </div>

              <div className="bg-base-800/80 rounded-xl shadow-2xl p-6">
                <h4 className="text-lg font-bold text-white tracking-tight mb-4">Exemplo Prático</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Valor de Tabela</div>
                    <div className="text-2xl font-bold text-white tracking-tight">R$ 500.000</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Com Desconto de 10%</div>
                    <div className="text-2xl font-bold text-green-600">R$ 450.000</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Economia</div>
                    <div className="text-2xl font-bold text-primary-600">R$ 50.000</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-center text-white">
              <TrendingDown className="w-16 h-16 mx-auto mb-4 text-primary-200" />
              <h3 className="text-3xl font-bold mb-4">Custo Real ZERO</h3>
              <p className="text-xl text-primary-50 max-w-4xl mx-auto">
                O desconto obtido na compra <span className="font-bold">muitas vezes paga toda a taxa de administração</span> do consórcio, 
                tornando o custo real <span className="font-bold">ZERO ou até NEGATIVO</span>. Você economiza e ainda multiplica seu patrimônio!
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
              <div className="text-4xl font-bold text-white tracking-tight mb-2">5-15%</div>
              <div className="text-gray-400">Desconto Médio</div>
            </div>
            <div className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">R$ 50k</div>
              <div className="text-gray-400">Economia Típica</div>
            </div>
            <div className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-400">Taxa Compensada</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide8
