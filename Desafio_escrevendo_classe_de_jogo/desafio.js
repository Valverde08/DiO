
class Hero{
    nome
    idade
    tipo
    
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        if(this.tipo === "mago"){
            return (`o/a ${this.tipo} ${this.nome} atacou usando magia`)
        } else if(this.tipo === "guerreiro") {
            return (`o/a ${this.tipo} ${this.nome} atacou usando espada`)
        } else if(this.tipo === "monge") {
            return (`o/a ${this.tipo} ${this.nome} atacou usando artes marciais`)
        } else if(this.tipo === "ninja") {
            return (`o/a ${this.tipo} ${this.nome} atacou usando artes shuriken`)
        } 
    }
}

const vinicius = new Hero("Vinicius", 29, "mago")
const thaise = new Hero("thaise", 30, "guerreiro")
const uiu = new Hero("uiu", 31, "monge")
const sami = new Hero("sami", 31, "ninja")



console.log(vinicius.atacar())
console.log(thaise.atacar())
console.log(uiu.atacar())
console.log(sami.atacar())