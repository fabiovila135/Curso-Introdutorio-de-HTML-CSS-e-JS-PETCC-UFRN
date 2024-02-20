let numero1 = Number(prompt("Insira a primeira nota: "));
let numero2 = Number(prompt("Insira a segunda nota: "));
let numero3 = Number(prompt("Insira a terceira nota: "));
let numero4 = Number(prompt("Insira a quarta nota: "));

let media = ((numero1+numero2+numero3+numero4)/4);

if (media >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado");
}
