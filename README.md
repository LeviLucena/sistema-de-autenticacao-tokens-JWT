# Sistema de Autenticação com Tokens JWT

Este projeto é um exemplo de um sistema de autenticação utilizando tokens JWT (JSON Web Tokens). Ele consiste em um frontend simples em HTML, CSS e JavaScript, que se comunica com um servidor Node.js para autenticar usuários e gerar tokens JWT para autorização.

## Funcionalidades

- Interface de usuário para inserção de nome de usuário e senha.
- Verificação de credenciais no servidor Node.js.
- Geração de token JWT após autenticação bem-sucedida.
- Uso de CORS para permitir solicitações do frontend.

## Pré-requisitos

Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Instalação e Execução

1. Clone o repositório para o seu ambiente local: `git clone https://github.com/seu-usuario/seu-repositorio.git`

2. Navegue até o diretório do backend: `cd seu-repositorio/backend`

3. Instale as dependências do servidor: `npm install`

4. Inicie o servidor: `node server.js`

5. Abra outro terminal e navegue até o diretório do frontend: `cd seu-repositorio/frontend`


6. Inicie o servidor frontend (por exemplo, usando o Live Server no VS Code).

7. Abra o navegador e acesse a URL do frontend (normalmente `http://localhost:5500`).

## Personalização

- Personalize a lógica de autenticação no arquivo `server.js` de acordo com as suas necessidades.
- Ajuste o frontend (`index.html`, `style.css` e `script.js`) conforme o design da sua aplicação.

## Notas

Este projeto é apenas um exemplo educacional para demonstrar o processo de autenticação com tokens JWT. Em um ambiente de produção, você deve considerar aspectos de segurança, armazenamento seguro de chaves, uso de HTTPS, entre outros.

Lembre-se de substituir seu-usuario e seu-repositorio pelas informações reais do seu perfil e repositório no GitHub. Além disso, personalize os detalhes conforme necessário para refletir a estrutura e os recursos do seu projeto.

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.



