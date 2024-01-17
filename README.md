# MyCoursePlatform

MyCoursePlatform é uma plataforma de cursos online via vídeo inspirada na Udemy. Nela, professores podem criar seus cursos e postar vídeos, e alunos podem se inscrever nesses cursos e assistir aos vídeos.

## Objetivo

O objetivo principal do MyCoursePlatform é oferecer uma plataforma de ensino online de qualidade, acessível e inclusiva. A plataforma visa facilitar o acesso ao conhecimento para pessoas de todas as origens e níveis de escolaridade.

## Link do deploy!
(ainda sem link)

## Tecnologias Utilizadas

O projeto MyCoursePlatform é desenvolvido com as seguintes tecnologias:

- **Next.js 14**
- **Clerk**
- **Stripe**
- **Mux**
- **Prisma**
- **Tailwind**
- **MySQL**

## Funcionalidades

O MyCoursePlatform oferece as seguintes funcionalidades:

- Criação de cursos: Professores podem criar seus próprios cursos, incluindo vídeos, textos, quizzes e outros recursos.
- Inscrição em cursos: Alunos podem se inscrever em cursos pagos ou gratuitos.
- Assistência aos vídeos: Alunos podem assistir aos vídeos dos cursos em qualquer dispositivo.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado na sua máquina.
2. Faça o clone deste repositório:

```bash
git clone https://github.com/seu-usuario/mycourseplataform.git
```
3. Acesse o diretório do projeto:
```bash
  cd mycourseplataform
```
4. Instale as dependências utilizando npm:
```bash
  npm install
```
5. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
```bash
DATABASE_URL=
STRIPE_SECRET_KEY=
STRIPE_PUBLIC_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
```
6. Crie um banco de dados MySQL com o nome ```mycourseplatform```.

7. Execute as migrações: 
```bash 
yarn prisma migrate dev
```
8. Inicie o servidor:
```bash 
yarn dev
```
## Executando o Projeto

Após a instalação das dependências, você pode rodar o projeto localmente com o seguinte comando:
```bash
  npm run dev
```
Isso iniciará o servidor de desenvolvimento. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para utilizar a aplicação.

## Contribuindo

Sinta-se à vontade para contribuir com novos recursos, correções de bugs ou melhorias para o projeto. Basta seguir os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adicionando nova feature'`.
4. Faça push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Autores

- [Crohnaro](https://github.com/crohnaro)

## Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).
