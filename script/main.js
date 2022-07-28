const pokemonName = document.querySelector(`.pokemon__name`)
const pokemonNumber = document.querySelector(`.pokemon__number`)
const pokemonImage = document.querySelector(`.pokemon__image`)

// let buttonPrev = document.getElementsByClassName(`btn-prev`)
let pokemonId = 1

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const data = await APIResponse.json()

    return data
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    pokemonImage.src = data.sprites.versions[`generation-v`][`black-white`].animated.front_default
    // pokemonImage.src = data.sprites.versions[`generation-v`][`black-white`].animated.front_shiny

}


renderPokemon(`1`)