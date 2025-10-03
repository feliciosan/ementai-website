import { QrCode } from "lucide-react";

export default function Footer() {
  return (
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
                  href="/recursos"
                  className="hover:text-white transition-colors"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="/precos"
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
                <a href="/sobre" className="hover:text-white transition-colors">
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
                  href="/contato"
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
                <a
                  href="/privacidade"
                  className="hover:text-white transition-colors"
                >
                  Privacidade
                </a>
              </li>
              <li>
                <a
                  href="/termos"
                  className="hover:text-white transition-colors"
                >
                  Termos
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
  );
}
