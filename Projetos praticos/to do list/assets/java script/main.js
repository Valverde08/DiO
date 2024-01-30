let tarefa = document.getElementById("tarefa")
const btn = document.querySelector("#btn")
let res = []
btn.addEventListener("click", function(){
    let valor = tarefa.value
    res.push(valor)
    console.log(valor)
    
    
})
console.log(res)
