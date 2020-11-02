function bubbleSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    let trocas
    do {
        passadas++
        trocas = 0

       
        for(let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
           
            if(fnComp(vetor[i], vetor[i + 1])) {
            
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                totalTrocas++
            }
        }

    } while(trocas > 0)
    console.log({passadas, comparacoes, totalTrocas})
}

const covid  = require('../covid-19.js')

console.time('Teste todos os itens')
bubbleSort(covid, (a, b) => {
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
//console.log(covid)
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)
