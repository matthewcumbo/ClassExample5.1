// Basics (console/alert)
//console.log('hello');
//alert('hello world');

// Functions
function helloWorld(){
    console.log('Hello World');
}

helloWorld();
        
        // Variables
        // Names cannot be keywords
        // Names should be meaningful
        // Names cannot start with a number
        // Avoid special symbols
        // CASE SENSITIVE
        // for multiple words, use Camel Notation
        // example: firstName, lastName
        
        let firstName = 'Matt';
        console.log(firstName);
        firstName = 'Cumbo';
        console.log(firstName);

        // Data Types
        // String, Number, Boolean, undefined, null
        // JS is a dynamic language
        // i.e. data type of variables can change during runtime
        
        let lastName = 'Cumbo'; // String
        let age = 32; // Number
        let alive = true; // Boolean

        console.log(lastName);
        lastName = 1;
        console.log(lastName);

        console.log(typeof(lastName));


        // Concept of OOP (Object Oriented Programming)
        // Objects with multiple properties
        let example = {};
        console.log(typeof(example));
        console.log(example);

        // Object properties are built using Key-Value Pairs
        let person = {
            firstName: 'Matthew',
            lastName: 'Cumbo',
            age: 32
        };
        console.log(person);

        // Dot Notation
        console.log(person.firstName);

        // Bracket Notation
        console.log(person["firstName"]);


        // Arrays (lists of objects)
        let listOfObjects = [];
        console.log(listOfObjects);

        let listOfColors = ['red','blue','green'];
        console.log(listOfColors);
        console.log(listOfColors[1]);
        console.log(listOfColors.length);