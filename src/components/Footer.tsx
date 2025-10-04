import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo-white.svg"
                alt="Ementai Logo"
                width={40}
                height={40}
                // className="w-8 h-8"
              />
              <span className="text-2xl font-bold">Ementai</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando restaurantes com menus online modernos e práticos.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
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
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/sobre"
                    className="hover:text-white transition-colors"
                  >
                    Sobre
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
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
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
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Ementai. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
