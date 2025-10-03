import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Clock, HelpCircle, MessageSquare, Zap } from "lucide-react";

export const metadata = {
  title: "Contato - Ementai | Fale Conosco",
  description:
    "Entre em contato com a equipe Ementai. Estamos aqui para ajudar você a transformar seu restaurante com cardápios digitais.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Estamos Aqui para
            <span className="text-teal-600"> Ajudar Você</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tem dúvidas sobre nossos cardápios digitais? Nossa equipe
            especializada está pronta para ajudar.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <MessageSquare className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Chat Online
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Resposta imediata durante o horário comercial
              </p>
              <button className="text-teal-600 hover:text-teal-700 font-semibold">
                Iniciar Chat
              </button>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Central de Ajuda
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Encontre respostas para perguntas frequentes
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Ver Artigos
              </button>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Suporte Técnico
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Problemas técnicos ou bugs
              </p>
              <button className="text-yellow-600 hover:text-yellow-700 font-semibold">
                Reportar Problema
              </button>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Agendamento
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Agende uma demonstração personalizada
              </p>
              <button className="text-green-600 hover:text-green-700 font-semibold">
                Agendar Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Entre em Contato Conosco
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato em
              até 24 horas.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </section>

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
                Você pode criar seu primeiro cardápio digital em menos de 30
                minutos! Nossa plataforma é projetada para ser simples e
                intuitiva.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Vocês oferecem treinamento?
              </h3>
              <p className="text-gray-700">
                Sim! Oferecemos materiais de treinamento, tutoriais em vídeo e
                suporte personalizado para garantir que você aproveite ao máximo
                nossa plataforma.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso migrar de outro sistema?
              </h3>
              <p className="text-gray-700">
                Claro! Nossa equipe pode ajudar você a importar seus dados de
                outros sistemas de cardápio digital ou até mesmo de planilhas do
                Excel.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Há suporte para múltiplos idiomas?
              </h3>
              <p className="text-gray-700">
                Atualmente oferecemos suporte completo em português. Estamos
                trabalhando para adicionar inglês e espanhol em breve.
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
            <a
              href="tel:+5511999999999"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Ligar Agora: (11) 99999-9999
            </a>
            <a
              href="mailto:emergencia@ementai.com.br"
              className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
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
