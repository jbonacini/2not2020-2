let comparacoes = 0, divisoes = 0, juncoes = 0

function mergeSort(vetor, fnComp) {

    function mesclarVetores(vetEsq, vetDir) {
        let vetRes = [], posEsq = 0, posDir = 0, sobra

        while(posEsq < vetEsq.length && posDir < vetDir.length) {
            comparacoes++
            if(fnComp(vetDir[posDir], vetEsq[posEsq])) { 
                vetRes.push(vetEsq[posEsq])
                posEsq++
            }
            else { 
                vetRes.push(vetDir[posDir])
                posDir++
            }
        }      
        
        if(posEsq < posDir) sobra = vetEsq.slice(posEsq)
        else sobra = vetDir.slice(posDir)

        return vetRes.concat(sobra)
    }
    
    if(vetor.length > 1) {
        let meio = Math.floor(vetor.length / 2)
        let vetEsq = vetor.slice(0, meio) 
        let vetDir = vetor.slice(meio)
        divisoes++
   
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)
        juncoes++
        return mesclarVetores(vetEsq, vetDir)        
    }
    return vetor
}

const covid  = require('../covid/covid-19.js')

console.time('Teste todos os itens')
let corona = mergeSort(covid, (a, b) => {
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
console.log({comparacoes, divisoes, juncoes})
