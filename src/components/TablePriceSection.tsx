import { APP_URL } from "@/utils/links";
import { CheckCircle } from "lucide-react";

export default function TablePriceSection() {
  return (
    <section
      className="py-20 bg-white scroll-mt-16 lg:scroll-mt-18"
      id="pricing"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Planos e Preços
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta ao seu restaurante
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow flex flex-col justify-between">
            <div>
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
                  <span className="text-gray-700">Menu online 24hrs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Acesso via QR code</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Até 3 categorias no Menu
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Até 10 produtos por categoria
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Personalização (Logo e Cores)
                  </span>
                </li>
              </ul>
            </div>
            <a
              href={APP_URL}
              target="_blank"
              className="w-full border border-teal-600 text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold text-center"
            >
              Começar Grátis
            </a>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-teal-600 rounded-2xl p-8 relative hover:shadow-lg transition-shadow bg-teal-50 flex flex-col justify-between">
            <div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Recomendado
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Menu Pro
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    R$ 19,90
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
                  <span className="text-gray-700">Menu online 24hrs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Acesso via QR code</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Categorias ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Produtos ilimitados por categoria
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Personalização completa</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Suporte prioritário</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Relatórios personalizados
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Fotos dos pratos</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold">
              Escolher Menu Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
