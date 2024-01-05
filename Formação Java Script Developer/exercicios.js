

let numeros = [2 , 5, 10, 100, 25, 30, 32, 25]

function numPares(){
    for (let i = 0; i <= numeros.length; i++) {
        if(numeros[i] % 2 == 0){
            console.log(`${numeros[i]} é par `)
        } 
        
    }

}

numPares(10)
