# README - Coffee Delivery

Este é o README do projeto Coffee Delivery, um aplicativo web desenvolvido utilizando React.js e Vite. Neste documento, descreveremos as tecnologias utilizadas, os objetivos do projeto e as principais funcionalidades implementadas.

## Tecnologias Utilizadas

O projeto Coffee Delivery utiliza as seguintes tecnologias:

- **React.js**: Uma biblioteca JavaScript popular para a construção de interfaces de usuário interativas e reativas.

- **Styled Components**: Uma biblioteca de estilização em JavaScript que permite a criação de componentes estilizados de forma dinâmica.

- **React Hook Form**: Uma biblioteca que facilita a criação e validação de formulários em React, utilizada para monitorar o formulário de checkout.

## Objetivo do Projeto

O objetivo principal deste projeto é criar um e-commerce de cafés, oferecendo aos usuários a possibilidade de navegar por uma seleção de produtos, adicioná-los e removê-los do carrinho e, por fim, realizar o checkout preenchendo um formulário de endereço.

## Funcionalidades Principais

O projeto Café E-commerce possui as seguintes funcionalidades:

1. **Página Inicial (Home)**:
   - Exibe uma lista de cafés disponíveis para compra.
   - Permite que os usuários adicionem produtos ao carrinho.
   - Cada produto exibe seu nome, preço e uma imagem representativa.

2. **Página de Checkout**:
   - Contém um formulário de preenchimento de endereço.
   - Ao lado do formulário, exibe o carrinho de compras, onde os usuários podem:
     - Ver os produtos selecionados.
     - Remover produtos do carrinho.
     - Aumentar ou diminuir a quantidade de produtos.
   - Ao preencher o formulário e clicar em "Finalizar Compra", o usuário conclui o processo de checkout.

3. **React Hook Form**:
   - Utilizado para monitorar e validar o formulário de checkout.
   - Garante que os dados de endereço sejam preenchidos corretamente antes da finalização da compra.

## Como Executar o Projeto

Para executar o projeto em sua máquina local, siga estas etapas:

1. Certifique-se de ter o Node.js instalado em seu sistema.

2. Clone este repositório para sua máquina:

   ```
   git clone https://github.com/seu-usuario/cafe-e-commerce.git
Navegue até o diretório do projeto:

   ```
Copy code
cd cafe-e-commerce
Instale as dependências utilizando o npm ou yarn:

shell
Copy code
npm install
# ou
yarn install
Inicie o servidor de desenvolvimento:
npm run dev
# ou
yarn dev
   ```
