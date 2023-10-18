const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = Object.assign({}, person1);
  person2.firstName = "Simon"
// In questo modo siamo andati a cambiare solamente il VALUE del firstName e non la Reference.
// Se avessimo cambiato il valore di firstName in person2 ricopiando per intero l'oggetto, avremmo cambiato anche il valore di person1
  
  console.log(person1);
  console.log(person2);
  