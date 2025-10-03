"use client";

import { useState } from "react";
import {
  QrCode,
  Smartphone,
  Palette,
  BarChart3,
  Clock,
  Users,
  Shield,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <QrCode className="h-8 w-8 text-teal-600" />
                <span className="text-2xl font-bold text-gray-900">
                  Ementai
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Recursos
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Como Funciona
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Preços
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Contato
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-teal-600 transition-colors">
                Entrar
              </button>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Experimente Grátis
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a
                  href="#features"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Recursos
                </a>
                <a
                  href="#how-it-works"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Como Funciona
                </a>
                <a
                  href="#pricing"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Preços
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Contato
                </a>
                <div className="px-3 py-2 space-y-2">
                  <button className="block w-full text-left text-gray-700 hover:text-teal-600">
                    Entrar
                  </button>
                  <button className="block w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                    Experimente Grátis
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme seu cardápio em uma
              <span className="text-teal-600"> experiência digital</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Crie cardápios digitais profissionais, gere QR codes e ofereça
              atendimento sem contato aos seus clientes. Simples, rápido e
              profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center">
                Criar Meu Cardápio Digital
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors">
                Ver Demo
              </button>
            </div>

            {/* Hero Image/QR Code Visual */}
            <div className="mt-16 relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Cardápio Digital
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b">
                          <span className="font-semibold">
                            Pratos Principais
                          </span>
                          <QrCode className="h-6 w-6 text-teal-600" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium">Salmão Grelhado</p>
                              <p className="text-sm text-gray-600">
                                Com legumes salteados
                              </p>
                            </div>
                            <span className="font-bold text-teal-600">
                              R$ 45,90
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium">Risotto de Camarão</p>
                              <p className="text-sm text-gray-600">
                                Cremoso e saboroso
                              </p>
                            </div>
                            <span className="font-bold text-teal-600">
                              R$ 42,90
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-900 p-8 rounded-2xl inline-block">
                      <div className="bg-white p-4 rounded-lg">
                        <QrCode className="h-32 w-32 text-gray-900" />
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">
                      Escaneie o QR Code
                      <br />
                      para ver o cardápio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por que seu restaurante precisa de um cardápio digital?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">
                Problemas com cardápios tradicionais:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <X className="h-6 w-6 text-red-500 mt-1" />
                  <p className="text-gray-700">
                    Custos altos de impressão e reimpressão
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="h-6 w-6 text-red-500 mt-1" />
                  <p className="text-gray-700">
                    Dificuldade para atualizar preços e pratos
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="h-6 w-6 text-red-500 mt-1" />
                  <p className="text-gray-700">
                    Preocupações com higiene e contato
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="h-6 w-6 text-red-500 mt-1" />
                  <p className="text-gray-700">
                    Aparência amadora e desatualizada
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="h-6 w-6 text-red-500 mt-1" />
                  <p className="text-gray-700">
                    Perda e deterioração constante
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-teal-600 mb-6">
                Solução Ementai:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 mt-1" />
                  <p className="text-gray-700">
                    Atualizações instantâneas e gratuitas
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 mt-1" />
                  <p className="text-gray-700">Atendimento 100% sem contato</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 mt-1" />
                  <p className="text-gray-700">
                    Design profissional e personalizável
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 mt-1" />
                  <p className="text-gray-700">
                    Economia de custos significativa
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 mt-1" />
                  <p className="text-gray-700">
                    Acesso em qualquer dispositivo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recursos que farão a diferença no seu negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todas as ferramentas que você precisa para criar cardápios
              digitais profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <QrCode className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                QR Code Instantâneo
              </h3>
              <p className="text-gray-600">
                Gere QR codes personalizados para acesso direto ao seu cardápio.
                Seus clientes escaneiam e visualizam o menu na hora.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Palette className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Personalização Completa
              </h3>
              <p className="text-gray-600">
                Customize cores, logos, fontes e layout. Mantenha a identidade
                visual do seu restaurante em cada detalhe.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Smartphone className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Design Responsivo
              </h3>
              <p className="text-gray-600">
                Perfeito em qualquer dispositivo: smartphone, tablet ou desktop.
                Seus clientes terão a melhor experiência sempre.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Clock className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Atualizações Instantâneas
              </h3>
              <p className="text-gray-600">
                Mude preços, adicione pratos ou remova itens em tempo real. Sem
                custos de reimpressão, sem demora.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <BarChart3 className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Analytics Avançado
              </h3>
              <p className="text-gray-600">
                Veja quais pratos são mais visualizados, horários de pico e
                comportamento dos clientes no seu cardápio.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                100% Seguro
              </h3>
              <p className="text-gray-600">
                Dados protegidos, backup automático e disponibilidade garantida.
                Seu cardápio sempre online e seguro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como funciona? É mais simples do que você imagina
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Em apenas 3 passos, você terá seu cardápio digital funcionando
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cadastre-se Grátis
              </h3>
              <p className="text-gray-600">
                Crie sua conta em menos de 2 minutos. Sem cartão de crédito, sem
                compromisso.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Monte Seu Cardápio
              </h3>
              <p className="text-gray-600">
                Adicione pratos, preços, descrições e fotos. Personalize cores e
                adicione sua logo.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Gere o QR Code
              </h3>
              <p className="text-gray-600">
                Baixe seu QR code personalizado e coloque nas mesas. Pronto!
                Seus clientes já podem acessar.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors">
              Começar Agora - É Grátis
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefícios que você verá imediatamente
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Economia Instantânea
              </h3>
              <p className="text-gray-600">
                Pare de gastar com impressão. Economize centenas de reais por
                mês.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Melhor Experiência
              </h3>
              <p className="text-gray-600">
                Clientes satisfeitos com atendimento moderno e sem contato.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Tempo Economizado
              </h3>
              <p className="text-gray-600">
                Atualize cardápios em segundos, não em dias ou semanas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <BarChart3 className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Aumento de Vendas
              </h3>
              <p className="text-gray-600">
                Destaque pratos especiais e aumente o ticket médio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Planos que cabem no seu bolso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comece grátis e escolha o plano ideal para o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Gratuito
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ 0</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">1 cardápio digital</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">QR code básico</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Até 20 itens</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Marca Ementai</span>
                </li>
              </ul>
              <button className="w-full border border-teal-600 text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors">
                Começar Grátis
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-teal-600 rounded-2xl p-8 relative hover:shadow-lg transition-shadow bg-teal-50">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Mais Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Profissional
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ 29</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Cardápios ilimitados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">QR codes personalizados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Itens ilimitados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Personalização completa</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Analytics básico</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Suporte prioritário</span>
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors">
                Escolher Profissional
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Empresarial
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ 79</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Múltiplos restaurantes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Analytics avançado</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">API personalizada</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Domínio próprio</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Suporte dedicado</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Treinamento incluído</span>
                </li>
              </ul>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Falar com Vendas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &ldquo;Revolucionou nosso restaurante! Os clientes adoram a
                praticidade e nós economizamos muito com impressão.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 font-bold">MC</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria Clara</p>
                  <p className="text-sm text-gray-600">
                    Dona do Bistrô da Clara
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &ldquo;Implementamos em uma semana e já vemos os resultados.
                Atendimento mais rápido e clientes mais satisfeitos.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 font-bold">RS</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Roberto Silva</p>
                  <p className="text-sm text-gray-600">
                    Gerente do Restaurante Sabor
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &ldquo;A melhor decisão que tomamos! Cardápio sempre atualizado
                e nossa marca ficou muito mais profissional.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 font-bold">AF</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ana Fernandes</p>
                  <p className="text-sm text-gray-600">
                    Proprietária da Pizzaria Italiana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Como meus clientes acessam o cardápio?
              </h3>
              <p className="text-gray-700">
                Simples! Eles escaneiam o QR code que você coloca nas mesas com
                a câmera do celular. O cardápio abre instantaneamente no
                navegador, sem precisar baixar nenhum app.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso personalizar o visual do meu cardápio?
              </h3>
              <p className="text-gray-700">
                Absolutamente! Você pode adicionar sua logo, escolher cores,
                fontes e layout. O cardápio ficará com a cara do seu
                restaurante.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                E se eu quiser mudar um preço?
              </h3>
              <p className="text-gray-700">
                Você altera na plataforma e a mudança aparece instantaneamente
                para todos os clientes. Sem custo adicional, sem demora.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Funciona em qualquer celular?
              </h3>
              <p className="text-gray-700">
                Sim! Nossos cardápios são otimizados para funcionar
                perfeitamente em qualquer smartphone, tablet ou computador.
                iPhone, Android, não importa.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Preciso de conhecimento técnico?
              </h3>
              <p className="text-gray-700">
                Nada! Nossa plataforma é super simples de usar. Se você sabe
                usar WhatsApp, consegue criar seu cardápio digital em minutos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para modernizar seu restaurante?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Junte-se a centenas de restaurantes que já transformaram seu
            atendimento com cardápios digitais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Experimente Grátis por 30 Dias
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              Falar com um Especialista
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tem dúvidas? Nossa equipe está pronta para ajudar você a
              transformar seu restaurante.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefone</p>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contato@ementai.com.br</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Endereço</p>
                    <p className="text-gray-600">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nome do Restaurante
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="Ex: Pizzaria do João"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="Como podemos ajudar você?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <QrCode className="h-8 w-8 text-teal-400" />
                <span className="text-2xl font-bold">Ementai</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando restaurantes com cardápios digitais modernos e
                práticos.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Recursos
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Ementai. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
