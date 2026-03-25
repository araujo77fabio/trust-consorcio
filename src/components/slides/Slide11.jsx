import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Award, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react'

const Slide11 = () => {
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

  const advantages = [
    {
      title: 'Solidez Financeira',
      description: 'Mais de 3 décadas de atuação no mercado brasileiro',
      icon: Building2
    },
    {
      title: 'Credibilidade',
      description: 'Milhões em créditos concedidos com segurança e transparência',
      icon: Award
    },
    {
      title: 'Segurança Regulatória',
      description: 'Fiscalização rigorosa do Banco Central do Brasil',
      icon: Shield
    }
  ]

  return (
    <section id="slide11" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Building2 className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Solidez em Números
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Novacapu: Tradição, Segurança e Confiança
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-base-800/80 rounded-xl shadow-2xl p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  stat.color === 'blue' ? 'bg-blue-100' :
                  stat.color === 'green' ? 'bg-green-100' :
                  stat.color === 'purple' ? 'bg-purple-100' :
                  'bg-red-100'
                }`}>
                  <stat.icon className={`w-8 h-8 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'purple' ? 'text-purple-600' :
                    'text-red-600'
                  }`} />
                </div>
                <div className="text-3xl font-bold text-white tracking-tight mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="bg-base-800/80 rounded-xl shadow-2xl p-6"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-white tracking-tight mb-2">{advantage.title}</h4>
                    <p className="text-gray-400">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-base-800/80 rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight mb-6 text-center">
              <Shield className="w-8 h-8 inline-block mr-2 text-green-600" />
              Segurança e Fiscalização
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (index * 0.05) }}
                  className="flex items-start bg-gray-50 rounded-lg p-4"
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
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">Dashboard de Confiança</h3>
                <p className="text-xl text-primary-50 mb-6">
                  A Novacapu é uma das administradoras de consórcio mais tradicionais do Brasil, 
                  com décadas de experiência e milhões em créditos concedidos.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                    <span className="text-primary-50">Fiscalização do Banco Central</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                    <span className="text-primary-50">Transparência Total</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                    <span className="text-primary-50">Proteção ao Consumidor</span>
                  </div>
                </div>
              </div>

              <div className="bg-base-800/80/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-center mb-6">
                  <Building2 className="w-16 h-16 text-white mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">Novacapu</div>
                  <div className="text-primary-100">Administradora de Consórcios</div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-base-800/80/10 rounded-lg p-3">
                    <div className="text-sm text-primary-100">Fundação</div>
                    <div className="text-xl font-bold text-white">1989</div>
                  </div>
                  <div className="bg-base-800/80/10 rounded-lg p-3">
                    <div className="text-sm text-primary-100">Sede</div>
                    <div className="text-xl font-bold text-white">São Paulo, SP</div>
                  </div>
                  <div className="bg-base-800/80/10 rounded-lg p-3">
                    <div className="text-sm text-primary-100">Regulação</div>
                    <div className="text-xl font-bold text-white">Banco Central</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide11
