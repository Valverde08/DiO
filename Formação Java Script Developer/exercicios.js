class Pessoa {
    nome
    age
    weight
    height


    constructor(name, age,weight, height ){
        this.name = name
        this.age = age
        this.weight = weight
        this.height = height
        
    }

    calcularImc() {
        return this.weight /(this.height * this.height)

    }
    classificarImc(){
        const imc = this.calcularImc()
        if(imc < 18.5){
            return(`abaixo do peso. Seu imc é de ${imc.toFixed(2)}`)

        } else if(imc >= 18.5 && imc < 24.9){
            return(`está com o peso ideal. Seu imc é de ${imc.toFixed(2)}`)
        } else if(imc >= 24.9 && imc < 29.9){
            return(`está um pouco acima do peso ideal. Seu imc é de ${imc.toFixed(2)}`)
        } else if(imc >= 30 && imc < 40){
            return(`VocÊ está com obesidade . Seu imc é de ${imc.toFixed(2)}`)
        } else {
            return(`VocÊ está com obesidade Morbida . Seu imc é de ${imc.toFixed(2)}`)
        }

    }
}

const vinicius = new Pessoa ("Vinicius", 28, 75, 1.83)

console.log(vinicius)

console.log(vinicius.classificarImc())