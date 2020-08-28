// DEclaração de objeto vazio
let pessoa1 = {}              // Metódo "Moderno"
let pessoa2 = new Object()    // Método "Tradicional"

// Declarando e inicializando um objeto ja com propriedades
// - propriedades -> atributo + valor
let pessoa3 = {
    nome: 'João das Couves',
    naturalidade: 'FRanca/SP',
    "data de nascimento": '1997-11-03',
    estudante_fatec: true
}

// Acessando a propriedade de um objeto
// Atributo é uma única palavra -> sintaxe do ponto
console.log(pessoa3.nome)
console.log(pessoa3.estudante_fatec)

// Acessando uma propriedade composta por várias palavras -> 
// sintaxe dos colchetes
console.log(pessoa3["data de nascimento"])

// Sintaxe dos colchetes SEMPRE funciona, mesmo com propriedades
// cujo nome é uma única palavra
console.log(pessoa3['naturalidade'])

let atrib = 'nome'
console.log(pessoa3[atrib])

// Criando novas propriedades em um objeto
// -> basta atribuir o valor a um nome de atributo, segundo
// a sintaxe apropriada a cada caso
pessoa3.nacionalidade = 'portuguesa'              // Única Palavra
pessoa3['registro de estrangeiro'] = 123456789    // Várias palavras

console.log(pessoa3)

// Eliminando uma propriedade
delete pessoa3.estudante_fatec

console.log('----------------------------------------')

console.log(pessoa3)

console.log('-----------------------------------------')

// Como percorrer todas as propriedades de um objeto: for..in
for(let prop in pessoa3) {
    console.log(prop)
}

// Usando atribuito e valor de um objeto usando o for..in
for(let atrib in pessoa3) {
    // console.log('Atributo: ' + atrib +';valor: ' + pessoa3[atrib])

    // Usando string template (delimitando por acentos)
    console.log(`Atributo: ${atrib}; valor: ${pessoa3[atrib]}`)
}