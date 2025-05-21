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

### Pré-requisitos
- Docker instalado
- Docker Compose instalado

### Passos para execução

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO

# Suba os containers
docker-compose up --build




