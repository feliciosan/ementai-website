import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_ADDRESS, CONTACT_EMAIL } from "@/utils/contact-info";

export const metadata = {
  title: "Termos de Serviço - Ementai",
  description:
    "Termos de Serviço da Ementai. Conheça os termos de uso da nossa plataforma de menus online.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Termos de Serviço
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg text-gray-600 mb-8">
            <strong>Última atualização:</strong> 3 de outubro de 2025
          </p>

          <p>
            Bem-vindo à Ementai! Estes Termos de Serviço (&quot;Termos&quot;)
            regem o uso da nossa plataforma de menus online. Ao usar nossos
            serviços, você concorda com estes termos.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            1. Aceitação dos Termos
          </h2>

          <p>
            Ao acessar ou usar a plataforma Ementai, você concorda em ficar
            vinculado a estes Termos de Serviço. Se você não concorda com
            qualquer parte destes termos, não deve usar nossos serviços.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            2. Descrição dos Serviços
          </h2>

          <p>A Ementai oferece:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Plataforma para criação e gerenciamento de menus online</li>
            <li>Geração de QR codes para acesso aos menus</li>
            <li>Ferramentas de personalização e branding</li>
            <li>Analytics e relatórios de desempenho</li>
            <li>Suporte técnico e atendimento ao cliente</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            3. Registro e Conta
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            3.1 Elegibilidade
          </h3>
          <p>
            Você deve ter pelo menos 18 anos e capacidade legal para celebrar
            contratos para usar nossos serviços.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            3.2 Informações da Conta
          </h3>
          <p>
            Você é responsável por manter a confidencialidade das suas
            credenciais de acesso e por todas as atividades que ocorram em sua
            conta.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            3.3 Veracidade das Informações
          </h3>
          <p>
            Você declara que todas as informações fornecidas são verdadeiras,
            precisas e atualizadas.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            4. Uso Aceitável
          </h2>

          <p>Você concorda em NÃO:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Violar qualquer lei ou regulamento aplicável</li>
            <li>Usar a plataforma para fins ilegais ou não autorizados</li>
            <li>Interferir no funcionamento da plataforma</li>
            <li>Tentar acessar dados de outros usuários</li>
            <li>Publicar conteúdo ofensivo, difamatório ou inadequado</li>
            <li>Fazer engenharia reversa ou copiar nosso software</li>
            <li>Usar a plataforma para spam ou comunicações não solicitadas</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            5. Conteúdo do Usuário
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            5.1 Propriedade
          </h3>
          <p>
            Você mantém todos os direitos sobre o conteúdo que cria e carrega na
            plataforma (textos, imagens, descrições de pratos, etc.).
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            5.2 Licença para Uso
          </h3>
          <p>
            Você nos concede uma licença não exclusiva para usar, armazenar e
            exibir seu conteúdo conforme necessário para fornecer nossos
            serviços.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            5.3 Responsabilidade pelo Conteúdo
          </h3>
          <p>
            Você é totalmente responsável pelo conteúdo que publica e garante
            que possui todos os direitos necessários.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            6. Planos e Pagamentos
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            6.1 Planos de Assinatura
          </h3>
          <p>
            Oferecemos diferentes planos de assinatura com recursos variados. Os
            detalhes estão disponíveis em nossa página de preços.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            6.2 Pagamentos
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pagamentos são processados mensalmente ou anualmente</li>
            <li>Aceittamos cartões de crédito, PIX e boleto bancário</li>
            <li>
              Todas as taxas são não reembolsáveis, salvo disposição legal
            </li>
            <li>Preços podem ser alterados com aviso prévio de 30 dias</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            6.3 Cancelamento
          </h3>
          <p>
            Você pode cancelar sua assinatura a qualquer momento. O acesso
            continuará até o final do período pago.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            7. Propriedade Intelectual
          </h2>

          <p>
            A plataforma Ementai, incluindo software, design, logotipos e
            conteúdo, é protegida por direitos autorais e outras leis de
            propriedade intelectual.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            8. Disponibilidade do Serviço
          </h2>

          <p>
            Nos esforçamos para manter a plataforma disponível 99.9% do tempo,
            mas não garantimos operação ininterrupta. Pode haver manutenções
            programadas ou interrupções imprevistas.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            9. Limitação de Responsabilidade
          </h2>

          <p>
            A Ementai não será responsável por danos indiretos, incidentais,
            especiais ou consequenciais decorrentes do uso da plataforma. Nossa
            responsabilidade total não excederá o valor pago nos últimos 12
            meses.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            10. Isenção de Garantias
          </h2>

          <p>
            Os serviços são fornecidos &quot;como estão&quot; e &quot;conforme
            disponível&quot;. Não oferecemos garantias expressas ou implícitas
            sobre adequação para fins específicos.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            11. Suspensão e Encerramento
          </h2>

          <p>
            Podemos suspender ou encerrar sua conta em caso de violação destes
            termos, atividades ilegais ou por outros motivos justificados, com
            ou sem aviso prévio.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            12. Alterações nos Termos
          </h2>

          <p>
            Podemos modificar estes termos periodicamente. Mudanças
            significativas serão comunicadas com 30 dias de antecedência. O uso
            continuado após as alterações constitui aceitação dos novos termos.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            13. Lei Aplicável
          </h2>

          <p>
            Estes termos são regidos pelas leis do Brasil. Disputas serão
            resolvidas nos tribunais competentes de São Paulo, SP.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            14. Contato
          </h2>

          <p>Para questões sobre estes termos, entre em contato:</p>

          <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-2">
            <div>
              <strong>Email:</strong> <span>{CONTACT_EMAIL}</span>
            </div>
            <div>
              <strong>Endereço:</strong> <span>{CONTACT_ADDRESS}</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            15. Disposições Gerais
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Se qualquer disposição for inválida, as demais permanecem em vigor
            </li>
            <li>A falha em exercer direitos não constitui renúncia</li>
            <li>Estes termos constituem o acordo completo entre as partes</li>
            <li>
              Você não pode transferir seus direitos sem nosso consentimento
            </li>
          </ul>

          <p className="mt-8 text-sm text-gray-600">
            Ao usar a Ementai, você confirma que leu, entendeu e concorda com
            estes Termos de Serviço.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
