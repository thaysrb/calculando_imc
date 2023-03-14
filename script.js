/* Thays Rodrigues Barboza - 224782 */

function calculaImc(peso, altura) {
    return peso / (altura * altura)
}


function resultadoImc(imc) {
if(imc < 18.5)
{
    return "Magreza"
} 
else if(imc >= 18.5 && imc <= 24.9)
{
    return "Normal"
}
else if(imc >= 25 && imc <= 29.9)
{
    return "Sobrepeso"
}
else if(imc >= 30 && imc <= 39.9)
{
    return "Obesidade"
}
else if(imc >= 40)
{
    return "Obesidade Grave"
}
}

// Itens 1, 2 e 3
var peso = 74
var altura = 1.65
var imc = calculaImc(peso, altura)
console.log(resultadoImc(imc))

/*  Item 3
    Crie um vetor "peso" com 5 pesos e um vetor "altura" com 5 alturas. 
    Crie um vetor "imc" com cinco valores de imc calculados sobre os vetores de peso e altura. 
    O primeiro imc é calculado com o primeiro peso e a primeira altura. 
    O segundo imc é calculado com o segundo peso e a segunda altura e assim por diante.
*/

var pesos = [70, 52.4, 80, 45, 65]
var alturas = [1.75, 1.60, 1.72, 1.69, 1.64]
var imcs = []

for (var i = 0; i < 5; i++) {
    imcs.push(calculaImc(pesos[i], alturas[i]))
}

console.log("imc= ", imcs)

/*  Item 4
    Crie um vetor de "classificação" calculado sobre o vetor de IMC.  
    A primeira classificação diz respeito ao primeiro imc.
    A segunda classificação diz respeito ao segundo imc e assim por diante.
*/

var classificacao = []

for (var i = 0; i < 5; i++) {
    classificacao.push(resultadoImc(imcs[i]))
}

console.log("classificação= ", classificacao)

/*  Item 5 
    Ordene o vetor "imc" e imprima após ordenação.
*/

imcs.sort()
console.log("imc ordenado = ", imcs)

/*  Item 6
    Crie um objeto "Pessoa" com campos "idade", "nome", "peso", "altura" e "imc". 
    Todos os valores iniciam com zero ou ‘zero'.
    Após isso, coloque conteúdo nos campos "nome", "peso" e "altura".
*/

var Pessoa = new Object()
Pessoa.nome = "zero"
Pessoa.idade = 0
Pessoa.peso = 0
Pessoa.altura = 0
Pessoa.imc = 0

Pessoa.nome = "Thays"
Pessoa.peso = 74
Pessoa.altura = 1.65
Pessoa.idade = 24

/*  Item 7
    Coloque valor no campo "imc" usado os valores "peso" e "altura" armazenados no objeto. 
    Você não deve colocar valores de peso e altura para calcular o "imc" e sim acessar os campos do objeto pessoa onde estão o peso e a altura.
*/
Pessoa.imc = calculaImc(Pessoa.peso, Pessoa.altura)

/*  Item 8 
    Imprima o texto conforme abaixo:
    (Nome do Objeto) tem idade de (idade do objeto). 
    Ele(a) pesa (peso do objeto) Kg e tem altura (altura do objeto). Seu imc é de (imc do objeto).
*/

console.log(Pessoa.nome, " tem idade de ", Pessoa.idade, ". Ele(a) pesa ", Pessoa.peso, " Kg e tem altura ", Pessoa.altura, ". Seu imc é de ", Pessoa.imc, ".") 