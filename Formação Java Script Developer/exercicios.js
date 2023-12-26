let tipo = 1
let valor = 1500



if(tipo === 1){
    valorFinal = valor - (valor * 0.10)
    console.log(`como a sua forma de pagamento será o débito você terá 10% de desconte e pagará ${valorFinal}`)
} else if(tipo === 2){
    valorFinal = valor - (valor * 0.15)
    console.log(`como a sua forma de pagamento será o PIX você terá 15% de desconte e pagará ${valorFinal}`)
} else if(tipo === 3){
    valorFinal = valor
    console.log(`como a sua forma de pagamento será o parcelamento você terá 15% de desconte e pagará ${valorFinal}`)
} else {
    valorFinal = valor + (valor * 0.10)
    console.log(`como a sua forma de pagamento será o parcelamento você terá 15% de desconte e pagará ${valorFinal}`)
}