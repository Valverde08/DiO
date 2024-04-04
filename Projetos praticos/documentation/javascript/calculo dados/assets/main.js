function processQuality(tempo,qualidade){
    return tempo * qualidade

}


let botao = document.querySelector("#calcular")

let btnChoice = document.querySelector("#ecolher")



function calcular(valor, qualidade){
    return valor * qualidade

}





let op = document.querySelector("#sel-prod")

botao.addEventListener("click", ()=>{

    let qualidade = document.querySelector("input[type='radio']:checked")

    let hours = document.querySelector("#hours")

    let minutes = document.querySelector("#minutes")

    let seconds = document.querySelector("#seconds")

    let res = document.querySelector("#res")


  console.log(Number(hours.value), Number(minutes.value) )
    
    if(Number(hours.value) === 0 && Number(minutes.value) === 0  && Number(seconds.value) === 0){
        res.innerText = `Os campos não podem ser vazios `
        
    }else if(minutes.value <= 59 && seconds.value <= 59 ){
            if(qualidade.value == 1 ){

        
                let vHours = Number(hours.value) * 80 

                let vMinutes = Number(minutes.value) * 1.3 

                let vSeconds = Number(seconds.value) * 0.21 

                let totaMb = vHours + vMinutes + vSeconds

                res.innerText = `Foram gastos ${totaMb.toFixed(2)}mb de internet para assistir um vídeo de ${hours.value}h ${minutes.value}m ${seconds.value}s em 144p   `
            } else if(qualidade.value == 2 ){
                let vHours = Number(hours.value) * 200 

                let vMinutes = Number(minutes.value) * 3.3 

                let vSeconds = Number(seconds.value) * 0.55 

                let totaMb = vHours + vMinutes + vSeconds

                res.innerText = `Foram gastos ${totaMb.toFixed(2)}mb de internet para assistir um vídeo de ${hours.value}h ${minutes.value}m ${seconds.value}s em 240p   `

            } else if(qualidade.value == 3 ){
                let vHours = Number(hours.value) * 300 

                let vMinutes = Number(minutes.value) * 5

                let vSeconds = Number(seconds.value) * 0.83

                let totaMb = vHours + vMinutes + vSeconds

                res.innerText = `Foram gastos ${totaMb.toFixed(2)}mb de internet para assistir um vídeo de ${hours.value}h ${minutes.value}m ${seconds.value}s em 320p   `

            } else if(qualidade.value == 5 ){
                let vHours = Number(hours.value) * 500 

                let vMinutes = Number(minutes.value) * 8.3

                let vSeconds = Number(seconds.value) * 0.138

                let totaMb = vHours + vMinutes + vSeconds

                res.innerText = `Foram gastos ${totaMb.toFixed(2)}mb de internet para assistir um vídeo de ${hours.value}h ${minutes.value}m ${seconds.value}s em 480p   `

            } else if(qualidade.value == 6 ){
                let vHours = Number(hours.value) * 1500 

                let vMinutes = Number(minutes.value) * 25

                let vSeconds = Number(seconds.value) * 0.416

                let totaMb = vHours + vMinutes + vSeconds

                res.innerText = `Foram gastos ${totaMb.toFixed(2)}mb de internet para assistir um vídeo de ${hours.value}h ${minutes.value}m ${seconds.value}s em 720p   `

            }

    
        
        
    } else {
            res.innerText = `Os campos de minutos e segundos não podem ser maior do que 60`
        }
    

    
    


})

btnChoice.addEventListener("click", ()=>{

    let res = document.querySelector("#res")

    let img = document.querySelector("<img>")

    if(img.src == "./assets/css/1 (1).png"){


    }
    
    



})




res.innerHTML = op.value

