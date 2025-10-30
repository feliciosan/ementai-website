import {
  QrCode,
  Smartphone,
  Palette,
  BarChart3,
  Clock,
  Shield,
  Camera,
  Layers,
  Share2,
  Star,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroInfo from "@/components/HeroInfo";
import { APP_URL } from "@/utils/links";

export const metadata = {
  title: "Recursos - Ementai | Funcionalidades do Sistema de Menus Online",
  description:
    "Descubra todos os recursos da Ementai para criar menus online profissionais. QR codes, personalização, analytics e muito mais.",
};

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <HeroInfo
          titleStart="Recursos completos para"
          titleEndColored="menus online"
          description="Descubra todas as funcionalidades que fazem da Ementai a melhor escolha para digitalizar seu restaurante."
        />
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            Recursos Principais
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <QrCode className="h-16 w-16 text-teal-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                QR Code Inteligente
              </h3>
              <p className="text-gray-600 mb-6">
                Gere QR codes personalizados que direcionam seus clientes
                diretamente para o menu. Com design elegante e opções de
                customização para combinar com sua marca.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  QR codes com logo personalizada
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Múltiplos formatos de download
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  URLs curtas e memoráveis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Tracking de escaneamentos
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-center">
                  <QrCode className="h-32 w-32 text-gray-900 mx-auto mb-4" />
                  <p className="text-sm text-gray-600">
                    Exemplo de QR Code personalizado
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1 bg-gray-50 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Palette className="h-6 w-6 text-teal-600" />
                    <span className="font-semibold">Cores da Marca</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-teal-600 rounded"></div>
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    <div className="w-8 h-8 bg-green-600 rounded"></div>
                    <div className="w-8 h-8 bg-purple-600 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Camera className="h-6 w-6 text-teal-600" />
                    <span className="font-semibold">Logo Personalizada</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Upload de logo e cores da marca
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Palette className="h-16 w-16 text-teal-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Personalização Total
              </h3>
              <p className="text-gray-600 mb-6">
                Customize cada detalhe do seu menu para refletir a identidade
                visual da sua marca. Cores, layout e muito mais.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Paleta de cores personalizada
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Upload de logo e imagens
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Informações do seu negócio
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <BarChart3 className="h-16 w-16 text-teal-600" />
                <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Em breve
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Analytics Avançado
              </h3>
              <p className="text-gray-600 mb-6">
                Entenda como seus clientes interagem com seu menu. Veja quais
                pratos são mais visualizados e tome decisões baseadas em dados.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Visualizações por prato
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Horários de pico
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Origem dos acessos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Relatórios detalhados
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Visualizações Hoje
                    </span>
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">1,247</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Pratos Principais</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-teal-600 h-2 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            Funcionalidades Adicionais
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Smartphone className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Design Responsivo
              </h3>
              <p className="text-gray-600">
                Perfeito em qualquer dispositivo: smartphone, tablet ou desktop.
                Seus clientes terão a melhor experiência sempre.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Clock className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Atualizações Instantâneas
              </h3>
              <p className="text-gray-600">
                Mude preços, adicione pratos ou remova itens em tempo real. Sem
                custos de reimpressão, sem demora.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Camera className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Galeria de Fotos
              </h3>
              <p className="text-gray-600">
                Adicione fotos profissionais dos seus pratos para tornar o menu
                mais atrativo e aumentar as vendas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Layers className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Categorias Organizadas
              </h3>
              <p className="text-gray-600">
                Organize seu menu em categorias lógicas: entradas, pratos
                principais, bebidas, sobremesas e muito mais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Share2 className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Compartilhamento Fácil
              </h3>
              <p className="text-gray-600">
                Links diretos para redes sociais, WhatsApp e outras plataformas.
                Divulgue seu menu onde quiser.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Shield className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Segurança Total
              </h3>
              <p className="text-gray-600">
                Dados protegidos com criptografia, backup automático e
                disponibilidade garantida 99.9% do tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Integrações Poderosas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conecte a Ementai com as ferramentas que você já usa no seu
              restaurante.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sistemas POS
              </h3>
              <p className="text-gray-600 mb-4">
                Sincronize automaticamente com sistemas de ponto de venda
                populares.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Toast POS</li>
                <li>• Square</li>
                <li>• Clover</li>
                <li>• E mais</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Redes Sociais
              </h3>
              <p className="text-gray-600 mb-4">
                Compartilhe automaticamente em suas redes sociais.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Instagram</li>
                <li>• Facebook</li>
                <li>• WhatsApp Business</li>
                <li>• Google Meu Negócio</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Analytics
              </h3>
              <p className="text-gray-600 mb-4">
                Conecte com suas ferramentas de análise favoritas.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Google Analytics</li>
                <li>• Facebook Pixel</li>
                <li>• Hotjar</li>
                <li>• APIs customizadas</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Star className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experimente Todos os Recursos Gratuitamente
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Comece hoje mesmo e descubra como nossos recursos podem transformar
            seu restaurante.
          </p>
          <a
            href={`${APP_URL}/admin/signup`}
            target="_blank"
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Começar Teste Gratuito
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
