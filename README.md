# Desafio-Serasa-Api-typescript

Projeto feito com typescript para registro de empresas e colocar suas contas e nele se da um score da empresa.

## Bibliotecas utilizadas.

- bcryptjs;
- cors;
- express;
- express-async-errors;
- jsonwebtoken;
- multer;
- mysql2;
- reflect-metadata;
- typeorm;
- uuidv4;

## Bibliotecas utilizadas para estilização de cod.

- eslint;
- prettier;
- editorconfig🐭

## Como executar.

De um `yarn` para baixar as dependencias, criar uma pasta chamada config dentro da pasta src, criar um arquivo **auth.ts** e um arquivo chamado **upload.ts**.
Depois crie um arquivo **ormconfig.json** para configurar o typeorm.
Quando finalizado executar o comando ` yarn typeorm migration:run` para ele criar as tabelas no banco.

Para executar a api `yarn dev:server`.

## Atenção 🏮

O projeto inicialmente está pronto para utilizar o mysql, caso for para utilizar outro banco consultar o [typeorm.io](typeorm), baixar os drivers necessários e modificar os arquivo contidos na pasta **database**.
