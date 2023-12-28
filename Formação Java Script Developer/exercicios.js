
function fazerDesconto(valor,pagamento){
    
    if(pagamento === 1){
        let total = valor-(valor * 0.10)
        console.log(`No débito você possui 10% de desconto. tendo valor total de ${total}`)
    } else if(pagamento === 2){
        let total = valor-(valor * 0.15)
        console.log(`No PIX você possui 15% de desconto. tendo valor total de ${total}`)
    } else if(pagamento === 3 ){
        let total = valor
        console.log(`No parcelado em duas vezes você não possui 1desconto. tendo valor total de ${total}`)
    } else {
        let total = valor+(valor * 0.10)
        console.log(`No parcelado em mais de duas vezes você não possui desconto e tem um acréscimo de 10%. Sendo o valor total de ${total}`)
    }
}



(function main() {
    fazerDesconto(500, 2)
})()