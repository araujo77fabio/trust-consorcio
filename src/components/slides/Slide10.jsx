import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Shield, TrendingUp, Lock } from 'lucide-react'

const Slide10 = () => {
  const inflationData = [
    { ano: '2020', valorImovel: 500000, credito: 500000, inflacao: 4.5 },
    { ano: '2021', valorImovel: 530000, credito: 530000, inflacao: 10.1 },
    { ano: '2022', valorImovel: 565000, credito: 565000, inflacao: 5.8 },
    { ano: '2023', valorImovel: 595000, credito: 595000, inflacao: 4.6 },
    { ano: '2024', valorImovel: 625000, credito: 625000, inflacao: 4.5 },
    { ano: '2025', valorImovel: 660000, credito: 660000, inflacao: 4.2 },
  ]

  const protectionFeatures = [
    {
      icon: Shield,
      title: 'Proteção contra Inflação',
      description: 'Seu crédito é reajustado por INCC/IPCA, preservando o poder de compra',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Valorização Automática',
      description: 'Se o imóvel encarece, seu crédito aumenta proporcionalmente',
      color: 'green'
    },
    {
      icon: Lock,
      title: 'Garantia de Aquisição',
      description: 'Você sempre conseguirá comprar o bem desejado, independente da inflação',
      color: 'purple'
    }
  ]

  const scenarios = [
    {
      title: 'Sem Proteção (Poupança)',
      inicial: 500000,
      final: 500000,
      perda: 160000,
      color: 'red'
    },
    {
      title: 'Com Consórcio (INCC)',
      inicial: 500000,
      final: 660000,
      ganho: 160000,
      color: 'green'
    }
  ]

  return (
    <section id="slide10" className="min-h-screen flex items-center py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Proteção Patrimonial e Reajuste
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              INCC/IPCA: Seu investimento protegido da inflação
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
                Evolução: Valor do Crédito vs Inflação
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={inflationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="ano" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    formatter={(value, name) => {
                      if (name === 'inflacao') return `${value}%`
                      return `R$ ${value.toLocaleString('pt-BR')}`
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="credito" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    name="Crédito Consórcio"
                    dot={{ fill: '#10b981', r: 5 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="valorImovel" 
                    stroke="#0ea5e9" 
                    strokeWidth={3}
                    name="Valor do Imóvel"
                    dot={{ fill: '#0ea5e9', r: 5 }}
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="mt-6 bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <span className="font-bold text-green-600">Proteção Total:</span> Seu crédito acompanha 
                  a valorização do imóvel, garantindo que você sempre terá poder de compra preservado.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {protectionFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-base-800/80 rounded-xl shadow-2xl p-6"
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      feature.color === 'blue' ? 'bg-blue-100' :
                      feature.color === 'green' ? 'bg-green-100' :
                      'bg-purple-100'
                    }`}>
                      <feature.icon className={`w-6 h-6 ${
                        feature.color === 'blue' ? 'text-blue-600' :
                        feature.color === 'green' ? 'text-green-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-white tracking-tight mb-2">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className={`bg-base-800/80 rounded-xl shadow-2xl p-6 border-l-4 ${
                  scenario.color === 'red' ? 'border-red-500' : 'border-green-500'
                }`}
              >
                <h4 className="text-xl font-bold text-white tracking-tight mb-4">{scenario.title}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-400">Valor Inicial (2020)</span>
                    <span className="font-semibold">R$ {scenario.inicial.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-400">Valor Final (2025)</span>
                    <span className="font-semibold">R$ {scenario.final.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className={`flex justify-between items-center pt-2 ${
                    scenario.color === 'red' ? 'bg-red-50' : 'bg-green-50'
                  } rounded-lg p-3`}>
                    <span className="font-bold text-white tracking-tight">
                      {scenario.perda ? 'Perda de Poder de Compra' : 'Ganho Patrimonial'}
                    </span>
                    <span className={`text-xl font-bold ${
                      scenario.color === 'red' ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {scenario.perda ? `-R$ ${scenario.perda.toLocaleString('pt-BR')}` : `+R$ ${scenario.ganho.toLocaleString('pt-BR')}`}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-center shadow-2xl"
          >
            <Shield className="w-16 h-16 text-green-200 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Conceito Fundamental</h3>
            <p className="text-xl text-green-50 max-w-4xl mx-auto">
              O consórcio <span className="font-bold">preserva o poder de compra</span>. Se o imóvel encarece, 
              seu crédito aumenta proporcionalmente, garantindo que o investimento 
              <span className="font-bold"> não perca valor real</span>. Você está sempre protegido contra a inflação!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center">
              <div className="text-4xl font-bold text-white tracking-tight mb-2">R$ 500k</div>
              <div className="text-gray-400">Crédito Inicial (2020)</div>
            </div>
            <div className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">R$ 660k</div>
              <div className="text-gray-400">Crédito Final (2025)</div>
            </div>
            <div className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">+32%</div>
              <div className="text-gray-400">Valorização</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide10
