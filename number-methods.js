// 01. Number methods
// Example Global Number() method.
console.log(`
Number()
`);

string = '11';
string2 = 'abc';

console.log(Number(string));
console.log(Number(string2));

// 02. parseInt()
//Example: A common usecase could be if you have a string number of '0500' but want to retrieve a number value of 500.
console.log(`
parseInt()
`);

console.log(parseInt('0500', 10));

// 03. parseFloat()
console.log(`
parseFloat()
`);
console.log('Example 01');
// Example 01:  A use case can be getting rid of white space in a string while wanting to return a floating point number.

const float = "   3.145   ";
console.log(parseFloat(float));

// Example 02: Very large or small numbers written in the following notation can be converted to decimal.
console.log('Example 02');
console.log(parseFloat(432e-4))

//05 + 06 toFixed() vs toPrecision()
// Difference between toFixed() and toPrecision()
console.log(`
toFixed vs to Precision
`);
const number02 = 13.3876
console.log(number02.toPrecision(3))
console.log(number02.toFixed(3)) 
