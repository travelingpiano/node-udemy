var name = 'Max';
var age = 29;
var hasHobbies = true;
console.log(summarizeUser(name, age, hasHobbies));

function summarizeUser(userName, userAge, userHasHobby) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}

// arrow functions allow us to use the 'this' keyword
const summarizeUser1 = (userName, userAge, userHasHobby) => {

};

const add = (a, b) => a + b;

const addOne = a => a + 1;

console.log(addOne(1));

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

const hobbies = ['Sports', 'Cooking', 1]; // arrays can be of multiple different types

for (let hobby of hobbies) {
    console.log(hobby);
}

const copiedArray = [...hobbies];
hobbies.push('Sleeping');
console.log(copiedArray);

// destructuring
const printName = ({ age }) => {
    console.log(age);
}

printName(person);

const { age1, name1 } = person;
console.log(age1, name1);

console.log(`My name is ${name} and my age is ${age}`);