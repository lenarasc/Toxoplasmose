

    let contagemParticipantes = 0;
document.getElementById('participation').onsubmit = function() {
    contagemParticipantes++;
    alert('Obrigada pela sua participação! Você é o participante número ' + contagemParticipantes);
}


  var firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    databaseURL: "https://SEU_PROJETO-default-rtdb.firebaseio.com/",
    projectId: "SEU_PROJETO",
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  function enviar(msg) {
    database.ref("mensagem").set(msg);
  }





/*
se eu quiser que um campo do formulário seja opcional eu coloco no HTML o atributo
optional no input do campo que eu quero que seja opcional.
e para eu linkar o formulário com o google forms eu pego o link do google forms e coloco no atributo action do form no HTML.
Exemplos:
<form action="link do google forms" method="post">
isso eu coloco dentro da tag form no HTML.
e para colocar a lista de participantes eu crio uma planilha no google sheets e linko com o google forms.
dai quando a pessoa preencher o formulário, as respostas vão para a planilha automaticamente.
e para fazer isso eu faço da seguinte forma:
1. Crio o formulário no google forms.
2. Vou na aba de respostas do formulário.
3. Clico no ícone de planilha verde para criar uma planilha vinculada.
4. A partir disso, todas as respostas do formulário serão enviadas para essa planilha automaticamente.
então resumindo:
1. Crio o formulário no google forms.
2. Linko o formulário com uma planilha no google sheets.
3. Coloco o link do formulário no atributo action do form no HTML.
4. Adiciono o atributo optional nos inputs que eu quero que sejam opcionais.
5. Adiciono o alerta no botão de enviar do formulário com o atributo onclick no HTML ou com javascript linkado ao HTML.
e a contagem de participantes é feita automaticamente pelo google forms na aba de respostas.

mas sem querer usar o google forms, eu posso fazer um formulário simples 
em HTML e javascript, e salvar as respostas em um arquivo de texto ou em um banco de dados.
e a contagem de participantes eu faço com javascript, contando quantas vezes o formulário foi enviado.
para fazer isso eu crio uma variável que vai armazenar a contagem de participantes,
 e toda vez que o formulário for enviado, eu incremento essa variável em 1.
é feito assim:
let contagemParticipantes = 0;
document.getElementById('idDoFormulario').onsubmit = function() {
    contagemParticipantes++;
    alert('Obrigada pela sua participação! Você é o participante número ' + contagemParticipantes);
}

isso é colocando dentro da tag script no HTML ou em um arquivo javascript linkado ao HTML.
e feito assim:
let contagemParticipantes = 0;
document.getElementById('idDoFormulario').onsubmit = function() {
    contagemParticipantes++;
    alert('Obrigada pela sua participação! Você é o participante número ' + contagemParticipantes);

}


e para vincular a um banco de dados, eu posso usar o firebase ou outro serviço de banco de dados online.
que é mais complexo, mas é possível.
chamado de backend.
e o programa usado é o node.js com express.js para criar uma API que vai receber os dados do formulário e salvar no banco de dados.
e para linkar com esse forumlário
<form  id="presenca">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <br><br>
            <label for="idade">Idade:</label>
            <input type="number" id="idade" name="idade" required>
            <br><br>
            <label for="email"> E-mail: </label>
       <input id="email" name="email" optional>
       <br><br>
            <button type="submit" id="clickButton">Enviar</button>
            </form>

            para linkar ocm esse formulário, eu faço assim:
document.getElementById('presenca').onsubmit = function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    contagemParticipantes++;
    alert('Obrigada pela sua participação! Você é o participante número ' + contagemParticipantes);
    // Aqui você pode adicionar o código para enviar os dados para o backend
};
    exemplo de código backend com node.js e express.js:
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

let contagemParticipantes = 0;
app.post('/submit', (req, res) => {
    contagemParticipantes++;
    const participante = {  
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email,
        numeroParticipante: contagemParticipantes
    };
    // Aqui você pode salvar o participante no banco de dados
    res.json({ message: 'Obrigada pela sua participação!', participante });
});


e para enviar esses dados a um email, eu posso usar o serviço de email do nodemailer.
que é um serviço de email para node.js.
e é assim:
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '         


        posso gambém enviar diretamente para um email de forma simples usando usando este site
        formsubmit.co
        que é um serviço gratuito que envia os dados do formulário para um email.
        e para usar esse serviço, eu faço assim:
<form action="https://
e também faço assim:

dá pra colocar um texto de agradecimento após o envio do formulário, no prórpio html sem se rjavascript
fica assim:
<form id="presenca" action="https://
ai adiciono um elemento div com o texto de agradecimento, e deixo ele escondido com CSS.
<div id="agradecimento" style="display:none;">
    <p>Obrigada pela sua participação!</p>
</div>

isso para aparecer após o envio do formulário.
e faz assim de forma completa no css e no html:
#agradecimento {
    display: none;
    color: green;
    font-weight: bold;
}
document.getElementById('presenca').onsubmit = function(event) {
    event.preventDefault();     
    contagemParticipantes++;
    document.getElementById('agradecimento').style.display = 'block';
}

no html:
<form id="presenca" action="https://
    <div id="agradecimento" style="display:none;">
        <p>Obrigada pela sua participação!</p>
    </div>
</form>


para centralizar o formulário na página, eu uso CSS.
da seguinte forma:
form {
    margin: 0 auto;
    width: 50%;
    text-align: left;
}

para remover a decoraçao do <li></li> no css, faz o seguinte:


*/