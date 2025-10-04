import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, HelpCircle, MessageSquare, Zap } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { CONTACT_EMAIL } from "@/utils/contact-info";
import HeroInfo from "@/components/HeroInfo";

export const metadata = {
  title: "Contato - Ementai | Fale Conosco",
  description:
    "Entre em contato com a equipe Ementai. Estamos aqui para ajudar você a transformar seu restaurante com menus online.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <HeroInfo
          titleStart="Estamos aqui para"
          titleEndColored="ajudar você"
          description="Tem dúvidas sobre nossos menus online? Nossa equipe especializada
            está pronta para ajudar."
        />
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl flex flex-col justify-between">
              <div>
                <MessageSquare className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Chat Online
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Resposta imediata durante o horário comercial
                </p>
              </div>
              <button className="text-teal-600 hover:text-teal-700 font-semibold">
                Iniciar Chat
              </button>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl flex flex-col justify-between">
              <div>
                <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Central de Ajuda
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Encontre respostas para perguntas frequentes
                </p>
              </div>
              <a
                href="#contact"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Ver Artigos
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl flex flex-col justify-between">
              <div>
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Suporte Técnico
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Problemas técnicos ou bugs
                </p>
              </div>
              <a
                href="#contact"
                className="text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                Reportar Problema
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl flex flex-col justify-between">
              <div>
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Agendamento
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Agende uma demonstração personalizada
                </p>
              </div>
              <a
                href="#contact"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Agendar Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quanto tempo demora para implementar?
              </h3>
              <p className="text-gray-700">
                Você pode criar seu primeiro menu online em menos de 30 minutos!
                Nossa plataforma é projetada para ser simples e intuitiva.
              </p>
            </div>

            {/* <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Vocês oferecem treinamento?
              </h3>
              <p className="text-gray-700">
                Sim! Oferecemos materiais de treinamento, tutoriais em vídeo e
                suporte personalizado para garantir que você aproveite ao máximo
                nossa plataforma.
              </p>
            </div> */}

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso migrar de outro sistema?
              </h3>
              <p className="text-gray-700">
                Claro! Nossa equipe pode ajudar você a importar seus dados de
                outros sistemas de menu online ou até mesmo de planilhas do
                Excel.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Há suporte para múltiplos idiomas?
              </h3>
              <p className="text-gray-700">
                Atualmente oferecemos suporte completo em português. Estamos
                trabalhando para adicionar outros idiomas em breve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            Problema Urgente?
          </h2>
          <p className="text-red-700 mb-6">
            Se você está enfrentando um problema crítico que afeta seu
            atendimento, entre em contato conosco imediatamente.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            {/* <a
              href={`tel:${CONTACT_PHONE}`}
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Ligar Agora: {CONTACT_PHONE}
            </a> */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Email de Emergência
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
