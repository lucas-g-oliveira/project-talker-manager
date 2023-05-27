# Talker Manager (API-REST)

### Projeto de backend sem frontend

Criar uma API Rest com funções de CRUD para gerênciar palestrantes usando Docker, Express e a lib fs.

## Como usar:
Esse servidor roda na porta 3000, certifique-se que ela não está em uso no momento, ou o app não irá funcionar

1º clone o repositório:
```bash
git clone git@github.com:lucas-g-oliveira/project-talker-manager.git
```
2º Instale as dependências e inicie a aplicação
```bash
npm install && npm start
```
<br>

## Executando: <br>
___________________________
### Você pode testar com o Insomnia, Postman ou a extenção Thunder Client do vscode <br><br>

## Endpoints: <br>
Adicionar palestrante:
```
http://localhost:3000/talker/

PUT

REQUEST EX: 

HEADERS: 
{ authorization: token }
BODY:{
  "name": "Danielle Santos",
  "age": 56,
  "talk": {
    "watchedAt": "22/10/2019",
    "rate": 5
   }
}
```
Logar na API:
```BASH
POST

  {
    body: {
      "email": "email@email.com",
      "password": "123456",
    }
  }

  RESPONSE: {"token": "TOKEN ALEATÓRIO"}
```
Buscar um palestrante pelo id:
```http
GET - http://localhost:3000/talker/:id

RESPONSE EX:
{
  "name": "Henrique Albuquerque",
  "age": 62,
  "id": 1,
  "talk": { "watchedAt": "23/10/2020", "rate": 5 }
}
```
Buscar todos os palestrantes:
```bash
http://localhost:3000/talker/

GET

RESPONSE EX: [
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
]
```
Buscar um palestrante pelo nome:
```
http://localhost:3000/talker/search?q=Da

GET

RESPONSE EX:
[
  {
    "id": 1,
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5,
    },
  }
]
```
Editar informações do palestrante:
```
http://localhost:3000/talker/:id

PUT

REQUEST EX:

{
  body: {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
}

RESPONSE:

{
  body: {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
}
```
Deletar um palestrante:
  ```http
  http://localhost:3000/talker/:id

  RESPONSE EX:

  OK
  ```

  ADICIONAR

## Objetivo:
<section>
- Criar uma API de CRUD
</br> - Praticar aprendizados de Docker
</br> - Praticar aprendizados de Express
</br> - Manipular dados a partir de arquivo do sistema de arquivos

</section>

</br>



</br>

## Créditos:

- Desenvolvido por mim: Os `requisitos alcançados` e `objetivos` citados acima e readme.md.

- Desenvolvido pela Trybe: Todo conteúdo, testes, configurações e etc, exceto o desenvolvido por mim conforme citado acima.


