document.addEventListener('DOMContentLoaded', function() {
  exibirbd();
});

var favorites = JSON.parse(localStorage.getItem('favoritesbd')) || [];

console.log(favorites);

function cadastrar() {
  var nome = document.getElementById("nomemidia").value;
  var poster = document.getElementById("fotomidia").value;
  var texto = document.getElementById("review").value

  document.getElementById("cadastro2").innerHTML = "";

  var filme = {
    nome: nome,
    poster: poster,
    review: texto
  };

  favorites.push(filme);

  for (var i in favorites) {
    document.getElementById("cadastro2").innerHTML += `${favorites[i].nome}<br><img src="${favorites[i].poster}"><br>`;
  }

  localStorage.setItem('favoritesbd', JSON.stringify(favorites));
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
  var favoritesParagraph = document.getElementById("cadastro2");
  favoritesParagraph.innerHTML = "";

  for (var i = 0; i < favorites.length; i++) {
    favoritesParagraph.innerHTML += `<div class="aaasss">${favorites[i].nome}<br><img src="${favorites[i].poster}"></div>`;
  }
}
function exibirreview() {
  var reviewParagraph = document.getElementById("reeview");
  reviewParagraph.innerHTML = "";

  for (var i = 0; i < favorites.length; i++) {
    reviewParagraph.innerHTML += `<div class="reeview"><img src="${favorites[i].poster}" class="reviewimg"><div class="empilhando"><h1 class="user">${favorites[i].nome}</h1><p class="textoreview">${favorites[i].review}</p></div></div>`;
  }
}
