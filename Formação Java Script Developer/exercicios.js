const {gets, print} = require('./funcoes-iniciais')

const array = [10, 51,  3, 75, 36, 89, 99]

let maiorNumPar = 0 
let maiorNumImpar = 0
const num = array.length
for (let i = 0; i < num; i++) {
    const element = array[i]
    if( element > maiorNumPar && element % 2 === 0){
         maiorNumPar = element
    } else if (element > maiorNumImpar && element % 2 === 1){
         maiorNumImpar = element
    }
    
}


print(maiorNumPar)
print(maiorNumImpar)