function selectionSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    function encontrarMenor(vetor, inicio) {
        let posMenor = inicio
        for(let i = inicio + 1; i < vetor.length; i++) {
            if(! fnComp(vetor[i], vetor[posMenor])) posMenor = i
            comparacoes++
        }
        return posMenor
    }

    for(i = 0; i < vetor.length - 1; i++) {
        passadas++
        
        posMenor = encontrarMenor(vetor, i + 1)
        
        comparacoes++
        if(fnComp(vetor[i], vetor[posMenor])) { 
           
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

const covid  = require('../covid/covid-19')
const itens_100000 = covid.slice(0,99999)

console.time('Teste 100000 itens')

selectionSort(itens_100000, (a, b) => {
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
console.timeEnd('Teste 100000 itens')
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)