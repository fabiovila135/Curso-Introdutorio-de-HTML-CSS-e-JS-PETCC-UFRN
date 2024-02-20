let soma = 0;
let numero = 0;

function enviarInformacoes() {
//    let soma = 0
    let numero = Number(document.getElementById("numero").value);
    soma = soma + numero;
    document.getElementById("numero").value = "";

    if (numero === 0) {
        console.log("A soma dos números inseridos foi: " + soma);
    }
}