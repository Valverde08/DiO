const num = [10, 51]
let i = 0

function gets(){
    const valor = num[i]
    i++
    return valor

}

function print(text){
    console.log(text)
}

module.exports = {gets, print}