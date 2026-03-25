import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Target, CheckCircle2 } from 'lucide-react'

const Slide9 = () => {
  const timeline = [
    { mes: 0, evento: 'Adesão', tipo: 'inicio', descricao: 'Início do consórcio' },
    { mes: 3, evento: 'Sorteio 1', tipo: 'sorteio', descricao: 'Primeira chance de contemplação' },
    { mes: 6, evento: 'Sorteio 2', tipo: 'sorteio', descricao: 'Segunda chance' },
    { mes: 12, evento: 'Lance Programado', tipo: 'lance', descricao: 'Contemplação por lance' },
    { mes: 18, evento: 'Prazo Garantido', tipo: 'garantia', descricao: 'Contemplação garantida (Rodobens)' },
    { mes: 24, evento: 'Sorteio Final', tipo: 'sorteio', descricao: 'Última oportunidade de sorteio' },
  ]

  const planosPontuais = [
    {
      nome: 'Plano Rápido',
      prazo: '12-18 meses',
      contemplacao: 'Garantida',
      ideal: 'Quem tem urgência moderada',
      color: 'green'
    },
    {
      nome: 'Plano Equilibrado',
      prazo: '24-36 meses',
      contemplacao: 'Alta probabilidade',
      ideal: 'Planejamento médio prazo',
      color: 'blue'
    },
    {
      nome: 'Plano Econômico',
      prazo: '48-60 meses',
      contemplacao: 'Sorteio + Lance',
      ideal: 'Máxima economia',
      color: 'purple'
    }
  ]

  return (
    <section id="slide9" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Plano Pontual e Previsibilidade
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Gatilhos de entrega garantidos - Elimine a incerteza
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-base-800/80 rounded-2xl shadow-[0_0_30px_rgba(217,119,6,0.1)] p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight mb-8 text-center">
              Linha do Tempo de Contemplação
            </h3>
            
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                      <div className={`inline-block bg-base-800/80 rounded-xl shadow-2xl p-4 ${index % 2 === 0 ? '' : 'md:ml-0'}`}>
                        <div className="text-sm text-gray-500 mb-1">Mês {item.mes}</div>
                        <div className="text-lg font-bold text-white tracking-tight mb-1">{item.evento}</div>
                        <div className="text-sm text-gray-400">{item.descricao}</div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.tipo === 'inicio' ? 'bg-gray-500' :
                        item.tipo === 'sorteio' ? 'bg-blue-500' :
                        item.tipo === 'lance' ? 'bg-accent-500' :
                        'bg-green-500'
                      }`}>
                        {item.tipo === 'garantia' ? (
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        ) : item.tipo === 'lance' ? (
                          <Target className="w-6 h-6 text-white" />
                        ) : (
                          <Clock className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {planosPontuais.map((plano, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="bg-base-800/80 rounded-xl shadow-2xl p-6 hover:shadow-2xl transition-shadow"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  plano.color === 'green' ? 'bg-green-100' :
                  plano.color === 'blue' ? 'bg-blue-100' :
                  'bg-purple-100'
                }`}>
                  <Calendar className={`w-6 h-6 ${
                    plano.color === 'green' ? 'text-green-600' :
                    plano.color === 'blue' ? 'text-blue-600' :
                    'text-purple-600'
                  }`} />
                </div>
                
                <h4 className="text-xl font-bold text-white tracking-tight mb-3">{plano.nome}</h4>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-500">Prazo</div>
                    <div className="text-lg font-semibold text-white tracking-tight">{plano.prazo}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500">Contemplação</div>
                    <div className={`text-lg font-semibold ${
                      plano.color === 'green' ? 'text-green-600' :
                      plano.color === 'blue' ? 'text-blue-600' :
                      'text-purple-600'
                    }`}>
                      {plano.contemplacao}
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-sm text-gray-400">{plano.ideal}</div>
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
            <CheckCircle2 className="w-16 h-16 text-green-200 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Diferencial Rodobens</h3>
            <p className="text-xl text-green-50 max-w-4xl mx-auto">
              Elimine a objeção da "incerteza" com <span className="font-bold">prazos definidos</span> para quem tem planejamento. 
              A Rodobens oferece <span className="font-bold">entrega garantida por prazo ou sorteio</span>, 
              dando total previsibilidade ao seu investimento!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6"
          >
            <p className="text-lg text-gray-200">
              <span className="font-bold text-blue-600">Importante:</span> Diferente do que muitos pensam, 
              o consórcio moderno oferece <span className="font-bold">previsibilidade e prazos garantidos</span>. 
              Você pode planejar sua aquisição com segurança e certeza!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide9
