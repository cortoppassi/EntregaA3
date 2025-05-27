# 🛍️ Sistema de Gestão de Vendas - A3

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)
![Arquitetura](https://img.shields.io/badge/Arquitetura-Modular--Monolítica-blue)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-Academic-lightgrey)

![Repo Size](https://img.shields.io/github/repo-size/cortoppassi/EntregaA3)
![Last Commit](https://img.shields.io/github/last-commit/cortoppassi/EntregaA3)
![Issues](https://img.shields.io/github/issues/cortoppassi/EntregaA3)
![GitHub Stars](https://img.shields.io/github/stars/cortoppassi/EntregaA3?style=social)

---

## 📝 Descrição

Projeto desenvolvido para a avaliação A3 da disciplina de **Sistemas Distribuídos e Mobile**. A aplicação simula uma rede de loja de livros (Ânima Books Ltda) com serviços de cadastro e controle de clientes, vendedores, produtos, vendas e geração de relatórios estatísticos.
Nossa aplicação foi organizada em módulos, onde cada módulo representa um domínio do sistema, como clientes, produtos, vendas e vendedores. Cada módulo encapsula seu próprio conjunto de modelos, serviços, repositórios, controllers e rotas, promovendo uma arquitetura limpa, escalável e de fácil manutenção.

## 👥 Integrantes da Equipe

- 🎓 **Alice Gomes Nascimento** - RA: 1272328052
- 🎓 **Dinaldo Ribeiro de Carvalho** - RA: 1272329374
- 🎓 **Jonathan Cortopassi** - RA: 12723213891
- 🎓 **Samuel Pereira de Souza** - RA: 132723112947

## 🧰 Tecnologias Utilizadas

- **Linguagem:** JavaScript (Node.js)
- **Framework:** Express.js
- **Banco de Dados:** MySQL
- **ORM:** Sequelize
- **Contêineres:** Docker e Docker Compose
- **Outros:** dotenv, axios, express-validator
- **Relatórios:** Serviço separado para geração de relatórios

## ⚙️ Funcionalidades de Aplicação

### 📁 Módulo Cliente
- Cadastro, edição, listagem e remoção de clientes (CRUD)

### 🧑‍💼 Módulo Vendedor
- Cadastro, edição, listagem e remoção de vendedores (CRUD)

### 📦 Módulo Produto e Estoque
- Cadastro de produtos
- Atualização de quantidade em estoque

### 💰 Módulo Vendas
- Realização de pedidos de compra
- Cancelamento de pedidos

### 📊 Módulo Relatórios
- Produtos mais vendidos
- Produtos comprados por cliente
- Consumo médio por cliente
- Produtos com estoque baixo

## 📦 Requisitos Mínimos

- ✅ 25 produtos cadastrados
- ✅ 5 clientes cadastrados
- ✅ 2 vendedores cadastrados


## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` com os seguintes parâmetros:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=loja
DB_PORT=3306
```
### Pré-requisitos para instalação 
-Node.js (v18 ou superior)
-npm (v9 ou superior)
-Banco de dados MySQL
-Docker(v20.10)

## 🐳 Como Executar com Docker

### Pré-requisitos

- Docker instalado
- Docker Compose instalado

### Passos para execução

```bash
git clone https://github.com/cortoppassi/EntregaA3.git
cd EntregaA3
docker-compose up --build
```

- 🔗 Backend principal acessível em: http://localhost:3000
- 🔗 Serviço de relatórios acessível em: http://localhost:3001

## 🧱 Estrutura do Projeto

```
/codigo-fonte
├── customers/
├── sellers/
├── stocks/
├── sales/
├── reports/
└── docker-compose.yml
```

## 🔧 Organização das Pastas e Arquitetura

| Camada          | Função                                          |
|-----------------|-------------------------------------------------|
| modelos/        | Representam as tabelas do banco (Sequelize)     |
| repositórios/   | Consultas e acesso direto ao banco              |
| serviços/       | Regras de negócio e validações                 |
| controladores/  | Manipulação de requisições HTTP                |
| rotas/          | Organização das rotas da API (Express)         |
| banco de dados/ | Configurações e sementes do Sequelize          |
| Dockerfile      | Conteinerização de cada microserviço           |
| docker-compose  | Orquestra todos os serviços e banco MySQL      |

## 🏗️ Arquitetura e Estratégia

- Arquitetura baseada em **MVC (Model-View-Controller) + Service + Repository**
- Comunicação via APIs REST / API RESTful
- Banco de dados relacional compartilhado (MySQL)
- Serviço de relatórios separado para escalabilidade

## 📑 Licença

🚀 **Projeto acadêmico — uso exclusivamente educacional.**

## 👥 Contribuidores

| [![Jonathan Cortopassi](https://avatars.githubusercontent.com/cortoppassi)](https://github.com/cortoppassi) | [![Alice Gomes Nascimento](https://avatars.githubusercontent.com/Alicegomes04)](https://github.com/Alicegomes04) | [![Dinaldo Ribeiro de Carvalho](https://avatars.githubusercontent.com/Dinaldorc)](https://github.com/Dinaldorc) | [![Samuel Pereira de Souza](https://avatars.githubusercontent.com/smksouza)](https://github.com/smksouza) |
| :---: | :---: | :---: | :---: |
| **[Jonathan Cortopassi](https://github.com/cortoppassi)** | **[Alice Gomes Nascimento](https://github.com/Alicegomes04)** | **[Dinaldo Ribeiro de Carvalho](https://github.com/Dinaldorc)** | **[Samuel Pereira de Souza](https://github.com/smksouza)** |






