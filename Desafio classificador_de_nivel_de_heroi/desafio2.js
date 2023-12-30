function calcularVitorias(vitoria,derrota){
    let saldo =(vitoria-derrota)
    
    if(saldo <= 10){
        console.log(`O heroi tem o saldo de ${saldo} vitorias e está no nível Ferro`)
    } else if(saldo > 11 && saldo <= 20){
        console.log(`O heroi tem o saldo de ${saldo} vitorias e está no nível bronze`)
    }  else if(saldo > 20 && saldo <= 50){
        console.log(`O heroi tem o saldo de ${saldo} vitorias e está no nível Prata`)
    }  else if(saldo > 50 && saldo <= 80){
        console.log(`O heroi tem o saldo de ${saldo} vitorias e está no nível Ouro`)
    }  else if(saldo > 80 && saldo <= 90){
        console.log(`O heroi tem o saldo de ${saldo} vitorias e está no nível Diamante`)
    }  else if(saldo > 90 && saldo <= 100){
        console.log(`O heroi tem o saldo de ${saldo} vitorias e está no nível Lendario`)
    }  else {
        console.log(`O heroi tem o saldo de ${saldo} vitorias e está no nível Imortal`)
    }  
}

(function main(){
    calcularVitorias(70,10)

})()