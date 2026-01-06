import { Menu, X } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { APP_URL } from "@/utils/links";

export default async function Header() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";
  const isHomePage = pathname === "/";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hidden checkbox for mobile menu toggle */}
        <input type="checkbox" id="mobile-menu-toggle" className="hidden" />

        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo-teal.svg"
                alt="Ementai Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-gray-900">Ementai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {isHomePage ? (
            <nav className="hidden lg:flex space-x-8">
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
          ) : (
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/recursos"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Recursos
              </Link>
              <Link
                href="/#how-it-works"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Como Funciona
              </Link>
              <Link
                href="/precos"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Preços
              </Link>
              <Link
                href="/sobre"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Contato
              </Link>
            </nav>
          )}

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`${APP_URL}/admin`}
              target="_blank"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Entrar
            </a>
            <a
              href={`${APP_URL}/admin/signup`}
              target="_blank"
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors inline-block"
            >
              Criar menu grátis
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden menu-wrapper">
            <label
              htmlFor="mobile-menu-toggle"
              className="text-gray-700 hover:text-teal-600 cursor-pointer block"
            >
              <Menu className="h-6 w-6 menu-icon" />
              <X className="h-6 w-6 close-icon" />
            </label>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden hidden mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {isHomePage ? (
              <Fragment>
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
              </Fragment>
            ) : (
              <Fragment>
                <Link
                  href="/recursos"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Recursos
                </Link>
                <Link
                  href="/#how-it-works"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Como Funciona
                </Link>
                <Link
                  href="/precos"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Preços
                </Link>
                <Link
                  href="/sobre"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Sobre
                </Link>
                <Link
                  href="/contato"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Contato
                </Link>
              </Fragment>
            )}
            <div className="px-3 py-2 space-y-2">
              <a
                href={`${APP_URL}/admin`}
                target="_blank"
                className="block w-full text-left text-gray-700 hover:text-teal-600"
              >
                Entrar
              </a>
              <a
                href={`${APP_URL}/admin/signup`}
                target="_blank"
                className="block w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
              >
                Criar menu grátis
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
