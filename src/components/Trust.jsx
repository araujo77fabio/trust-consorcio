import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Award, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react'

const Trust = () => {
  const stats = [
    { icon: Building2, value: '+35', label: 'Anos de Mercado', color: 'blue' },
    { icon: Users, value: '+500k', label: 'Clientes Atendidos', color: 'green' },
    { icon: TrendingUp, value: 'R$ 10Bi+', label: 'Em Créditos Concedidos', color: 'purple' },
    { icon: Shield, value: '100%', label: 'Fiscalizado pelo Bacen', color: 'red' },
  ]

  const certifications = [
    'Regulamentado pelo Banco Central do Brasil',
    'Membro da ABAC (Associação Brasileira de Administradoras de Consórcios)',
    'Auditoria independente anual',
    'Transparência total nas operações',
    'Garantia de fundo comum',
    'Proteção ao consumidor'
  ]

  return (
    <section id="trust" className="py-20 bg-base-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full mb-4">
            <Building2 className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solidez em Números
          </h2>
          <p className="text-xl text-gray-400">
            Novacapu: Tradição, Segurança e Confiança
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl shadow-2xl p-6 text-center hover:shadow-2xl transition-shadow"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                stat.color === 'blue' ? 'bg-blue-900/30' :
                stat.color === 'green' ? 'bg-green-900/30' :
                stat.color === 'purple' ? 'bg-purple-900/30' :
                'bg-red-900/30'
              }`}>
                <stat.icon className={`w-8 h-8 ${
                  stat.color === 'blue' ? 'text-blue-500' :
                  stat.color === 'green' ? 'text-green-500' :
                  stat.color === 'purple' ? 'text-purple-500' :
                  'text-red-500'
                }`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            <Shield className="w-8 h-8 inline-block mr-2 text-green-500" />
            Segurança e Fiscalização
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start bg-base-900 relative rounded-lg p-4"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">Dashboard de Confiança</h3>
              <p className="text-xl text-blue-50 mb-6">
                A Novacapu é uma das administradoras de consórcio mais tradicionais do Brasil,
                com décadas de experiência e milhões em créditos concedidos.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                  <span className="text-blue-50">Fiscalização do Banco Central</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                  <span className="text-blue-50">Transparência Total</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                  <span className="text-blue-50">Proteção ao Consumidor</span>
                </div>
              </div>
            </div>

            <div className="bg-base-800/50 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-center mb-6">
                <Building2 className="w-16 h-16 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">Novacapu</div>
                <div className="text-blue-100">Administradora de Consórcios</div>
              </div>

              <div className="space-y-3">
                <div className="bg-base-800/50 rounded-lg p-3">
                  <div className="text-sm text-blue-100">Fundação</div>
                  <div className="text-xl font-bold text-white">1989</div>
                </div>
                <div className="bg-base-800/50 rounded-lg p-3">
                  <div className="text-sm text-blue-100">Sede</div>
                  <div className="text-xl font-bold text-white">São Paulo, SP</div>
                </div>
                <div className="bg-base-800/50 rounded-lg p-3">
                  <div className="text-sm text-blue-100">Regulação</div>
                  <div className="text-xl font-bold text-white">Banco Central</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Trust
