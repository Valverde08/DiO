fetch('https://viacep.com.br/ws/01001000/json/')
    .then(T => T.json())
    .then(dados =>{
        let res  = [...dados]

        console.log(res)


    })

    