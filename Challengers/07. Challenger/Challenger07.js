/*
Crie um array com 5 items (tipos variados).
*/
const variados = ["maça", 1, true, "laranja", 20]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem (obj) {
    variados.push(obj)
    console.log(variados)
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(["banana", "morango", "mango", "laranja"])

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
document.write(`O segundo elemento do segundo array é  <b>${variados[5][1]}.</b><p></br>`)
console.log(`O segundo elemento do segundo array é ${variados[5][1]}.`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
document.write(`O primeiro array criado tem <b>${variados.length}</b> itens.<p></br>`)
console.log(`O primeiro array criado tem ${variados.length} itens`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
document.write(`O segundo array criado tem <b>${variados[5].length}</b> itens.<p></br>`)
console.log(`O segundo array criado tem ${variados[5].length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let numeroPar = 10;
const arrayPar = []

function par () {
        
    while(numeroPar <= 20){
    if (numeroPar%2 == 0 ) {
        arrayPar.push(numeroPar)
    } else if (numeroPar == 20) {
        break
}
    numeroPar++
 }
 console.log(arrayPar);    
}
par()
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
let numeroImpar = 10;
const arrayImpar = []

function impar () {
        
    while(numeroImpar <= 20){
    if (numeroImpar%2 !== 0 ) {
        arrayImpar.push(numeroImpar)
    } else if (numeroImpar == 20) {
        break
}
    numeroImpar++
 }
 console.log(arrayImpar);    
}
impar()

// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
let forParArray = []
function verificaoForPar () {
    for (let i = 100; i <= 120; i++ ) {
        if (i%2 == 0) {
            forParArray.push(i)
        }
    }
    console.log(forParArray)
}
verificaoForPar ()

let forImparArray = []
function verificaoForImpar () {
    for (let i = 111 ; i <= 125 ; i ++) {
        if (i%2 !== 0) {
            forImparArray.push(i)
        }
    }
    console.log(forImparArray)
}
verificaoForImpar ()
