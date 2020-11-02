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

const covid  = require('../covid')
const itens_1000 = covid.slice(0,999)

console.time('Teste 1000 itens')
bubbleSort(itens_1000, (a, b) => {
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
console.timeEnd('Teste 1000 itens')
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)
