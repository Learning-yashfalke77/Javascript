const container = document.querySelector('#container')
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div')
    const newImg = document.createElement('img')
    const label = document.createElement('span')

    pokemon.classList.add('pokemon')
    label.innerText = `#${i}`
    newImg.src = `${baseURL}/${i}.png`

    pokemon.append(newImg, label)
    container.append(pokemon)
    
}