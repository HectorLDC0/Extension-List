🚀 Extensions Dashboard

Uma aplicação React que exibe uma lista de extensões com filtros, controle de status (active/inactive), remoção com confirmação e suporte a tema claro/escuro.

O projeto também inclui testes end-to-end com Cypress para garantir qualidade e confiabilidade da interface.

🖥️ Funcionalidades
✔️ Listagem dinâmica de extensões

Cada extensão tem imagem, título, descrição e status.

O estado é controlado globalmente no App.jsx.

✔️ Sistema de filtros

All → mostra todas

Active → mostra apenas as ativas

Inactive → mostra somente inativas

✔️ Toggle de status

Cada card possui um toggle para ativar/desativar a extensão.

✔️ Remoção com confirmação

Antes de excluir, o usuário recebe um confirm().

✔️ Dark / Light Mode

Ícone lua no modo escuro

Ícone sol no modo claro

O tema altera:

background

textos

cards

botões

toggle

✔️ Totalmente responsivo (grid adaptável)

Usando:

grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

✔️ Testes automatizados com Cypress

Incluso:

Teste de renderização

Teste de toggle

Teste de filtros

Teste de remoção

📦 Tecnologias Utilizadas

React + Vite

CSS Modules

Cypress

ESLint + Prettier (opcional)

SVG Assets

📁 Estrutura do Projeto
📦 src
 ┣ 📂assets
 ┃ ┣ images/
 ┃ ┣ fonts/
 ┣ 📂components
 ┃ ┣ Card.jsx
 ┃ ┣ Button.jsx
 ┣ App.jsx
 ┣ App.css
 ┣ main.jsx
📦 cypress
 ┣ e2e/
 ┃ ┗ home.cy.js
 ┣ support/
 ┃ ┣ e2e.js
 ┃ ┗ commands.js

▶️ Como rodar o projeto
1. Clone o repositório
git clone https://github.com/HectorLDC0/Extension-List
cd Extension-List

2. Instale as dependências
npm install

3. Rode o projeto
npm run dev

🧪 Como rodar os testes com Cypress
1. Instale o Cypress
npm install cypress --save-dev

2. Abra o Cypress
npx cypress open

3. Rode os testes na interface ou em modo headless:
npx cypress run
