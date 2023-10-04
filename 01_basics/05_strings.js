const name = "Ashutosh"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ashutosh-hi-singh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(-8,4)
// console.log(newString);

//sub string does not considers negative value

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const stringOne = "   Ashutosh   ";
// console.log(stringOne);
// console.log(stringOne.trim());

const url = "https://ashutosh.com/ashutosh%20singh"
console.log(url.replace('%20', '-'));

console.log(url.includes('ashutosh'));

console.log(gameName.split('-'))