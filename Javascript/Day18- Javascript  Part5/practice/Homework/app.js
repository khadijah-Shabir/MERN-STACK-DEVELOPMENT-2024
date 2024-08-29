// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6]

let random=Math.floor(Math.random()*6)+1;
console.log(random);


// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

const car={
    name:"BMW",
    model:"X5",
    color:"Black",
    printName: function(){
        console.log(this.name)
    }
}

console.log(car.printName());

// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States

const person={
    name:"John",
    age:30,
    city:"New York",
    country:"USA"
}   

person.city="New York";
person.country="USA";
console.log(person)


