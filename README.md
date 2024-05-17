# Introdução ao Projeto

Este projeto consiste em duas APIs distintas: uma na pasta `FILE_SERVICE` e outra na pasta `MOCK`. Cada uma dessas APIs possui funcionalidades específicas e se comunica com um banco de dados PostgreSQL por meio do ORM Prisma. Esta é uma aplicação do uso de microserviços utilizando o Apache Kafka.

## Requisitos

- Node.js v18.20.2
- npm v10.5.0
- Docker
- Docker Compose

### Verificando a Versão do Node.js

Para verificar a versão do Node.js instalada, execute o comando:

```
node -v
```
Para verificar a versão do npm instalada, execute o comando:
```
npm -v
```
## Verificando a Versão do Node.js
Se você não tiver a versão correta do Node.js, é recomendável usar o NVM (Node Version Manager) para gerenciar diferentes versões do Node.js. Aqui estão as instruções para instalar e usar o NVM:

### Instalando o NVM e Node
1. Baixe e instale o NVM executando o seguinte comando no terminal:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
2. Baixe e instale o Node.js na versão adequada
```
nvm install 18
```

3. Verifique se a versão adequada foi instalada
```
node -v # should print `v18.20.2`
```

5. Se não for `v18.20.2` a versão exibida execute:
```
nvm use 18
```

6. Verifique a versão do npm do seu ambiente:
```
npm -v # should print `10.5.0`
```

# Configuração do Projeto
## Passo 1: Clonar o Repositório
Clone este repositório em sua máquina local
```
git clone https://github.com/vichierro/Repo-CSV.git
```
## Passo 2: Construir e Iniciar os Contêineres Docker

Na pasta `api/` do seu projeto, execute o seguinte comando para construir as imagens Docker e iniciar os contêineres:
```
docker-compose build
docker-compose up
```
## Passo 3: Configurar e Iniciar a API FILE_SERVICE

1. Navegue até a pasta `api/FILE_SERVICE` e crie arquivo `.env`:
```
cd api/FILE_SERVICE
```
Insira as seguintes credencias no arquivo `.env` criado:
```
DATABASE_URL="postgresql://postgres:docker@localhost:5432/client?schema=public"
```
2. Instale as depedências e inicie o servidor
```
npm install
npm run dev
```
3. Abra um novo terminal na pasta `api/FILE_SERVICE` e execute as migrações do Prisma
```
npx prisma migrate dev --name create-customer
```
4. Abra o Prisma Studio para visualizar o banco de dados:
```
npx prisma studio
```
## Passo 4: Configurar e Iniciar a API MOCK

1. Abra um novo terminal e navegue até a pasta `api/MOCK` e crie arquivo `.env`:
```
cd api/MOCK
```
Insira as seguintes credencias no arquivo `.env` criado:
```
DATABASE_URL="postgresql://postgres:docker@localhost:5432/order?schema=public"
```
2. Instale as depedências e inicie o servidor
```
npm install
npm run dev
```
3. Abra um novo terminal na pasta `api/MOCK` e execute as migrações do Prisma
```
npx prisma migrate dev --name create-customer
```
4. Abra o Prisma Studio para visualizar o banco de dados:
```
npx prisma studio
```
## Passo 5: Upload de CSV
1. Acesse o servidor do FILE_SERVICE pelo navegador em http://localhost:3001.
2. Na página exibida faça o upload de um dos arquivos CSVs disponíveis na pasta `csv`.
3. Após o upload do CSV, você pode acompanhar o fluxo de dados nos dois Prisma Studios abertos. Verifique as tabelas nos dois bancos de dados para observar as alterações e inserções de dados.

## Estrutura do Projeto

- `api/FILE_SERVICE`: Contém a API principal, que lida com o processamento de arquivos CSV e interage com o banco de dados.
- `api/MOCK`: Contém uma API de mock que funciona como repositório para as informações processadas em FILE_SERVICE, podendo realizar também escrita, remoção e atualização de dados do seu database.
- `csv`: Pasta contendo arquivos CSV de exemplo para upload.
- `docker-compose.yml`: Arquivo de configuração do Docker Compose para iniciar os contêineres.
- `README.md`: Este arquivo, contendo instruções detalhadas sobre como executar o projeto.



