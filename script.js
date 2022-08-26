const age = 23;

// age >= 18 ? console.log('I like drinking wine!') : console.log('I like drinking water!');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);




let drink2;

if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);
console.log(`I like drinking ${age >= 18 ? 'wine' : 'water'}`);





// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

const country = 'Romania';
const population = 19;

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);