const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon"

//Nonostante la presenza di due variabili (person1, person2), il riferimento è fatto allo stesso oggetto (person1).
//In questo modo, cambiando il contenuto di una delle due variabili, automaticamente andrò a cambiare l'oggetto a cui fanno riferimento
// Esempio: dire person1.firstname="Elio" === person2.firstname="Elio"
console.log(person1);
console.log(person2);
