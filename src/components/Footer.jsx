import React from 'react'
import { Building2 } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-base-900 text-white py-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo-primetrust.svg" alt="PrimeTrust" className="h-14 md:h-16 w-auto" />
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Ajudamos você a multiplicar capital, utilizar alavancagem de forma inteligente e garantir patrimônio protegido com tradição e segurança de mais de 35 anos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Navegação</h4>
            <ul className="space-y-3 font-light text-gray-400">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#comparison" className="hover:text-gold-400 transition-colors">Comparativo de Custos</a></li>
              <li><a href="#trust" className="hover:text-gold-400 transition-colors">Institucional Novacapu</a></li>
              <li><a href="#cta" className="hover:text-gold-400 transition-colors">Contato Integral</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Atendimento Superior</h4>
            <ul className="space-y-4 font-light text-gray-400">
              <li className="flex items-center space-x-3">
                <span className="text-gold-400 font-medium">T:</span>
                <span>(11) 3000-0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gold-400 font-medium">W:</span>
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gold-400 font-medium">E:</span>
                <span>contato@novacapu.com.br</span>
              </li>
              <li className="flex items-center space-x-3 pt-2">
                <span className="text-gold-400 font-medium">Endereço:</span>
                <span>São Paulo, SP - Capital</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 font-light text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Novacapu Consórcios. Projetado para alto valor patrimonial.</p>
          <p className="bg-white/5 px-4 py-1.5 rounded-full inline-flex items-center">
            <ShieldIcon className="w-3 h-3 mr-2 text-gold-500" />
            Regulamentada pelo Banco Central do Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}

const ShieldIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

export default Footer
