const listofskill = ["HTML", "CSS", "JavaScript", "React", "GIT"]

const copyarray = [...listofskill]

listofskill.push("nodejs")

console.log("listofskill", listofskill)
console.log("copyarray", copyarray)

const exemplu = [1, 2]
const new_exemplu = [...exemplu, exemplu]
exemplu[0] = 3

console.log("new_exemplu", new_exemplu)