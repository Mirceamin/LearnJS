const hasPassedTest = (grade) => {
    if(grade < 1 || grade > 10){
        return "WRONG IMPUT"
    }


    if(grade > 5){
        return "GOOD"

    if(grade === 5) { // ==  ,  !==   ,   &&
        console.log("OK")
    }

    if(grade < 5){
        return "NOT OK"
    }
    }
}

const result = hasPassedTest(6)

console.log(result)

const checkCondition = (a, b) => {
    if (a > 5 && b < 5) {  //  || - SAU - (Daca un argument adevarat rezultatul e TRUE)
        return true
    }

    else {
        return false
    }
}
const results = checkCondition(10, 3)

console.log( false || false )

////////////////////////////////////

const testResult = hasPassedTest(14)
console.log(testResult)

///////////////////////////////////

console.log(!1)
console.log(!true)
console.log(!!"sssa")
console.log(!!"")
console.log(!!10)

// IF ELSE pe scurt: -- return grade > X ? ("OK") : "NOT OK"