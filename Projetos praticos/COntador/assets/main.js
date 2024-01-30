let num = document.getElementById("num")
let add = document.getElementById("plus")
let sub = document.getElementById("minus")


add.addEventListener("click",function(){
    let valor = Number(num.innerHTML) + 1
    console.log(valor)
    return num.innerHTML = valor
    
    
})
sub.addEventListener("click",function(){
    let valor = Number(num.innerHTML) - 1
    console.log(valor)
    return num.innerHTML = valor
})

