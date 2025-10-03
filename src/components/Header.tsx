"use client";

import { useState } from "react";
import Link from "next/link";
import { QrCode, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-teal-600" />
              <span className="text-2xl font-bold text-gray-900">Ementai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
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
              href="/contato"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Contato
            </Link>
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
                href="/contato"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                Contato
              </Link>
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
  );
}
