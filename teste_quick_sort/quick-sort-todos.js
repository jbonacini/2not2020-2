let passadas = 0, comparacoes = 0, trocas = 0

function quickSort(vetor, fnComp, inicio = 0, fim = vetor.length - 1) {
    if(fim > inicio) { 
        passadas++
        let posDiv = inicio - 1
        let posPivot = fim
        for(let i = inicio; i < fim; i++) {
            comparacoes++
            if(fnComp(vetor[posPivot], vetor[i])) {     
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
                trocas++
            }
        }
        
        posDiv++
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        trocas++
        quickSort(vetor, fnComp, inicio, posDiv - 1)    
        quickSort(vetor, fnComp, posDiv + 1, fim)      
    }
}

const covid  = require('../covid/covid-19.js')

console.time('Teste todos os itens')
quickSort(covid, (a, b) => {
    if(a.date == b.date){
        if(a.state> b.state) return true
        else if(a.state == b.state){
            if (a.city == b.city) return false
            else if(a.city > b.city) return true
            else return false
        }
        else return false
    }
    else if(a.date > b. date) return true
    else return false
})
console.timeEnd('Teste todos os itens')
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)
//console.log(covid)
