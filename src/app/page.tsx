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
  X,
} from "lucide-react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroInfo from "@/components/HeroInfo";
import TablePriceSection from "@/components/TablePriceSection";
import { APP_URL } from "@/utils/links";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <HeroInfo
              titleStart="Transforme seu menu em uma"
              titleEndColored="experiência digital"
              description="Crie menus online profissionais, gere QR codes e ofereça
              atendimento sem contato aos seus clientes. Simples, rápido e
              profissional."
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${APP_URL}/admin/signup`}
                target="_blank"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center"
              >
                Criar Meu Menu Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={`${APP_URL}/menu/restaurante-zuca`}
                target="_blank"
                className="border border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors"
              >
                Ver Demo
              </a>
            </div>

            {/* Hero Image/QR Code Visual */}
            <div className="mt-16 relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      Menu Online
                    </h3>
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                          <span className="font-bold text-gray-900">
                            Pratos Principais
                          </span>
                          <QrCode className="h-6 w-6 text-teal-600" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-semibold text-gray-900">
                                Salmão Grelhado
                              </p>
                              <p className="text-sm text-gray-700">
                                Com legumes salteados
                              </p>
                            </div>
                            <span className="font-bold text-teal-600">
                              R$ 45,90
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <div>
                              <p className="font-semibold text-gray-900">
                                Risotto de Camarão
                              </p>
                              <p className="text-sm text-gray-700">
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
                    <div className="bg-teal-600 p-3 rounded-2xl inline-block">
                      <div className="bg-white p-2 rounded-lg">
                        <QrCode className="h-40 w-40 text-gray-900" />
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Escaneie o QR Code
                      <br />
                      para ver o menu
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
              Por que seu restaurante precisa de um menu online?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6">
                Problemas com menus tradicionais:
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

            <div className="border border-gray-200 rounded-2xl p-8">
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
      <section
        id="features"
        className="py-20 bg-gray-50 scroll-mt-16 lg:scroll-mt-18"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recursos que farão a diferença no seu negócio
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Todas as ferramentas que você precisa para criar menus digitais
              profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <QrCode className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                QR Code Instantâneo
              </h3>
              <p className="text-gray-700">
                Gere QR codes personalizados para acesso direto ao seu menu.
                Seus clientes escaneiam e visualizam o menu na hora.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Palette className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Personalização Completa
              </h3>
              <p className="text-gray-700">
                Customize cores, logos, fontes e layout. Mantenha a identidade
                visual do seu restaurante em cada detalhe.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Smartphone className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Design Responsivo
              </h3>
              <p className="text-gray-700">
                Perfeito em qualquer dispositivo: smartphone, tablet ou desktop.
                Seus clientes terão a melhor experiência sempre.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Clock className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Atualizações Instantâneas
              </h3>
              <p className="text-gray-700">
                Mude preços, adicione pratos ou remova itens em tempo real. Sem
                custos de reimpressão, sem demora.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <BarChart3 className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Analytics Avançado
              </h3>
              <p className="text-gray-700">
                Veja quais pratos são mais visualizados, horários de pico e
                comportamento dos clientes no seu menu.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                100% Seguro
              </h3>
              <p className="text-gray-700">
                Dados protegidos, backup automático e disponibilidade garantida.
                Seu menu sempre online e seguro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="py-20 bg-white scroll-mt-16 lg:scroll-mt-18"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como funciona? É mais simples do que você imagina
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Em apenas 3 passos, você terá seu menu online funcionando
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
              <p className="text-gray-700">
                Crie sua conta em menos de 2 minutos. Sem cartão de crédito, sem
                compromisso.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Monte Seu Menu
              </h3>
              <p className="text-gray-700">
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
              <p className="text-gray-700">
                Baixe seu QR code personalizado e coloque nas mesas. Pronto!
                Seus clientes já podem acessar.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={`${APP_URL}/admin/signup`}
              target="_blank"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Começar Agora - É Grátis
            </a>
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
              <p className="text-gray-700">
                Pare de gastar com impressão. Economize centenas de reais por
                mês.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Melhor Experiência
              </h3>
              <p className="text-gray-700">
                Clientes satisfeitos com atendimento moderno e sem contato.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Tempo Economizado
              </h3>
              <p className="text-gray-700">
                Atualize menus em segundos, não em dias ou semanas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <BarChart3 className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Aumento de Vendas
              </h3>
              <p className="text-gray-700">
                Destaque pratos especiais e aumente o ticket médio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <TablePriceSection />

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
                  <p className="text-sm text-gray-700">
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
                  <p className="text-sm text-gray-700">
                    Gerente da Pizza Express
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
                &ldquo;A melhor decisão que tomamos! Menu sempre atualizado e
                nossa marca ficou muito mais profissional.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 font-bold">AF</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ana Fernandes</p>
                  <p className="text-sm text-gray-700">
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
                Como meus clientes acessam o menu?
              </h3>
              <p className="text-gray-700">
                Simples! Eles escaneiam o QR code que você coloca nas mesas com
                a câmera do celular. O menu abre instantaneamente no navegador,
                sem precisar baixar nenhum app.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso personalizar o visual do meu menu?
              </h3>
              <p className="text-gray-700">
                Absolutamente! Você pode adicionar sua logo, escolher cores e
                layout. O menu ficará com a cara do seu restaurante.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                E se eu quiser mudar um preço do menu?
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
                Sim! Nossos menus são otimizados para funcionar perfeitamente em
                qualquer smartphone, tablet ou computador. iPhone, Android, não
                importa.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Preciso de conhecimento técnico?
              </h3>
              <p className="text-gray-700">
                Nada! Nossa plataforma é super simples de usar. Se você sabe
                usar WhatsApp, consegue criar seu menu online em minutos.
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
            atendimento com menus online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={APP_URL}
              target="_blank"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Experimente Grátis
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-block text-center"
            >
              Falar com um Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
