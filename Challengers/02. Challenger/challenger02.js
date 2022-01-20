// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma (n1, n2) {
    var resultado = n1+n2
    return resultado
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let somarDenovo = soma(2,3) + 5

// Qual o valor atualizado dessa variável?

// RESPOSTA: O resultado é 10.

// Declare uma nova variável, sem valor.
var resultado;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addString () {
    resultado = "VALOR"
}

// Invoque a função criada acima.
addString()
console.log(resultado)

// Qual o retorno da função? (Use comentários de bloco).
     // RESPOSTA: Retornar a váriavel Resultado com o "VALOR", dentro.   

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function threeValues (a,b,c) {
    if ( a && b && c ) {
        if ( !isNaN(a) && !isNaN(b) && !isNaN(c)) {
            let resultado = (a*b*c)
            resultado += 2
            return resultado

        } else {
        console.log("Preencha todos os valores corretamente!")
    }  
} else {
    console.log("Preencha os três campos")
}
}

// Invoque a função criada acima, passando só dois números como argumento.
var doisNumeros = threeValues(2,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado). 
//RESPOSTA: UNDEFINED

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
var tresNumeros = threeValues(1,2,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//RESPOSTA: 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function threeArgument (a,b,c) {
    if (a && !b && !c){
        console.log(a)
        return a
    } else if (a && b && !c) {
        let resultado = a+b 
        console.log(resultado)
        return resultado
    } else if (a && b && c) {
        let resultado = (a+b)/c
        console.log(resultado)
        return resultado
    } else if (!a && !b && !c) {
        console.log(false)
        return false;
    } 
    else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

threeArgument() //False
threeArgument(1) // 1
threeArgument(4,2) // 6
threeArgument(4,2,3) // 2
