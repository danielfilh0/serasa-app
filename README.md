<div align="center">
  <h1>Serasa App</h2>
  <p>Formulário de Avaliação</p>
  <img src="public/og-image.jpg">
  <p></p>
</div>
<br>

- [Deployment](https://serasa-app-lilac.vercel.app/)
- [Documentação dos componentes (Storybook)](https://serasa-app.onrender.com)

## Funcionalidades
- Preenchimento de formulário de avaliação
- Consumo de API


## Tecnologias utilizadas

### Front-end
- Next.js
- Typescript
- React Hook Form
- Zod
- Tailwind CSS
- Jest e React Testing Library
- Consumo de API Rest
- Storybook

### Back-end
- Next.js API Routes
- Prisma ORM
- PostgreSQL

## Como executar

Antes de tudo, na sua máquina deverá ter:

- Node.js
- Docker
- Git

Em seguida, execute os comandos abaixo:

```bash
$ cd serasa-app

$ docker compose up -d # cria a imagem e sobe o container do PostgreSQL

$ npm install # ou yarn install

$ cp .env.example .env # cria variáveis de ambientes

$ npx prisma migrate dev # executa as migrations do banco

$ npm run dev # ou yarn dev
```

Para executar o storybook, execute o comando abaixo:
```bash
$ npm run storybook
```

## Observações

- O formulário cadastra as informações de avaliação e o IP de rede do usuário.
- Uma vez enviado o formulário, a avaliação será persistida na próxima vez que o usuário entrar na aplicação.

