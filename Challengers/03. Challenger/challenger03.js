// Declarar uma variável qualquer, que receba um objeto vazio.

let pessoa = {
    nome: String,
    sobrenome: String,
    sexo: String,
    idade: Number,
    altura: Number,
    peso: Number,
    andando: Boolean,
    caminhouQuantosMetros: 0,
}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
pessoa.nome = "Ana"
pessoa.sobrenome = "Vitoria"
pessoa.sexo = "F"
pessoa.idade = -2;
pessoa.altura = 1.78
pessoa.peso = 62 
pessoa.andando = false
pessoa.caminhouQuantosMetros = -239


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que for chamado. */

function fazerAniversario () {
    let resultado = pessoa.idade +1
    pessoa.idade = resultado
    console.log("Parabéns pelo seus " + resultado + " anos!")
    return resultado
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes características:
- Esse método deve receber por parâmetro um valor que representará a quantidade de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor booleano que representa "verdadeiro";
*/

function andar (x) {
    let resultado = pessoa.caminhouQuantosMetros + x
    pessoa.caminhouQuantosMetros = resultado 
    pessoa.andando = true ;
    console.log("Você andou " + resultado + "m.");
    return resultado
}


/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
function parar () {
    pessoa.andando = false
    console.log("A pessoa parou de andar." + " Aqui é o valor dentro do objeto: " + pessoa.andando);
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
function nomeCompleto () {
    console.log("Olá! Meu nome é " + pessoa.nome + " " + pessoa.sobrenome);
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
function mostrarIdade () {
    console.log("Olá, eu tenho " + pessoa.idade)
    return pessoa.idade
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
function mostrarPeso () {
    console.log("Eu peso " + pessoa.peso + "Kg");
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
function mostrarAltura () {
    console.log("Minha altura é " + pessoa.altura + "m")
    return pessoa.altura
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
nomeCompleto() //Olá! Meu nome é Joao Victor

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
mostrarIdade() // Olá, eu tenho 21

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
mostrarPeso() //Eu peso 62Kg

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
mostrarAltura() //Minha altura é 1.78m

/*
Faça a `pessoa` fazer 3 aniversários.
*/
fazerAniversario() //Parabéns pelo seus 22 anos!
fazerAniversario() //Parabéns pelo seus 23 anos!
fazerAniversario() //Parabéns pelo seus 24 anos!

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log("Agora eu tenho " + pessoa.idade + " anos.") //Agora eu tenho 24 anos.

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
andar(30) //Você andou 30m.
andar(90) //Você andou 120m.
andar(120) //Você andou 240m.

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log("A pessoa ainda está andando? " + "Aqui é o valor dentro do objeto: " + pessoa.andando); //A pessoa ainda está andando? Aqui é o valor dentro do objeto: true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
parar() // A pessoa parou de andar. Aqui é o valor dentro do objeto: false

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.andando) //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log("Ela andou " + pessoa.caminhouQuantosMetros + "m.") //Ela andou 240m.

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/


// Agora, apresente-se ;)
function apresentacao () {
    let genero = "o"
    let umIdade = "anos"
    let umMetro = "metros"
        if (pessoa.sexo == "F") {
            genero = "a"
        } if (pessoa.idade == 1) {
            umIdade = "ano"
        } if (pessoa.caminhouQuantosMetros == 1) {
            umMetro = "metro"
        } 
   document.write(`Olá eu sou ${genero} ${pessoa.nome} ${pessoa.sobrenome} , tenho ${pessoa.idade} ${umIdade}, com ${pessoa.altura} de altura, meu peso é ${pessoa.peso}Kg e só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${umMetro}.` )
}
apresentacao()