let passadas = 0, comparacoes = 0, trocas = 0
/*
    fnComp -> Compara dois elementos do vetor
    Recebe dois valores do vetor
    Retorna:
        - true, se o PRIMEIRO valor for MAIOR que o segundo
        - false, caso contrário
*/
function quickSort(vetor, fnComp, inicio = 0, fim = vetor.length - 1) {
    //console.log({vetor, inicio, fim})
    if(fim > inicio) { // Garante que haja, PELO MENOS , DOIS elementos para ordenar
        passadas++
        let posDiv = inicio - 1
        let posPivot = fim
        for(let i = inicio; i < fim; i++) {
            comparacoes++
            if(vetor[i] < vetor[posPivot]) {
            posDiv++
            [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
            trocas++
        }
    }    
    // Último encremento de posDiv, após o loop terminar
    posDiv++
    [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
    trocas++
    quickSort(vetor, fnComp, inicio, posDiv - 1) // Lado esquerdo
    quickSort(vetor, fnComp, posDiv + 1, fim)    // Lado direito
    }
}

/*
let nums = [54, 81, 72, 36, 9, 90, 63, 27, 18, 45]
quickSort(nums)
console.log(nums)
console.log({passadas, comparacoes, trocas})
*/

const nomes = require('./dados/100-mil-nomes.js')
console.time('Teste nomes')
quickSort(nomes)
console.timeEnd('Teste nomes')
console.log(nomes)
console.log('Memoria Usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)
console.log({passadas, comparacoes, trocas})