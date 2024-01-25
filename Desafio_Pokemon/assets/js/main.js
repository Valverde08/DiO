
const limit = 10
const offset = 0
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}"`

function converteToLi(pokemon){
   return `<li>
                <p class="nome">${pokemon.name}</p>
                <p class="cod">#001</p>

                <p class="tipo1">terra</p>
                <p class="tipo2">grama</p>
                
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}" class="img">
            </li>
        `
}


const pokemonList = document.getElementById("pal")

fetch(url)
    .then((response)=> response.json())      
    .then((jsonBody)=> jsonBody.results )
    .then((pokemons) =>{
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += converteToLi(pokemon)
            
        }
    })
    .catch((error)=> console.log(error))
    
