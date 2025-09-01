let usuarios = [];

function usuario() {

    let nome = prompt("Qual o seu nome?");
    
    while (usuarios.includes(nome)) {

        nome = prompt("Esse nome já existe. Escolha outro nome:");

    }
    
    usuarios.push(nome);

    console.log("Usuários cadastrados:", usuarios);
}

usuario();
console.log(axios);