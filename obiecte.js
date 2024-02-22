const user = {
    email: 'inna@example.com',
    name: 'Inna',
    password: 'qwerty',
    varsta: 1,
    resedinta: true,
    vector: [1, 2, 3, 4, 5],
    alt_obiect: {
        name: "maria"
    },
    null_obj: null
};
console.log(user.name) // console.log(user['name'])
// console.log(user.vector)

let camp = 'carnasst'
user[camp] = 111
console.log(user[camp])

console.log(user)

for (let i = 0; i < user.vector.length; i++){
    console.log(user.vector[i] + 1)
}

