# Ementai - Website Oficial

Website oficial da Ementai, uma plataforma SaaS para criação de cardápios digitais com QR Code para restaurantes e estabelecimentos alimentícios.

## 🚀 Sobre o Projeto

A Ementai é uma solução completa que permite aos restaurantes criar cardápios digitais profissionais, gerar QR codes para acesso sem contato e oferecer uma experiência moderna aos seus clientes.

### Principais Funcionalidades

- **Cardápios Digitais**: Criação e gerenciamento de cardápios online
- **QR Codes Personalizados**: Geração de QR codes com branding personalizado
- **Design Responsivo**: Otimizado para todos os dispositivos
- **Personalização Completa**: Cores, logos, fontes e layouts customizáveis
- **Analytics Avançado**: Relatórios sobre visualizações e comportamento dos clientes
- **Atualizações Instantâneas**: Mudanças em tempo real sem custos extras

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15 com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **Formulários**: React Hook Form
- **Hospedagem**: Vercel (recomendado)

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── contato/           # Página de contato
│   ├── precos/            # Página de preços
│   ├── privacidade/       # Política de privacidade
│   ├── recursos/          # Página de recursos
│   ├── sobre/             # Página sobre nós
│   ├── termos/            # Termos de serviço
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── robots.ts          # Configuração robots.txt
│   └── sitemap.ts         # Sitemap XML
└── components/            # Componentes reutilizáveis
    ├── ContactForm.tsx    # Formulário de contato
    ├── Footer.tsx         # Rodapé
    └── Header.tsx         # Cabeçalho
```

## 🎨 Design e UX

### Paleta de Cores

- **Primária**: Teal (#0d9488)
- **Secundária**: Cyan (#06b6d4)
- **Texto**: Gray (#374151)
- **Background**: White (#ffffff)

### Características do Design

- **Mobile-First**: Design responsivo priorizando dispositivos móveis
- **Acessibilidade**: Foco em usabilidade e acessibilidade
- **Conversão**: CTAs estratégicos e funil de conversão otimizado
- **SEO**: Estrutura otimizada para mecanismos de busca

## 📄 Páginas Principais

### 1. Página Inicial (/)

- Hero section com proposta de valor
- Demonstração de produto
- Recursos principais
- Depoimentos de clientes
- Seção de preços
- FAQ
- Múltiplos CTAs

### 2. Recursos (/recursos)

- Detalhamento completo das funcionalidades
- Demonstrações visuais
- Comparativos de recursos
- Integrações disponíveis

### 3. Preços (/precos)

- Planos claros e transparentes
- Comparação de recursos
- FAQ sobre pagamentos
- CTAs de conversão

### 4. Contato (/contato)

- Formulário de contato funcional
- Informações de contato
- Múltiplos canais de suporte
- FAQ comum

### 5. Sobre (/sobre)

- História da empresa
- Missão e valores
- Estatísticas de impacto
- Informações da equipe

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Navegue para o diretório
cd ementai-website

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📧 Funcionalidades de Contato

O formulário de contato inclui:

- Validação completa de campos
- Feedback visual de envio
- Proteção contra spam
- Estados de loading
- Mensagens de sucesso/erro

## 🔍 SEO e Performance

### Otimizações Implementadas

- Meta tags otimizadas
- Open Graph para redes sociais
- Sitemap XML automático
- Robots.txt configurado
- Lazy loading de imagens
- Compressão de assets
- Lighthouse score 90+

### Schema Markup

- LocalBusiness schema
- Product schema
- FAQ schema
- Review schema

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Segurança

- Headers de segurança configurados
- Validação de formulários
- Proteção contra XSS
- HTTPS obrigatório
- Conformidade com LGPD

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Suporte

- **Email**: contato@ementai.com.br
- **Telefone**: (11) 99999-9999
- **Website**: [ementai.com.br](https://ementai.com.br)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido com ❤️ para revolucionar a experiência gastronômica digital no Brasil.
