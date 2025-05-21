 🛍️ Sistema de Gestão de Vendas - A3 (Sistemas Distribuídos e Mobile)

Projeto desenvolvido para a avaliação A3 da disciplina de Sistemas Distribuídos e Mobile. A aplicação simula uma rede de loja de livros ( Ânima Books Ltda ) com serviços de cadastro e controle de clientes, vendedores, produtos, vendas e geração de relatórios estatísticos.

---

 👥 Integrantes da Equipe

- Aluna: Alice Gomes Nascimento/
RA: 1272328052
- Aluno: Dinaldo Ribeiro de Carvalho/
RA: 1272329374
- Aluno: Jonathan Cortopassi/
RA: 12723213891
- Aluno: Samuel Pereira de Souza/
 RA: 132723112947

---

## 🧰 Tecnologias Utilizadas

- **Linguagem:** JavaScript (Node.js)  
- **Framework:** Express.js  
- **Banco de Dados:** MySQL  
- **ORM:** Sequelize  
- **Containers:** Docker e Docker Compose  
- **Outros:** dotenv, axios, express-validator  
- **Relatórios:** Serviço separado para geração de relatórios

---

## ⚙️ Funcionalidades da Aplicação

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

---

## 📦 Requisitos Mínimos

A aplicação inicia com:
- ✅ 25 produtos cadastrados  
- ✅ 5 clientes cadastrados  
- ✅ 2 vendedores cadastrados  

---

## 🐳 Como Executar com Docker

## Pré-requisitos
- Docker instalado
- Docker Compose instalado

## Passos para execução


# Clone o repositório
- git clone https://github.com/cortoppassi/EntregaA3/tree/main
cd SEU-REPO

- Suba os containers
docker-compose up --build  

- Backend principal acessível em: http://localhost:3000

- Serviço de relatórios acessível em: http://localhost:3001 (ou outra porta definida)
---

🧱 Estrutura do Projeto
# /código-fonte
  -├── cliente/
 - ├── vendedor/
 - ├── estoque/
 - ├── vendas/
  -├── relatorios/
 - └── docker-compose.yml

/relatório
  └── TrabalhoA3-Relatorio.pdf

## 🔧 Organização das Pastas e Arquitetura

O projeto está organizado seguindo a arquitetura MVC + Repository + Services, garantindo separação de responsabilidades e escalabilidade.

| Camada               | Função                                             |
| -------------------- | -------------------------------------------------- |
| models/              | Representam as tabelas do banco com Sequelize      |
| repositories/        | Lidam diretamente com queries no banco de dados    |
| services/            | Aplicam regras de negócio e validam dados          |
| controllers/         | Respondem às requisições HTTP e chamam os services |
| routes/              | Organizam as rotas da API (Express)                |
| database/            | Configurações e seeds do Sequelize                 |
| Dockerfile           | Containeriza a aplicação                           |
| docker-compose.yml   | Junta os serviços e banco num mesmo ambiente       |

---

🧠 Arquitetura e Estratégia
Arquitetura de microserviços: cada funcionalidade principal roda em um container separado

Comunicação via APIs REST

Banco de dados relacional compartilhado (MySQL)

Relatórios como serviço separado para facilitar escalabilidade

---
📑 Licença
Projeto acadêmico — uso exclusivamente educacional.










