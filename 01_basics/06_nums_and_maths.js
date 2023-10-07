const score = 400
// console.log(score);

const balance = new Number(200)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 123.8996

// console.log(otherNum.toPrecision(4))

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

//+++++++++++Maths++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4 , 5, 3, 9));
// console.log(Math.max(4 , 5, 3, 9));
console.log(Math.random());  // gives between 0 and 1
console.log((Math.random()*10) + 1); // 1-9 avoiding zero- add 1
console.log(Math.floor(Math.random()*10) + 1);// math.floor to precise value


const min = 25
const max = 30

console.log(Math.floor(Math.random() * (max-min + 1)) + min) // define random value in a range only