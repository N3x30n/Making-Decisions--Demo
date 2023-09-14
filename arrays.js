/*
    In this file, we'll be making a new story
    about Doug, the Pokemon Trainer
*/
let moneyPouch = 10000
let backpack = [
    'poke ball', 'poke ball',
    'potion', 'beef jerky', 'running shoes',
]
backpack.push(moneyPouch)
let pokemon = []
console.log('Doug goes to the store and buys 2 packs of oreos for $50')
backpack.push('oreos')
backpack.push('oreos')
backpack[6] - 50
console.log('after buying oreos this is our backpack')
console.log(backpack)


backpack.push('pokedex')
pokemon.push('Pikachu')

console.log('after meeting Professor Oak, our backpack and pokemon are:')
console.log(backpack)
console.log(pokemon)

console.log('Doug goes out into the tall grass for the day and encounters 4 pidgeys')


for (let i = 0; i < 4; i++){
    pokemon.push('Pidgey')
    backpack[6] + 50
}

console.log('After the pidgeys our pokemon are now:')
console.log(pokemon)

backpack.splice(3,2, 'beef jerkey trash')
backpack.splice(5,2, 'empty oreo packets')
console.log('After eating the food in his backpack and giving away his running shoes, Dougs backpack is now: ')
console.log(backpack)


console.log('Doug encounters a new pokemon, Charizard')
let newPokemon = 'Charizard'

pokemon.push(newPokemon)

console.log('After catching Charizard our pokemon are now:')
console.log(pokemon)

console.log('Someone asks to see your cutest pokemon. So you show them Pikachu')
let cutestPokemon = pokemon[0]
console.log(cutestPokemon)

let pidgeys = pokemon.slice(1,5)
console.log('Here are your cloned pidgeys')
console.log(pidgeys)

console.log('Checking if my pokemon are all still here')
console.log(pokemon)

backpack.unshift('Lead statue of Jinx')
console.log('Backpack after adding the statue')
console.log(backpack)
