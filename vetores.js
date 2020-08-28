let vetor1 = []  // Forma moderna
let vetor2 = Array()   // Forma "Tradicional"

//Criação de Vetores com valores iniciais
let vetor3 = [2, 4, 6, 8, 10]
let vetor4 = Array('vaca', 'cachorro', 'gato', 'papagaio')

// Inserção de novos valores em um vetor

// Forma 1: push()
vetor1.push('laranja')
vetor1.push('limão')

console.log(vetor1)

// Forma 2: unshift() Adiciona novos elementos NO ÍNICIO do vetor
vetor1.unshift('maça')
console.log(vetor1)

vetor1.unshift('abacaxi')
console.log(vetor1)

// Forma 3: splice()
// 1º Parametro: a posição de inserção
// 2º Parametro: quantos elementos serão eliminados ==0
vetor1.splice(2,0,'morango')
console.log(vetor1)

vetor1.splice(1, 0,'jaca')
console.log(vetor1)

// Remoção de elementos do vetor
// Forma 1: pop() -> retira o ÚLTIMO elemento do vetor
let x1 = vetor1.pop()
console.log(vetor1, x1)

// Forma 2: shift() -> retira o PRIMEIRO elemento do vetor
let x2 = vetor1.shift()
console.log(vetor1, x2)

// Forma 3: splice()
// 1º Parametro: a posição para remoção
// 2º Parametro: a quantidade de elementos a serem removidos
// Obs.: O retorno de splice() na remoção será um vetor contendo o(s)
// item(ns) removido(s)
let x3 = vetor1.splice(2, 1)
console.log(vetor1, x3)

// O splice() também serve  para fazer substituições
vetor1.splice(1, 1, 'pera')
console.log(vetor1)

// Colocando mais alguns elementos no vetor
vetor1.push('amora', 'jaboticaba')
vetor1.push('pessego')
vetor1.push('uva')
vetor1.push('abacate')
console.log(vetor1)

// Metodos de Percurso de vetores

// Forma 1: usando o for tradicional
// o ínicio da variável e sempre na posição 0 e seu incremento
// deve ir até uma posição ANTES do seu número de elementos (length)
for(let i = 0;  i < vetor1.length; i++) {
    console.log(vetor1[i])
}

console.log('----------------------------------------------------------------------------')

// Forma 2: for..of
// Percorrer o vetor do primeiro ao último elemento da forma mais simples que o for tradicional
for(let fruta of vetor1) {
    console.log(fruta)
}

// Forma 3: forEach()
// O argumento do forEach() é uma função que recebe 
// cada elemento do vetor para fazer algo com ele

// Argumento como arrow function
vetor1.forEach(fruta => console.log(fruta))

// Argumento como função tradicional
vetor1.forEach(function(fruta) {
    console.log(fruta)
})