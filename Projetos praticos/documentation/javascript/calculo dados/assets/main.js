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

    let qualidade = document.querySelector("#quality")

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

            } else if(qualidade.value == 4 ){
                let vHours = Number(hours.value) * 500 

                let vMinutes = Number(minutes.value) * 8.3

                let vSeconds = Number(seconds.value) * 0.138

                let totaMb = vHours + vMinutes + vSeconds

                res.innerText = `Foram gastos ${totaMb.toFixed(2)}mb de internet para assistir um vídeo de ${hours.value}h ${minutes.value}m ${seconds.value}s em 480p   `

            } else if(qualidade.value == 5){
                let vHours = Number(hours.value) * 1500 

                let vMinutes = Number(minutes.value) * 25

                let vSeconds = Number(seconds.value) * 0.416

                let totaMb = vHours + vMinutes + vSeconds

                res.innerText = `Foram gastos ${totaMb.toFixed(2)}mb de internet para assistir um vídeo de ${hours.value}h ${minutes.value}m ${seconds.value}s em 720p   `

            } else if(qualidade.value == 6){
                let vHours = Number(hours.value) * 3000

                let vMinutes = Number(minutes.value) * 50

                let vSeconds = Number(seconds.value) * 0.833

                let totaMb = vHours + vMinutes + vSeconds

                res.innerText = `Foram gastos ${totaMb.toFixed(2)}mb de internet para assistir um vídeo de ${hours.value}h ${minutes.value}m ${seconds.value}s em 1080p   `

            } else if(qualidade.value == 7){
                let vHours = Number(hours.value) * 5500 

                let vMinutes = Number(minutes.value) * 90

                let vSeconds = Number(seconds.value) * 1.5

                let totaMb = vHours + vMinutes + vSeconds

                res.innerText = `Foram gastos ${totaMb.toFixed(2)}mb de internet para assistir um vídeo de ${hours.value}h ${minutes.value}m ${seconds.value}s em 2k `

            } else if(qualidade.value == 8){
                let vHours = Number(hours.value) * 14000 

                let vMinutes = Number(minutes.value) * 233

                let vSeconds = Number(seconds.value) * 0.416

                let totaMb = vHours + vMinutes + vSeconds

                res.innerText = `Foram gastos ${totaMb.toFixed(2)}mb de internet para assistir um vídeo de ${hours.value}h ${minutes.value}m ${seconds.value}s em 4k `

            } 


    
        
        
    } else {
            res.innerText = `Os campos de minutos e segundos não podem ser maior do que 60`
        }
    

    
    


})

btnChoice.addEventListener("click", ()=>{

    
    let sel_op = document.querySelector("#sel-prod")
    


    let spot = document.querySelector(".spotify")
    let you = document.querySelector(".youtube")
    if(sel_op.value == "youtube") {
        spot.style.display = "none"
        you.style.display ="block"
    } else if (sel_op.value == "spotify") {
        spot.style.display = "block"
        you.style.display ="none"
    }
    

    

   
    
    
    



})






