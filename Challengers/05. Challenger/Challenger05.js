/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios - ao menos 5 - (fica por sua conta os valores do array).
*/
// 
let fruta = ["banana", "maça", "morango", "uva", "laranja"]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
function retornarArray (arr) {
    let arrayTeste = arr
    console.log(arrayTeste)
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
    console.log(arr[1])
}
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function doisParametros (arr, x) {
    let arrTeste = arr
    console.log(arrTeste)
    console.log(arrTeste, arrTeste[x])
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const tiposDiferentes = ["banana", 10, true, "maça", 3]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
doisParametros(tiposDiferentes)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
const todosOsLivros = [
    {
        nomeDoLivro: "Narnia",
        quantidadePaginas: 600,
        autor: "Fulano",
        editora: "Qualquer coisa"
    } ,

    {
        nomeDoLivro: "Biblia",
        quantidadePaginas: 1500,
        autor: "Não sei",
        editora: "Capitalismo"
    },

    {
        nomeDoLivro: "Tosco",
        quantidadePaginas: 150,
        autor: "Um cara brasileiro",
        editora: "Aurora"

    }]
    
function book (livro)  {
    for (let i = 0; i < todosOsLivros.length; i++) {
        let resultado = todosOsLivros[i]

        if (livro == "Narnia" && resultado.nomeDoLivro == "Narnia") {
            console.log(todosOsLivros[i])
            console.log(`O livro ${todosOsLivros[i].nomeDoLivro} tem ${todosOsLivros[i].quantidadePaginas} páginas!`)

        } else if (livro == "Biblia" && resultado.nomeDoLivro == "Biblia") {
            console.log(todosOsLivros[i])
            console.log(`O livro ${todosOsLivros[i].nomeDoLivro} tem ${todosOsLivros[i].quantidadePaginas} páginas!`)

        } else if (livro == "Tosco" && resultado.nomeDoLivro == "Tosco") {
            console.log(todosOsLivros[i]);
            console.log(`O livro ${todosOsLivros[i].nomeDoLivro} tem ${todosOsLivros[i].quantidadePaginas} páginas!`)
     
        } else if (livro == undefined) {
            console.log(todosOsLivros)
        }
        
    }
    
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

    console.log(`O livro "${todosOsLivros[0].nomeDoLivro}" tem ${todosOsLivros[0].quantidadePaginas} páginas!`)
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
    console.log(`O autor do livro "${todosOsLivros[1].nomeDoLivro}" é ${todosOsLivros[1].autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro "${todosOsLivros[1].nomeDoLivro}" foi publicado pela editora ${todosOsLivros[1].editora}`)