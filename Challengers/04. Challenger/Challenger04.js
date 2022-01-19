/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe um único parâmetro como argumento. Essa função deve retornar `true` se o equivalente booleano para o valor passado no argumento for `true`, ou `false` para o contrário.
*/
function isTruthy (x) {
    if (x) {
      return true     
    } else {
        return false
    }
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log("Essa é " + isTruthy(0, null, undefined, NaN, ""))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log("Essa é " + isTruthy(1,2,3,4,5,6,7,8,9,10))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let carro = {
    marca: "Honda",
    modelo: "Civic",
    placa: "QAD-0594",
    ano: 2018,
    cor: "Vermelho",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudarCor (cor) {
    let res = cor 
    carro.cor = res
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function obterCor () {
    console.log(carro.cor);
    return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function obterModelo () {
    return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function obterMarca () { 
    return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function obterMarcaModelo () {
    console.log(`Esse carro é um ${carro.marca} ${carro.modelo}`)
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
function pessoasNoCarro (x) {
    let pessoasQueCabem = 5 - carro.quantidadePessoas

    if (carro.quantidadePessoas < 5) {
        
         if( pessoasQueCabem == 1 && x > 1){
            console.log(`Só cabe mais ${pessoasQueCabem} pessoa`)

        } else if(carro.quantidadePessoas + x > 5) {
            console.log(`Só cabem mais ${pessoasQueCabem} pessoas`)

        } else {
            let res = carro.quantidadePessoas + x
            carro.quantidadePessoas = res
            console.log(`Já temos ${res} pessoas no carro!`);
        }
    } else {
        console.log("O carro já está lotado")
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
obterCor() //Vermelho

// Mude a cor do carro para vermelho.
mudarCor("Cinza")

// E agora, qual a cor do carro?
obterCor() // Cinza

// Mude a cor do carro para verde musgo.
mudarCor("Verde musgo")

// E agora, qual a cor do carro?
obterCor() //verde musgo

// Qual a marca e modelo do carro?
obterMarcaModelo () //Esse carro é um Honda Civic

// Adicione 2 pessoas no carro.
pessoasNoCarro(2) //Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
pessoasNoCarro(4) //Só cabem mais 3 pessoas

// Faça o carro encher.
pessoasNoCarro(3) //Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
function tirarPessoa (x) {
    let resultado = carro.quantidadePessoas - x
    carro.quantidadePessoas = resultado
    console.log(`Foram retiradas ${x} pessoas e agora temos ${carro.quantidadePessoas} pessoa no carro`)
}
tirarPessoa(4) // Foram retiradas 4 e agora temos 1 pessoa no carro

// Adicione 10 pessoas no carro.
pessoasNoCarro(10) // Só cabem mais 4 pessoas

// Quantas pessoas temos no carro?
console.log(`No momento o carro está com ${carro.quantidadePessoas} pessoa`)
