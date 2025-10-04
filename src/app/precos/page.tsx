import { CheckCircle, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroInfo from "@/components/HeroInfo";
import TablePriceSection from "@/components/TablePriceSection";

export const metadata = {
  title: "Preços - Ementai | Planos para Menus Online",
  description:
    "Conheça nossos planos acessíveis para menus online. Comece grátis e escolha o melhor plano para seu restaurante.",
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <HeroInfo
          titleStart="Um plano que cabe no seu"
          titleEndColored="orçamento"
          description="Comece grátis e cresça conosco. Sem contratos, sem taxas ocultas."
        />
      </section>

      {/* Pricing Cards */}
      <TablePriceSection />

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
                      Menu Pro
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Menu online 24hrs
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
                      Acesso via QR code
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
                      Categorias no menu
                    </td>
                    <td className="px-6 py-4 text-center">Até 3</td>
                    <td className="px-6 py-4 text-center">Ilimitadas</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Produtos por categoria
                    </td>
                    <td className="px-6 py-4 text-center">Até 10</td>
                    <td className="px-6 py-4 text-center">Ilimitados</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Personalização (Logo e Cores)
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
                      Personalização completa
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Fotos dos pratos
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Relatórios personalizados
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Suporte</td>
                    <td className="px-6 py-4 text-center">Email</td>
                    <td className="px-6 py-4 text-center">Prioritário</td>
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
                Há período de teste gratuito no plano Menu Pro?
              </h3>
              <p className="text-gray-700">
                Sim! Oferecemos 14 dias de teste gratuito no plano Menu Pro.
                Você pode cancelar a qualquer momento durante o período de teste
                sem cobrança.
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
            Comece grátis hoje mesmo e veja como é fácil criar menus digitais
            profissionais.
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
