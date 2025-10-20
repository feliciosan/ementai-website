import { Users, Target, Lightbulb, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroInfo from "@/components/HeroInfo";
import { APP_URL } from "@/utils/links";

export const metadata = {
  title: "Sobre Nós - Ementai",
  description:
    "Conheça a missão da Ementai em transformar a experiência gastronômica com menus online.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <HeroInfo
          titleStart="Nossa missão é transformar a"
          titleEndColored="experiência gastronômica"
          description="Acreditamos que a tecnologia pode tornar o atendimento em
            restaurantes mais eficiente, seguro e agradável para todos."
        />
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nossa História
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              A Ementai nasceu da necessidade real de restaurantes durante a
              pandemia de 2020, quando o atendimento sem contato se tornou
              essencial. Vimos proprietários de restaurantes lutando para
              adaptar seus negócios às novas demandas de segurança e
              praticidade.
            </p>
            <p className="mb-6">
              Percebemos que menus físicos não eram apenas um problema de
              higiene, mas também representavam custos constantes de impressão,
              dificuldades para atualizações e uma experiência pouco moderna
              para os clientes.
            </p>
            <p>
              Assim surgiu a Ementai: uma plataforma simples, intuitiva e
              poderosa que permite a qualquer restaurante criar menus digitais
              profissionais em minutos, não em dias.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nossos Valores
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Simplicidade
              </h3>
              <p className="text-gray-600">
                Criamos soluções fáceis de usar, sem complicações
                desnecessárias.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Foco no Cliente
              </h3>
              <p className="text-gray-600">
                Cada recurso é pensado para resolver problemas reais dos nossos
                usuários.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Acessibilidade
              </h3>
              <p className="text-gray-600">
                Tecnologia de qualidade deve estar ao alcance de todos os tipos
                de negócio.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Paixão</h3>
              <p className="text-gray-600">
                Amamos ajudar restaurantes a crescer e proporcionar experiências
                incríveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nosso Impacto em Números
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-700">Restaurantes ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">1M+</div>
              <div className="text-gray-700">Menus visualizados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">
                R$ 200k
              </div>
              <div className="text-gray-700">Economizados em impressão</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">99.9%</div>
              <div className="text-gray-700">Disponibilidade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Time Dedicado ao Seu Sucesso
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Nossa equipe está sempre trabalhando para melhorar a experiência dos
            restaurantes e seus clientes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">TI</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Time de Tecnologia
              </h3>
              <p className="text-gray-600">
                Desenvolvedores especializados em criar soluções robustas e
                escaláveis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">UX</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Design e UX
              </h3>
              <p className="text-gray-600">
                Designers focados em criar interfaces intuitivas e experiências
                incríveis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">CS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Atendimento
              </h3>
              <p className="text-gray-600">
                Especialistas em suporte dedicados a ajudar você em cada passo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Junte-se aos centenas de restaurantes que já transformaram seu
            atendimento conosco.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Comece Sua Transformação Digital
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
