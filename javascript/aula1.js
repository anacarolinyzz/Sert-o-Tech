alert("Olá");

let nome = prompt("Qual é o seu nome?");
alert("seja bem-vindo(a) " + nome);

console.log(nome, "entrou no site");

const cidade = prompt("digite a sua cidade: ");
let idade = prompt("digite a sua idade: ");
console.log(`${nome} é de ${cidade} e tem ${idade} anos`); 

// atividade 3 e 4
function soma(a,b) {
    return a+b
}
function subtracao(a,b) {
    return a-b
} 
function mult(a,b) {
    return a*b
}
function divisao(a,b) {
    return a/b
}
function resto(a,b) {
    return a%b
}
function comparacao(a,b){
    return a===b
}

comp = ""
num = Number(prompt("digite um número: "));
num2 = Number(prompt("digite outro número: "));
if (comparacao(num,num2) == true) {
    comp = " os números são iguais"
} else {
    comp = "os números não são iguais"
}

console.log(`Soma -> ${num}+${num2} = ${soma(num,num2)}\nSubtração -> ${num}-${num2} = ${subtracao(num,num2)}\n Multiplicação -> ${num}x${num2} = ${mult(num, num2)} \n Divisão -> ${num}/${num2} = ${divisao(num,num2)} \n Resto da divisão -> ${num}//${num2} = ${resto(num,num2)} \n ${comp}`);
 
//atv 6

let frutas = [];
let entrada, fruta = "";
while (entrada !== "fim") {
    fruta = prompt("digite uma fruta: ")
    frutas.push(fruta)
    entrada = prompt("se quiser sair digite 'fim'.")
}
frutas.pop()
console.log(frutas) 

// atv 7

if (idade >= 18) {
    console.log("maior de idade")
} else if (idade >= 16){
    console.log("Pode votar opcionalmente")
} else {
    console.log("menor de idade")
} 
// atv 8
i = 1
for (i = 1; i <= 10; i++) {
    console.log(i)
}
entrada = ""
while (entrada !== "sair") {
    let tabuada = Number(prompt("esolha um número para aparecer a tabuada: "))
    for (i = 1; i <= 10; i++) {
        console.log(`${tabuada}x${i} = ${mult(i,tabuada)}`)
    }
    entrada = prompt("deseja sair? digite sair.")
}


