

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



