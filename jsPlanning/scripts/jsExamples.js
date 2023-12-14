// Variables
// cannot be a keyword
// should be meaningful
// cannot start with a number
// avoid special symbols
// case sensitive
// for multiple words, use camel notation -> firstName
let firstName = 'Matt';
console.log(firstName);
firstName = 'Cumbo';
console.log(firstName);



// Data Types:
// String, number, boolean, undefined, null

// js is a dynamic language
// i.e. data type of a variable can change during runtime

console.log(typeof(firstName));
firstName = 1;
console.log(firstName);
console.log(typeof(firstName));

// Concept of OOP
// Objects which can have variable properties
// Example: person (firstName, lastName, age)
let person = {};
console.log(typeof(person));
console.log(person);

// Object properties are key-value-pairs
person = {
    firstName: 'Matt',
    lastName: 'Cumbo',
    age: 32
}
console.log(person);

// Dot notation 
console.log(person.firstName);

// Bracket notation
console.log(person["firstName"]);


// Arrays (list of objects)
let listOfObjects = []; // empty array
console.log(listOfObjects);
let listOfColors = ['red','blue','green']; // array with values
console.log(listOfColors);
console.log(listOfColors[0]); // accessing by location
console.log(listOfColors.length); // accessing number of elements in list

