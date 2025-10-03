import { CheckCircle, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Preços - Ementai | Planos para Cardápios Digitais",
  description:
    "Conheça nossos planos acessíveis para cardápios digitais. Comece grátis e escolha o melhor plano para seu restaurante.",
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planos que Cabem no Seu
            <span className="text-teal-600"> Orçamento</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comece grátis e cresça conosco. Sem contratos longos, sem taxas
            ocultas.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Gratuito
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">R$ 0</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-gray-600">Perfeito para começar</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">1 cardápio digital</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">QR code básico</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Até 20 itens no cardápio
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Suporte por email</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Templates básicos</span>
                </li>
                <li className="flex items-center opacity-50">
                  <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-500">Personalização de cores</span>
                </li>
                <li className="flex items-center opacity-50">
                  <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-500">Logo personalizada</span>
                </li>
                <li className="flex items-center opacity-50">
                  <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-500">Analytics</span>
                </li>
              </ul>

              <button className="w-full border border-teal-600 text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold">
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

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Profissional
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    R$ 29
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-gray-600">
                  Para restaurantes em crescimento
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Cardápios ilimitados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">QR codes personalizados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Itens ilimitados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Personalização completa</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Logo personalizada</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Analytics básico</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Suporte prioritário</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Fotos dos pratos</span>
                </li>
              </ul>

              <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold">
                Escolher Profissional
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Empresarial
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    R$ 79
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-gray-600">Para redes e grandes operações</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Múltiplos restaurantes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Analytics avançado</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">API personalizada</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Domínio próprio</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Suporte dedicado</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Treinamento incluído</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Integração com POS</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">White label disponível</span>
                </li>
              </ul>

              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                Falar com Vendas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Compare Todos os Recursos
          </h2>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Recursos
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Gratuito
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Profissional
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Empresarial
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Cardápios digitais
                    </td>
                    <td className="px-6 py-4 text-center">1</td>
                    <td className="px-6 py-4 text-center">Ilimitados</td>
                    <td className="px-6 py-4 text-center">Ilimitados</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Itens no cardápio
                    </td>
                    <td className="px-6 py-4 text-center">20</td>
                    <td className="px-6 py-4 text-center">Ilimitados</td>
                    <td className="px-6 py-4 text-center">Ilimitados</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      QR codes personalizados
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Personalização de cores e fontes
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Upload de logo
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Analytics e relatórios
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">Básico</td>
                    <td className="px-6 py-4 text-center">Avançado</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Suporte</td>
                    <td className="px-6 py-4 text-center">Email</td>
                    <td className="px-6 py-4 text-center">Prioritário</td>
                    <td className="px-6 py-4 text-center">Dedicado</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Domínio personalizado
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Perguntas Sobre Preços
          </h2>

          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso mudar de plano a qualquer momento?
              </h3>
              <p className="text-gray-700">
                Sim! Você pode fazer upgrade ou downgrade do seu plano a
                qualquer momento. As mudanças entram em vigor imediatamente e
                você paga apenas a diferença proporcional.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Existe desconto para pagamento anual?
              </h3>
              <p className="text-gray-700">
                Sim! Oferecemos 20% de desconto para pagamentos anuais em todos
                os planos pagos. O desconto é aplicado automaticamente no
                checkout.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Há período de teste gratuito nos planos pagos?
              </h3>
              <p className="text-gray-700">
                Sim! Oferecemos 14 dias de teste gratuito nos planos
                Profissional e Empresarial. Você pode cancelar a qualquer
                momento durante o período de teste sem cobrança.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quais formas de pagamento vocês aceitam?
              </h3>
              <p className="text-gray-700">
                Aceitamos cartões de crédito (Visa, Mastercard, American
                Express), PIX e boleto bancário. Todos os pagamentos são
                processados de forma segura através da Stripe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Comece grátis hoje mesmo e veja como é fácil criar cardápios
            digitais profissionais.
          </p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Experimente Grátis por 14 Dias
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
