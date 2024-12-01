# Projeto NestJS - CRUD, Authentication, Authorization e Cache

## 📋 Descrição

Este é um projeto desenvolvido em **NestJS**, que implementa:
- **CRUD de Usuários e Produtos**
- **Autenticação com JWT**
- **Autorização baseada em papéis**
- **Cache em rota específica**

O objetivo é fornecer uma API funcional e segura, ideal para aprendizado ou uso como base para novos projetos.

---

## 🚀 Tecnologias

- **Node.js**
- **NestJS**
- **TypeScript**
- **JWT** (JSON Web Token)
- **Cache** (`@nestjs/cache-manager`)

---

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seuusuario/nestjs-project.git
   cd nestjs-project
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   npm run start
   ```

4. A API estará disponível em: `http://localhost:3000`.

---

## 🔑 Autenticação

O projeto utiliza **JWT (JSON Web Token)** para proteger rotas. Para acessar rotas protegidas, é necessário:
1. Registrar um usuário.
2. Fazer login para obter um token JWT.
3. Usar o token nas rotas protegidas.

---

## 📚 Rotas Disponíveis

### 1. **Autenticação (Auth)**

#### **Registrar Usuário**
- **Método:** `POST`
- **URL:** `/auth/register`
- **Body (JSON):**
  ```json
  {
    "username": "admin",
    "password": "123456",
    "role": "admin"
  }
  ```
- **Descrição:** Cria um novo usuário.

---

#### **Login**
- **Método:** `POST`
- **URL:** `/auth/login`
- **Body (JSON):**
  ```json
  {
    "username": "admin",
    "password": "123456"
  }
  ```
- **Descrição:** Gera um token JWT.
- **Resposta (JSON):**
  ```json
  {
    "access_token": "<seu_token_jwt>"
  }
  ```

---

### 2. **Usuários (Users)**

#### **Listar Usuários**
- **Método:** `GET`
- **URL:** `/users`
- **Headers:**
  ```plaintext
  Authorization: Bearer <seu_token_jwt>
  ```
- **Descrição:** Retorna todos os usuários cadastrados.

---

#### **Adicionar Usuário**
- **Método:** `POST`
- **URL:** `/users`
- **Headers:**
  ```plaintext
  Authorization: Bearer <seu_token_jwt>
  ```
- **Body (JSON):**
  ```json
  {
    "username": "newuser",
    "password": "password123",
    "role": "user"
  }
  ```
- **Descrição:** Adiciona um novo usuário.

---

#### **Consultar Usuário por ID**
- **Método:** `GET`
- **URL:** `/users/id`
- **Headers:**
  ```plaintext
  Authorization: Bearer <seu_token_jwt>
  ```
- **Descrição:** Retorna os dados de um usuário pelo ID.

---

#### **Atualizar Usuário**
- **Método:** `PUT`
- **URL:** `/users/id`
- **Headers:**
  ```plaintext
  Authorization: Bearer <seu_token_jwt>
  ```
- **Body (JSON):**
  ```json
  {
    "username": "updatedUser",
    "password": "newPassword"
  }
  ```
- **Descrição:** Atualiza os dados de um usuário.

---

#### **Deletar Usuário**
- **Método:** `DELETE`
- **URL:** `/users/id`
- **Headers:**
  ```plaintext
  Authorization: Bearer <seu_token_jwt>
  ```
- **Descrição:** Remove um usuário pelo ID.

---

### 3. **Produtos (Products)**

#### **Listar Produtos (Com Cache)**
- **Método:** `GET`
- **URL:** `/products`
- **Descrição:** Retorna todos os produtos cadastrados, com cache de 5 segundos.

---

#### **Adicionar Produto**
- **Método:** `POST`
- **URL:** `/products`
- **Body (JSON):**
  ```json
  {
    "name": "Produto X",
    "price": 100
  }
  ```
- **Descrição:** Adiciona um novo produto.

---

#### **Consultar Produto por ID**
- **Método:** `GET`
- **URL:** `/products/id`
- **Descrição:** Retorna os dados de um produto pelo ID.

---

#### **Atualizar Produto**
- **Método:** `PUT`
- **URL:** `/products/id`
- **Body (JSON):**
  ```json
  {
    "name": "Produto Atualizado",
    "price": 150
  }
  ```
- **Descrição:** Atualiza os dados de um produto.

---

#### **Deletar Produto**
- **Método:** `DELETE`
- **URL:** `/products/id`
- **Descrição:** Remove um produto pelo ID.

---

## 🛠️ Configuração do Cache
- O cache está configurado para a rota `GET /products` com um **TTL (Time-to-Live)** de 5 segundos.
- Implementado com `@nestjs/cache-manager`.
