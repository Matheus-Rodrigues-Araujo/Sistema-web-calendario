# Sistema-web-calendario

####### OBS

* Projeto em desenvolvimento....
* A imagem utilizada foi somente para esse projeto, que não visa nenhum lucro

![Web_calendario1](https://user-images.githubusercontent.com/68081476/176588363-233c8b98-8316-4e10-bb68-0eb39be7bd4e.png)
# Sobre

Esse é um sistema web com o propósito de agendar os compromissos das pessoas através de um calendário. Para funcionar o usuário se registra e depois digita as informações salvas para poder logar.


# Tecnologias utilizadas

- HTML
- CSS
- JAVASCRIPT
- NODE.js

# Framework
- Express.js

# Características e Funcionalidades

- Cadastro
- Login
- Autentificação dos dados
- Utilização de rotas para controlar como será o fluxo da aplicação
- Implementação de Sessões e Cookies
- Eventos com javascript
- Agendamento de eventos
- Validação de formulários
- Responsividade
- Utilização do banco de dados MySQL

# Imagens

![Web_calendario2](https://user-images.githubusercontent.com/68081476/176588392-da470121-678c-49bc-8422-6327d4b149d7.png)

![Web_calendario3](https://user-images.githubusercontent.com/68081476/176588410-881a7646-0982-4735-b651-779b986a11a4.png)


![Web_calendario4](https://user-images.githubusercontent.com/68081476/176588423-36a75f61-9169-4d71-83dc-86ce88d3566b.png)

![Web_calendario5](https://user-images.githubusercontent.com/68081476/176588435-10c1c900-c1a6-4eb5-9c56-3a49923aa7e8.png)

![Web_calendario6](https://user-images.githubusercontent.com/68081476/176588448-9fe27f6f-37db-4439-8d11-856c1aa3ee61.png)

# Preparando ambiente

1°: Abrir o Vscode e selecionar a pasta;

2°: Vá até esse link https://fullcalendar.io/docs/initialize-globals e clique em download para baixar. Depois do download, extraia o arquivo. Depois da extração, mude o nome da pasta gerada para fullcalendar e adicione essa pasta em public; 

3°: Depois disso, vá até o terminal e digite: npm init. Após isso você configura o seu package.json com as suas preferências para poder salvá-lo;

4°: Com o package.json configurado, abra o terminal e digite o seguinte comando para instalar todas as dependências necessárias: npm intall express ejs express-session mysql2 nodemon connect-flash;

5° Após as depêndencias serem instaladas, vá no package.json e em scripts adicione: "start": "nodemon server.js" e salve o arquivo. Agora todo vez que quiser rodar o servidor, basta abrir o terminal e digitar : 'npm run start' ou 'npm start';

6°: Digite 'npm run start' ou 'npm start' no terminal para rodar o servidor;

7°: No seu navegador digite na url: localhost:8000

8°: Utilize a aplicação e sinta-se livre para contribuir para o projeto
# Como utilizar

1°: Vá na página de Cadastro clicando no link abaixo da página de login.

2°: Insira as suas informações e clique no botão para salvar para ser redirecionado para a página de Login

3°: Na página de login, insira as suas informações para logar

4°: Na página de agendamento, quando você clicar em um dia no calendário, você verá um formulário para agendar um evento pessoal. Depois de preencher os campos, basta clicar em salvar e no final da página você verá que o evento que
você agendou está lá. Se não quiser salvar um novo evento basta clicar em cancelar.

5°: Quando quiser fazer o logout, basta clicar no botão 'X'.

# Sobre a sua Sessão

- Se você não tiver feito o logout e fechou a aba do navegador, digite na url: http://localhost:8000 para voltar para a
  página de agendamento.


