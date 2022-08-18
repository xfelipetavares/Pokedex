const pokemonName = document.querySelector(`.pokemon__name`)
const pokemonNumber = document.querySelector(`.pokemon__number`)
const pokemonImage = document.querySelector(`.pokemon__image`)

const form = document.querySelector(`.form`)
const inputSearch = document.querySelector(`.input__search`)
const buttonPrev = document.querySelector(`.btn-prev`)
const buttonNext = document.querySelector(`.btn-next`)

let pokemonId = 1

const fetchPokemon = async (pokemon) => {
    pokemonName.innerHTML = `Searching...`
    pokemonNumber.innerHTML = ``

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (APIResponse.status === 200) {
        const data = await APIResponse.json()
        return data
    }
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon)
    if (data) {
        pokemonImage.style.display = `block`
        pokemonName.innerHTML = data.name
        pokemonNumber.innerHTML = data.id
        pokemonImage.src = data.sprites.versions[`generation-v`][`black-white`].animated.front_default
        // pokemonImage.src = data.sprites.versions[`generation-v`][`black-white`].animated.front_shiny
        inputSearch.value = ``
        pokemonId = data.id
    } else {
        pokemonImage.src = `assets/notfound2.png`
        pokemonName.innerHTML = `Not Found &#128546;`
        pokemonNumber.innerHTML = ``
    }
}

form.addEventListener(`submit`, (event) => {
    if(inputSearch.value == 2424){
        event.preventDefault()
        betao()
    } else if (inputSearch.value == 1432){
        event.preventDefault()
        kakuro()
    } else {
        event.preventDefault()
        renderPokemon(inputSearch.value.toLowerCase())
    }
})


buttonPrev.addEventListener(`click`, () => {
    if(pokemonId > 1){
        pokemonId --
        renderPokemon(pokemonId)
    }
})
buttonNext.addEventListener(`click`, () => {
    pokemonId ++
    renderPokemon(pokemonId)
})

function betao() {
    pokemonImage.src = `assets/betao.png`
    pokemonName.innerHTML = `MuskitoPirokin`
    pokemonNumber.innerHTML = `2424`
}
function kakuro() {
    pokemonImage.src = `assets/kakuro2.png`
    pokemonName.innerHTML = `Large Kakuro`
    pokemonNumber.innerHTML = `1432`
}
renderPokemon(pokemonId)