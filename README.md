1. npm init -y
2. npm i -D typescript ts-node @types/node
3. npx tsc --init
4. npm i express
5. npm i -D @types/express
6. npm i -D prisma
7. npx prisma init
8. npx prisma db push
9. npm i -D @swc/core @swc/helpers nodemon

- Rotas: Responsável por definir as rotas da aplicação e chamar os controladores.
- Controladores: Responsável por receber as requisições, realizar a validação dos dados e chamar os serviços.
- Serviços: Responsável por implementar a lógica de negócio da aplicação e chamar os repositórios.
- Repositórios: Responsável por realizar a comunicação com o banco de dados.
- Entidades: Responsável por definir a estrutura dos dados que serão utilizados na aplicação (nesse caso vamos utilizar os modelos do Prisma).