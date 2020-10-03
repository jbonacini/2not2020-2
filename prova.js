const x = (a.comparacao) =>{
   let b
   do {
       b = 0
       for(let c = 0; c <= a.length - 2; c++) {
           if(comparacao(a[c] > a[c + 1])) {
               [a[c], a[c + 1]] = [a[c + 1], a[c]]
               b++
           }
       }

   } while(b > 0)
}
console.log(comparacao)