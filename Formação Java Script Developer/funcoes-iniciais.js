const num = [10, 51]
let i = 0

function gets(salario, adicional){
    if(salario <= 1100){
        return (  salario - (salario * 0.05)) + adicional
    } else if (salario > 1100  && salario <= 2500){
        return ( salario - (salario * 0.10)) + adicional
    } else {
        return (salari -(salario * 0.15)) + adicional
    }
    

} 

function print(text){
    console.log(text)
}

module.exports = {gets, print}