let person = { firstName: "Mario", lastName: "Rossi", age: 25 }
let keys = Object.keys(person)

for (el of keys) {
    console.log(el + ": " + person[el]) 
} 
