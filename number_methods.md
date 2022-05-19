# Number methods

**1. Global Number() method**

Number() can be used to manipulate values of the data type number. It can also be used to convert strings into numbers, if they are convertable. Otherwise Number will return NaN.

Example:

    string = '11';
    string2 = 'abc';
    console.log(Number(string));
    console.log(Number(string));

**2. parseInt()**

ParseInt allows to chop up a string and return an integer. Two arguments can be passed which are:

- string: the value that is to be parsed
- radix: The radix is a numeral system. It can be a value between 2 and 36. A common value used is 10. If no radix is defined, parseInt() will assume a radix based on the value passed in.
    - beggining with 0x or 0X: radix = 16
    - any other value: radix = 10,

Example: A common usecase could be if you have a string number of '0500' but want to retrieve a number value of 500.

    console.log(parseInt('0500', 10));

**3. parseFloat()**

Similar to parseInt(), parseFloat() parses a string and returns a number, in this case a floating point number. If the first index of the string cannot be converted to a number, parseFloat() returns NaN.

Example 01:  A use case can be getting rid of white space in a string while wanting to return a floating point number.

    const float = "   3.145   ";
    console.log(parseFloat(float));

Example 02: Very large or small numbers written in the following notation can be converted to decimal.

    console.log(parseFloat(432e-4)) ==> output: 0.0432

**4. Number.isNaN()**

Number.isNaN() has become an alternative to the global isNaN(), because it does not coerce the input to a number and checks if the result is NaN, but it returns true when the argument is a number but not a valid number(= NaN).
The need for isNaN() arises from the fact that we cannot simply compare values to NaN because anything == or === NaN always returns false.

    isNaN(undefined) ==> true
    isNaN({}) ==> true
    isNaN('foo'') ==> true
    isNaN(0/0) ==> true

    Number.isNaN(undefined) ==> false   
    Number.isNaN({}) ==> false  
    Number.isNaN('foo'') ==> false
    Number.isNaN(0/0) ==> false

**5. Number.prototype.toFixed()**

The toFixed method is used to manually set the decimal point. The number is rounded, if necessary, and a string is returned.
**IMPORTANT**: Floating point numbers cannot represent all decimals precisely in binary. This can lead to unexpected results, such as 0.1 + 0.2 === 0.3 returning **false** . 

    const number = 55.554;
    console.log(number.toFixed(2))

**6. Number.prototype.toPrecision()**

The toPrecision method is very similar to the toFixed method. One difference is that toPrecision returns the number to the specified paramater before the decimal point. Again the returning number will be rounded.

const number02 = 13.3876
console.log(number02.toPrecision(3)) /* ==> output: 13.4 */
console.log(number02.toFixed(3))   /* ===> output: 13.388 */