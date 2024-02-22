console.log("Hello World")

const pi = 3.14
// pi = 3.15
console.log(pi)
function surfaceAreaCalculator(radius){
    return 4 * pi * radius * radius 

}

const surafaceAreaCalculator2 = (radius) =>{
}

const areaOFMars = surfaceAreaCalculator(3390)
const areaOFMercury = surfaceAreaCalculator(2440)

console.log("Suprafa Marte",areaOFMars)
console.log("Suprafa Mercur", areaOFMercury)

////////////////////////////////////////

const percentageCalculator = (number, total) =>{
    return number * total/ total
}

const a = percentageCalculator(10, 200)

console.log(a)

const display = (value) => {
    console.log(value)
}

display(a)

const add = (a, b) => {
    return a + b
}

const substract = (a, b) => {
    return a - b
}

const c = add(20, 15)
const d = substract(20, 15)

display(c)
display(d)