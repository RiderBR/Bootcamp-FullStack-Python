/*var uniqueProducts = array.filter(function(elem, i, array) {
    return array.indexOf(elem) === i;
} );*/

const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },

    {
        name: 'miau',
        type: 'cat',
        age: 2
    },

    {
        name: 'gulp',
        type: 'fish',
        age: 1
    },

    {
        name: 'Duck',
        type: 'dog',
        age: 1
    },

    {
        name: 'Duquesa',
        type: 'dog',
        age: 0.10
    },
]

const eMenorQueCinco = (numero) => {
    return numero < 5
}
/*
//Filter
const newPets = pets.filter(({age}) => eMenorQueCinco(age))

console.log(newPets)

console.log(pets)

//Map
const petNames = pets.map((pet) => {
    return pet.name
})

console.log(petNames)

const forEachPetNames = []

//ForEach
pets.forEach((pet) => {
    forEachPetNames.push(pet.name)
})

console.log(forEachPetNames)

console.log(pets)

//Reduce
const totalAge = pets.reduce((total, pet) => {
    console.log(`Pet: ${pet.name}`)
    total += pet.age
    return total
}, 0)

console.log(`Total: ${totalAge}`)

const ageDog = pets.reduce((total, pet) => {
    if (pet.type !== 'dog') return total
    else return total += pet.age
}, 0)

console.log(ageDog)*/

const totalDogs = pets.filter((pet) => {
    return pet.type === 'dog'
}).reduce((total, pet) => {
    return total + pet.age
}, 0)

console.log(totalDogs)