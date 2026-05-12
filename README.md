# Intro-nodeJs
Este repositório tem como propósito registrar e organizar meus estudos Back-End com nodeJs.

## Resumo dos Estudos na Pasta "praticando"

A pasta `praticando/` contém exercícios iniciais para aprender os fundamentos do desenvolvimento back-end com Node.js e Express.js. Esses arquivos demonstram o progresso gradual no entendimento de conceitos como servidores HTTP, rotas, parâmetros de requisição e operações CRUD. Abaixo, um resumo detalhado dos estudos realizados:

### 1. **index.js - Introdução aos Parâmetros de Requisição**
   - **Objetivo**: Aprender a diferença entre parâmetros de query e de rota no Express.
   - **Conteúdo**:
     - Criação de um servidor Express simples.
     - Uso de **query params** (ex.: `?nome=Bruno&idade=25`) para parâmetros opcionais.
     - Uso de **route params** (ex.: `/hello/:nome/:age`) para parâmetros obrigatórios na URL.
     - Respostas JSON com dados extraídos dos parâmetros.
   - **Aprendizados**: Como extrair e manipular dados da URL, respondendo dinamicamente com base na entrada do usuário.

### 2. **crud.js - Implementação Completa de CRUD**
   - **Objetivo**: Consolidar o conhecimento em operações CRUD (Create, Read, Update, Delete) em um único arquivo.
   - **Conteúdo**:
     - Servidor Express com middleware para JSON.
     - Array in-memory para simular banco de dados de produtos.
     - **Rotas Implementadas**:
       - `GET /produtos`: Lista todos os produtos.
       - `GET /produtos/:id`: Mostra um produto específico.
       - `POST /produtos`: Cria um novo produto (com geração automática de ID).
       - `PUT /produtos/:id`: Atualiza um produto existente.
       - `DELETE /produtos/:id`: Remove um produto.
     - Tratamento de status HTTP (200, 201, 404).
     - Logs no console para depuração.
   - **Aprendizados**: Estrutura básica de uma API RESTful, manipulação de arrays como armazenamento temporário, e boas práticas de resposta HTTP.

### 3. **listagem01.js - Exercício Focado em Listagem e Criação**
   - **Objetivo**: Praticar operações básicas de leitura e criação, reforçando conceitos iniciais.
   - **Conteúdo**:
     - Servidor Express com parsing de JSON.
     - Array de produtos pré-definido.
     - **Rotas Implementadas**:
       - `GET /produtos`: Lista todos os produtos.
       - `GET /produtos/:id`: Mostra um produto por ID.
       - `POST /produtos`: Cria um novo produto com ID automático.
       - `PUT /produtos/:id`: Atualiza produto (parcialmente implementado).
     - Foco em lógica de ID sequencial e validação básica.
   - **Aprendizados**: Reforço de rotas GET e POST, manipulação de objetos JavaScript, e estruturação de respostas.

### Considerações Gerais dos Estudos
- **Progressão**: Os arquivos mostram uma evolução de conceitos simples (parâmetros) para operações completas de CRUD.
- **Armazenamento**: Uso de arrays in-memory para evitar complexidade inicial, permitindo foco na lógica de API.
- **Boas Práticas**: Separação de responsabilidades em rotas, tratamento de erros básico, e uso de status HTTP apropriados.
- **Ferramentas**: Todos os arquivos usam Express.js, demonstrando familiaridade com o framework.
- **Próximos Passos**: Transição para controladores separados, integração com banco de dados real (ex.: Sequelize), e validação avançada.

Esses exercícios formam a base para os estudos mais avançados no projeto, como a implementação de uma API estruturada na pasta `src/`.
