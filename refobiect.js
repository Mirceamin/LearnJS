const company = { 
    name: "aaa" 
}
const pix = {...company}

company.name = "SkillBrain"
pix.name = "SkillBrai22n"

console.log(company)

company.name = "No Name"

console.log(company)
console.log(pix)

console.log(company === pix)
// test: 1, name: SkillBrain
// test: 1, name: No Name
// company: { test: 1, name: No Name }, name : SkillBrai22n }

const mircea = {} 
const gabi = {}

const addName = (o, name) => {
    o.name = name
}

const addAge = (o, age) => {
    o['age'] = age
}

const addCar = (o, car) => {
    o['car'] = car
}

addName(mircea, "Mircea")
addAge(mircea, 27)
addCar(mircea, "Logan")

addName(gabi, "Gabi")
addAge(gabi, 29)
addCar(gabi,"Duster")

console.log(mircea)
console.log(gabi)

// name: Mircea
// age: Age
// car: Logan