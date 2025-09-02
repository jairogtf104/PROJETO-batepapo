let link = "https://mock-api.driven.com.br/api/v6/uol/participants/8ce47bee-8e47-49f6-b98b-231213319d85";

let usuarios = [];

function usuario() {

    let nome = prompt("Qual o seu nome?");
    
    while (usuarios.includes(nome)) {

        nome = prompt("Esse nome já existe. Escolha outro nome:");

    }
    
    usuarios.push(nome);

    let teste = axios.post("http://127.0.0.1:5500/chat.html");

    teste.then(deucerto);

}

function deucerto () {

    comsole.log("deu certo");

}

usuario();