const fs = require('fs');

const genders = ["m", "f"];

const maleNames = ["Adam", "Marcin", "Jan", "Witold", "Patryk", "Piotr", "Krzysztof", "Aleksander", "Paweł", "Dominik"];

const femaleNames = ["Paulina", "Aleksandra", "Anna", "Monika", "Weronika", "Natalia", "Kamila", "Daria", "Dorota", "Julia"];

const lastNames = ["Kowal", "Nowak", "Malina", "Kot", "Lis", "Smoła", "Komoda", "Kapusta", "Wilk", "Lato"];

const randChoice = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  
  const people = [];
  
  for (let i = 1; i <= 20; i++) {
    let person = {};
  
    person.gender = randChoice(genders);
  
    if (person.gender === "m") {
      person.name = randChoice(maleNames);
    } else {
      person.name = randChoice(femaleNames);
    }
  
    person.lastName = randChoice(lastNames);
  
    person.age = Math.floor(Math.random() * 60 + 18);
  
    person.email = person.name + "." + person.lastName + "@gmail.com";
  
    people.push(person);
  }
  
  const data = JSON.stringify(people);
  
  fs.writeFile("people.json", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
