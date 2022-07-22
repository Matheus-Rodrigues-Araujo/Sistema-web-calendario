# Sistema-web-calendario v2

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
- JSON

# Framework
- Express.js

# Características e Funcionalidades

- cadastro
- login
- eventos com javascript
- agendamento de eventos
- responsividade
- modificação de arquivos json

# Imagens

![Web_calendario2](https://user-images.githubusercontent.com/68081476/176588392-da470121-678c-49bc-8422-6327d4b149d7.png)

![Web_calendario3](https://user-images.githubusercontent.com/68081476/176588410-881a7646-0982-4735-b651-779b986a11a4.png)


![Web_calendario4](https://user-images.githubusercontent.com/68081476/176588423-36a75f61-9169-4d71-83dc-86ce88d3566b.png)

![Web_calendario5](https://user-images.githubusercontent.com/68081476/176588435-10c1c900-c1a6-4eb5-9c56-3a49923aa7e8.png)

![Web_calendario6](https://user-images.githubusercontent.com/68081476/176588448-9fe27f6f-37db-4439-8d11-856c1aa3ee61.png)

# Preparando ambiente

1°: Abrir o Vscode e selecionar a pasta;

2°: Vá até esse link https://fullcalendar.io/docs/initialize-globals e clique em download para baixar. Depois do download, extrai-a o arquivo. Depois da extraçãoe, mude o nome da pasta gerada para fullcalendar; 

3°: Na pasta do projeto crie uma pasta chamada public e adicione somente as outras pastas, para ficar desse jeito:

![pasta1](https://user-images.githubusercontent.com/68081476/176587616-020bacd3-bc7d-4411-9997-9e4abd657d49.png)

![pasta2](https://user-images.githubusercontent.com/68081476/176587622-90e309b6-162c-4393-b638-ec40b4219c1b.png)


4°: Depois de escolher, ir até o terminal e digite: npm init. Após isso você configura com as suas preferências, e no final notará a criação de um package.json na sua pasta;

5° Instalar o express no terminal, e para isso digita-se no terminal: npm install express. Você notará que haverá novos arquivos no seu diretório;

6°: Instalar o nodemon para o servidor receber atualizações sem ter que parar: npm install -g nodemon;

7° Após o nodemon ser instalado, vá no package.json e em scripts adicione: "start": "nodemon server.js". Agora todo vez que quiser rodar o servidor, basta abrir o terminal e digitar : npm run start;

8°: Digite npm run start no terminal para rodar o servidor;

9°: No seu navegador digite na url: localhost:8000

# Como utilizar

Basta fazer o cadastro e ir para página de login. Depois de ter o login aceito, você irá para uma página com calendário. A partir daí basta clicar em um dia e definir as informações para agendar um evento.
