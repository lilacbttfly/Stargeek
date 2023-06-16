var login = JSON.parse(localStorage.getItem('loginbd'));

console.log(login);

function next() {
    var usuario = document.getElementById("user").value;
    var senha = document.getElementById("senha").value;

    var logando = {
        usuario: usuario,
        senha: senha,
    };

    var encontrado = false;

    for (var i = 0; i < login.length; i++) {
        if (logando.usuario === login[i].nome && logando.senha === login[i].pass) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        window.location.href = "profile.html";
    } else {
        alert("Verifique os dados.");
    }
}
