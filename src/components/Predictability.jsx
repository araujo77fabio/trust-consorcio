import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Target, CheckCircle2 } from 'lucide-react'

const Predictability = () => {
  const plans = [
    {
      name: 'Plano Rápido',
      prazo: '12-18 meses',
      contemplacao: 'Garantida',
      ideal: 'Quem tem urgência moderada',
      color: 'green'
    },
    {
      name: 'Plano Equilibrado',
      prazo: '24-36 meses',
      contemplacao: 'Alta probabilidade',
      ideal: 'Planejamento médio prazo',
      color: 'blue'
    },
    {
      name: 'Plano Econômico',
      prazo: '48-60 meses',
      contemplacao: 'Sorteio + Lance',
      ideal: 'Máxima economia',
      color: 'purple'
    }
  ]

  return (
    <section id="predictability" className="py-20 bg-base-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full mb-4">
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plano Pontual e Previsibilidade
          </h2>
          <p className="text-xl text-gray-400">
            Gatilhos de entrega garantidos - Elimine a incerteza
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl shadow-2xl p-8 hover:shadow-2xl transition-shadow"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                plan.color === 'green' ? 'bg-green-900/30' :
                plan.color === 'blue' ? 'bg-blue-900/30' :
                'bg-purple-900/30'
              }`}>
                <Calendar className={`w-8 h-8 ${
                  plan.color === 'green' ? 'text-green-500' :
                  plan.color === 'blue' ? 'text-blue-500' :
                  'text-purple-500'
                }`} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Prazo</div>
                  <div className="text-xl font-semibold text-white">{plan.prazo}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Contemplação</div>
                  <div className={`text-xl font-semibold ${
                    plan.color === 'green' ? 'text-green-500' :
                    plan.color === 'blue' ? 'text-blue-500' :
                    'text-purple-500'
                  }`}>
                    {plan.contemplacao}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-400">{plan.ideal}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Linha do Tempo de Contemplação
          </h3>

          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-base-900 relative0 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="ml-6 flex-1">
                <div className="text-lg font-bold text-white">Mês 0 - Adesão</div>
                <div className="text-gray-400">Início do consórcio</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="ml-6 flex-1">
                <div className="text-lg font-bold text-white">Mês 3-6 - Sorteios</div>
                <div className="text-gray-400">Primeiras chances de contemplação</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="ml-6 flex-1">
                <div className="text-lg font-bold text-white">Mês 12 - Lance Programado</div>
                <div className="text-gray-400">Contemplação por lance</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div className="ml-6 flex-1">
                <div className="text-lg font-bold text-white">Mês 18 - Prazo Garantido</div>
                <div className="text-gray-400">Contemplação garantida (Rodobens)</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-center shadow-2xl"
        >
          <CheckCircle2 className="w-16 h-16 text-green-200 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-4">Diferencial Rodobens</h3>
          <p className="text-xl text-green-50 max-w-4xl mx-auto">
            Elimine a objeção da "incerteza" com <span className="font-bold">prazos definidos</span> para quem tem planejamento.
            A Rodobens oferece <span className="font-bold">entrega garantida por prazo ou sorteio</span>,
            dando total previsibilidade ao seu investimento!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Predictability
