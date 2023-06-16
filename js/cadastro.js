var login = [];
login = JSON.parse(localStorage.getItem('loginbd')) || [];

console.log(login);

function confir() {
    var usuario = document.getElementById("newuser").value;
    var senha = document.getElementById("senhaa").value;
    var senha1 = document.getElementById("senhaa1").value;

    if (senha != senha1) {
        alert('Verifique os dados');
        return;
    }

    var confirmuser = {
        nome: usuario,
        pass: senha,
    };

    login.push(confirmuser);
    localStorage.setItem('loginbd', JSON.stringify(login));

    exibircadastro()
}

function exibircadastro() {
    var cadastroHTML = '';
    for (var i = 0; i < login.length; i++) {
        cadastroHTML += `${login[i].nome} se cadastrou como ${login[i].nome}<br>`;
    }
    document.getElementById("cadastro").innerHTML = cadastroHTML;
}