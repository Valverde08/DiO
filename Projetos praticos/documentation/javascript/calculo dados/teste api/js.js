const ajax = new XMLHttpRequest()

ajax.open('GET', 'https://viacep.com.br/ws/40100310/json/')
ajax.send()

ajax.onload = function(){
    console.log(ajax.responseURL)
}