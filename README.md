# Noz Books.

Esta é uma solução para o desafio Noz Books.

- Usuário e senha para logar na aplicação.
- desafio@appnoz.com.br
- 12341234

- Observação: Só é possível testar o app em ambiente de desenvolvimento, pois o endpoint fornecido não é seguro (HTTPS), tornando o login impossível de ser feito.

## :dart: Resumo de conteúdos

- [Visão Geral](#Visão-Geral)
  - [O desafio](#O-desafio)
  - [Captura de tela](#Captura-de-tela)
  - [Links](#Links)
- [Meu processo](#Meu-processo)
  - [Construído com](#Constrído-com)
  - [O que eu aprendi](#O-que-eu-aprendi)
  - [Continuação dos desenvolvimentos](#Continuação-dos-desenvolvimentos)
  - [Recursos utilizados](#Recursos-utilizados)
- [Autor](#Autor)

## Visão Geral.

### :globe_with_meridians: O desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo.
- Visualizar os estados de foco para todos os elementos interativos na página.
- O usuário não poderá entrar na página de livros sem estar logado.
- O usuário é automaticamente redirecionado para a página de livros se anteriormente ele já tiver feito login.
- Identificar campos de Input em relação à e-mail e/ou senha obrigatório.
- Identificar campos de Input em relação à senha e/ou email incorretos.
- Botão de loading ao clicar no botão de Entrar.
- Visualizar Esqueleto da página enquanto a requisição é feita na API.
- Visualizar os livros de forma dinâmica ao trocar as página.
- Limite de 12 livros por página.
- Visualizar o botão de troca de página ná primeira e última página, os botões deveram estar desabilitados em ambos os casos.
- Visualizar o Modal e que o mesmo abre no livro em que ele foi clicado.
- Visualizar a intereção no botão EXIT do header, ao ser clicado o mesmo é redirecionado para página de login e não pode voltar para a página de livros sem realizar novamente um login.

### Captura de tela

- Login Desktop
<p align="center" >
  <img src="/public/images/login_desktop.png" alt="Desktop"/>
</p>

- Login Tablet
<p align="center" >
<img src="/public/images/login_tablet.png" alt="Tablet"/>
</p>

- Login Mobile
<p align="center" >
<img src="/public/images/login_mobile.png" alt="Mobile"/>
</p>

- Login Mobile Incorreto
<p align="center" >
<img src="/public/images/login_mobile_incorrect.png" alt="Mobile incorreto"/>
</p>

- Login Mobile Validação
<p align="center" >
<img src="/public/images/login_mobile_validation.png" alt="Mobile validation"/>
</p>

- Books Desktop
<p align="center" >
<img src="/public/images/books_desktop.png" alt="Desktop books"/>
</p>

- Books Tablet
<p align="center" >
<img src="/public/images/books_tablet.png" alt="Tablet books"/>
</p>

- Books Mobile
<p align="center" >
<img src="/public/images/books_mobile.png" alt="Mobile books"/>
</p>

### Links

- Solução URL: [https://github.com/fernandorcoelho/noz-books](https://github.com/fernandorcoelho/noz-books)
- Site URL: [https://noz-books.vercel.app/](https://noz-books.vercel.app/)

## :page_with_curl: Meu processo

### Construído com

- NextJS
- Typescript
- Axios
- React-hook-form
- Yup
- Middleware
- Nookies
- OAuth
- UseFirstRender
- Framer-motion
- Styled-Components
- Design responsivo

### Continuação dos desenvolvimentos

Pretendo continuar fazendo projetos de desafios entre outros para melhorar meus conhecimentos em NextJS e TypeScript e outras tecnologias.

### Recursos utilizados

- [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - A documentação do Developer Mozilla é essencial para compreender as funções e conseguir aplicar as mesmas no projeto.

- [Typescript](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
- Documentação do Typescript utilizada para realizar a tipagem da propriedades.

- [React-hook-form](https://react-hook-form.com/)
- Utilizado para fazer o formulário de inserção dos inputs.

- [Yup](https://github.com/jquense/yup)
- Utilização do yup para formatação do formulário.

- [NextJS Middleware](https://nextjs.org/docs/middleware) - Documentação utilizada para utilização do Middleware

- [Hook-First-Render](https://usehooks-ts.com/react-hook/use-is-first-render) - Documentação utilizada para aplicação do hook first Render.

- [NextAuth](https://next-auth.js.org/) - Documentação utilizada para aplicação da Autenticação.

## :medal_military: Autor

- Linkedin - [@michelwene](https://www.linkedin.com/in/michelwene/)
