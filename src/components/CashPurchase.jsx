import React from 'react'
import { motion } from 'framer-motion'
import { Hammer, CheckCircle } from 'lucide-react'

const CashPurchase = () => {
  return (
    <section id="cashpurchase" className="py-20 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full mb-4">
            <Hammer className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Poder da Compra à Vista
          </h2>
          <p className="text-xl text-gray-400">
            O "Martelo da Negociação" - Descontos que pagam a taxa de administração
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl shadow-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              <Hammer className="w-8 h-8 inline-block mr-2 text-blue-500" />
              O Martelo da Negociação
            </h3>
            <p className="text-gray-300 mb-6">
              Com a carta contemplada em mãos, você tem <span className="font-bold">dinheiro à vista</span>.
              Isso lhe dá um poder de negociação incomparável no mercado.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Vendedores preferem pagamento à vista</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Descontos de 5% a 15% são comuns</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Você escolhe o melhor negócio do mercado</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Sem pressa, sem pressão de vendedores</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl shadow-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Exemplo Prático</h3>

            <div className="space-y-4">
              <div className="bg-base-900 relative rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Valor de Tabela</div>
                <div className="text-3xl font-bold text-white">R$ 500.000</div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Com Desconto de 10%</div>
                <div className="text-3xl font-bold text-green-500">R$ 450.000</div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
                <div className="text-sm text-gray-400 mb-1">Economia Total</div>
                <div className="text-4xl font-bold text-blue-500">R$ 50.000</div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-4 text-white">
                <p className="text-sm mb-2">Taxa de Administração do Consórcio</p>
                <div className="text-2xl font-bold">R$ 100.000</div>
                <p className="text-xs text-blue-100 mt-2">
                  O desconto de 10% já paga metade da taxa!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl shadow-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-white mb-2">5-15%</div>
            <div className="text-gray-400">Desconto Médio</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-xl shadow-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-green-500 mb-2">R$ 50k</div>
            <div className="text-gray-400">Economia Típica</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl shadow-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-blue-500 mb-2">50%</div>
            <div className="text-gray-400">Taxa Compensada</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Custo Real ZERO</h3>
          <p className="text-xl text-blue-50 max-w-4xl mx-auto">
            O desconto obtido na compra <span className="font-bold">muitas vezes paga toda a taxa de administração</span> do consórcio,
            tornando o custo real <span className="font-bold">ZERO ou até NEGATIVO</span>. Você economiza e ainda multiplica seu patrimônio!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CashPurchase
