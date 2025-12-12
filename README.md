# Cartório Alvarenga – Site Institucional

Site institucional desenvolvido com React, Vite e Tailwind CSS para apresentar os serviços do Cartório Alvarenga, reforçar a credibilidade da serventia e facilitar o contato via WhatsApp e formulário.

## Funcionalidades principais
- **Cabeçalho fixo com menu responsivo**: inclui navegação com rolagem suave, destaque da seção ativa e atalho para contato via WhatsApp.
- **Hero interativo**: fundo com efeito parallax, chamada para ação dupla (WhatsApp e agendamento) e cartões de diferenciais.
- **Seção "Nossa História"**: texto institucional destacando tradição, valores e compromisso do cartório.
- **Grade de serviços**: cartões para os principais serviços extrajudiciais com ícones, descrição e indicação de prazo.
- **Contato**: formulário validado para solicitações e botão dedicado para atendimento rápido no WhatsApp.
- **Localização e horários**: mapa incorporado do Google Maps, informações de endereço e horários de funcionamento.
- **Rodapé informativo**: links de navegação, perguntas frequentes resumidas e dados de contato.
- **Botão Voltar ao Topo**: aparece após rolagem e leva o usuário ao início da página com animação suave.

## Arquitetura e organização
- **`src/pages/Index.tsx`**: orquestração das seções da página inicial.
- **Componentes de seção**: `Header`, `Hero`, `Historia`, `Servicos`, `Contato`, `Localizacao`, `Footer` e `BackToTop` em `src/components/`.
- **Estilos globais**: localizados em `src/index.css` e `src/App.css`, com tokens de cores e utilitários Tailwind.
- **Assets**: imagens e ícones em `src/assets/`.

## Pré-requisitos
- Node.js 18+ e npm instalados.

## Como executar em desenvolvimento
```bash
npm install
npm run dev
```
O servidor padrão sobe em `http://localhost:5173`.

## Como gerar o build de produção
```bash
npm run build
```
Os arquivos otimizados são gerados na pasta `dist/`. Para pré-visualizar o build localmente:
```bash
npm run preview
```

## Publicação em domínio próprio
- Faça o upload do conteúdo da pasta `dist/` para sua hospedagem (qualquer serviço de arquivos estáticos como cPanel, Netlify, Vercel, S3, etc.).
- Certifique-se de apontar o domínio para a pasta ou bucket que contém o build.
- Caso o provedor permita configuração de cache/CDN, habilite gzip/brotli para melhor desempenho.

## Personalização rápida
- **Textos e contatos**: edite os componentes em `src/components/` (telefone/WhatsApp, e-mail, endereço e horários estão nos arquivos `Header.tsx`, `Contato.tsx` e `Localizacao.tsx`).
- **Cores e tipografia**: ajuste as variáveis no início de `src/index.css`.
- **Imagens/ícones**: substitua os arquivos em `src/assets/` conforme a identidade visual desejada.

## Tecnologias
React 18, Vite 5, TypeScript, Tailwind CSS, shadcn/ui e Radix UI.
