# PDF to JSON API

Esta API foi desenvolvida em **Node.js** utilizando **Express** e a biblioteca **pdf2json**. Ela recebe um documento PDF via POST e retorna seu conteúdo como um objeto JSON. A transformação facilita o entendimento de dados contidos em documentos PDF, permitindo que esses dados sejam consumidos por sistemas, inclusive por inteligência artificial (IA).

## Funcionalidades

- **Envio de PDF**: Envie um arquivo PDF via uma requisição POST.
- **Conversão para JSON**: A API converte o conteúdo do PDF em um formato JSON estruturado.
- **Desempenho**: Processa rapidamente arquivos PDF, tornando os dados acessíveis de maneira organizada.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **Multer**: Middleware para manipulação de arquivos em formulários.
- **pdf2json**: Biblioteca para conversão de PDFs em JSON.
- **CORS**: Habilitado para permitir chamadas de qualquer origem.

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/usuario/pdf-to-json-api.git
cd pdf-to-json-api
```

2. Instale as dependências

Certifique-se de que o Node.js esteja instalado e, em seguida, execute os comandos abaixo:

```
  npm install
  node server.js
```

o projeto vai rodar na porta 3000 depois basta ir na pasta do front e executar o index.html que vai funcionar
