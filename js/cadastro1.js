document.addEventListener('DOMContentLoaded', function() {
  exibirbd();
});

var watchlist = JSON.parse(localStorage.getItem('watchlistbd')) || [];

console.log(watchlist);

function cadastrar() {
  var nome = document.getElementById("nomemidia").value;
  var poster = document.getElementById("fotomidia").value;

  document.getElementById("cadastro1").innerHTML = "";

  var filme = {
    nome: nome,
    poster: poster
  };

  watchlist.push(filme);

  for (var i in watchlist) {
    document.getElementById("cadastro1").innerHTML += `${watchlist[i].nome}<br><img src="${watchlist[i].poster}"><br>`;
  }

  localStorage.setItem('watchlistbd', JSON.stringify(watchlist));
}

// Função para abrir o modal
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Fechar o modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function exibirbd() {
  var watchlistParagraph = document.getElementById("cadastro1");
  watchlistParagraph.innerHTML = "";

  for (var i = 0; i < watchlist.length; i++) {
    watchlistParagraph.innerHTML += `<div class="aaasss">${watchlist[i].nome}<br><img src="${watchlist[i].poster}"></div>`;
  }
}
