const {gets, print} = require('./funcoes-iniciais')

const n = gets()
let maiorNumPar = 0 
if(gets() > maiorNumPar && gets % 2 === 0){
    maiorNumPar = gets()
}

print(n)