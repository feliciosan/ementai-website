import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_ADDRESS, CONTACT_EMAIL } from "@/utils/contact-info";

export const metadata = {
  title: "Política de Privacidade - Ementai",
  description:
    "Política de Privacidade da Ementai. Saiba como protegemos e utilizamos seus dados.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg text-gray-600 mb-8">
            <strong>Última atualização:</strong> 3 de outubro de 2025
          </p>

          <p>
            A Ementai está comprometida em proteger a privacidade e segurança
            das informações pessoais dos usuários de nossa plataforma de menus
            online.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            1. Informações que Coletamos
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            1.1 Informações Fornecidas por Você
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nome e informações de contato (email, telefone)</li>
            <li>
              Informações do restaurante (nome, endereço, tipo de cozinha)
            </li>
            <li>Dados do menu (pratos, preços, descrições, imagens)</li>
            <li>
              Informações de pagamento (processadas por terceiros seguros)
            </li>
            <li>Comunicações conosco (mensagens, feedback, suporte)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            1.2 Informações Coletadas Automaticamente
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Dados de uso da plataforma (páginas visitadas, tempo de sessão)
            </li>
            <li>
              Informações do dispositivo (tipo, sistema operacional, navegador)
            </li>
            <li>Endereço IP e localização geográfica aproximada</li>
            <li>Cookies e tecnologias similares</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            2. Como Utilizamos suas Informações
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fornecer e manter nossa plataforma de menus online</li>
            <li>Processar pagamentos e gerenciar assinaturas</li>
            <li>Oferecer suporte técnico e atendimento ao cliente</li>
            <li>Melhorar nossos serviços e desenvolver novos recursos</li>
            <li>Enviar comunicações importantes sobre o serviço</li>
            <li>Prevenir fraudes e garantir a segurança da plataforma</li>
            <li>Cumprir obrigações legais e regulamentares</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            3. Compartilhamento de Informações
          </h2>

          <p>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais
            com terceiros, exceto:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Prestadores de Serviços:</strong> Parceiros que nos ajudam
              a operar a plataforma (hospedagem, pagamentos, analytics)
            </li>
            <li>
              <strong>Obrigações Legais:</strong> Quando exigido por lei ou
              processo legal válido
            </li>
            <li>
              <strong>Proteção de Direitos:</strong> Para proteger nossos
              direitos, propriedade ou segurança
            </li>
            <li>
              <strong>Transações Comerciais:</strong> Em caso de fusão,
              aquisição ou venda de ativos
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            4. Segurança dos Dados
          </h2>

          <p>
            Implementamos medidas de segurança técnicas e organizacionais para
            proteger suas informações:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Criptografia de dados em trânsito e em repouso</li>
            <li>Controles de acesso rigorosos</li>
            <li>Monitoramento contínuo de segurança</li>
            <li>Backups regulares e seguros</li>
            <li>Treinamento de equipe em segurança de dados</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            5. Seus Direitos
          </h2>

          <p>
            Você tem os seguintes direitos em relação aos seus dados pessoais:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Acesso:</strong> Solicitar cópias dos seus dados pessoais
            </li>
            <li>
              <strong>Retificação:</strong> Corrigir dados imprecisos ou
              incompletos
            </li>
            <li>
              <strong>Exclusão:</strong> Solicitar a exclusão dos seus dados
            </li>
            <li>
              <strong>Portabilidade:</strong> Receber seus dados em formato
              estruturado
            </li>
            <li>
              <strong>Oposição:</strong> Opor-se ao processamento dos seus dados
            </li>
            <li>
              <strong>Limitação:</strong> Solicitar a limitação do processamento
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            6. Retenção de Dados
          </h2>

          <p>
            Mantemos seus dados pessoais apenas pelo tempo necessário para
            cumprir os propósitos descritos nesta política, salvo quando um
            período de retenção maior for exigido por lei.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            7. Cookies
          </h2>

          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua
            experiência, analisar o uso da plataforma e personalizar conteúdo.
            Você pode controlar cookies através das configurações do seu
            navegador.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            8. Transferências Internacionais
          </h2>

          <p>
            Seus dados podem ser transferidos e processados em países fora do
            Brasil. Garantimos que tais transferências atendam aos requisitos de
            proteção de dados aplicáveis.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            9. Menores de Idade
          </h2>

          <p>
            Nossos serviços não são direcionados a menores de 18 anos. Não
            coletamos intencionalmente informações pessoais de menores.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            10. Alterações nesta Política
          </h2>

          <p>
            Podemos atualizar esta política periodicamente. Notificaremos sobre
            mudanças significativas através da plataforma ou email. O uso
            continuado dos serviços após as alterações constitui aceitação da
            nova política.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            11. Contato
          </h2>

          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre esta
            política, entre em contato:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-2">
            <div>
              <strong>Email:</strong> <span>{CONTACT_EMAIL}</span>
            </div>
            <div>
              <strong>Endereço:</strong> <span>{CONTACT_ADDRESS}</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-600">
            Esta política está em conformidade com a Lei Geral de Proteção de
            Dados (LGPD) - Lei nº 13.709/2018.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
