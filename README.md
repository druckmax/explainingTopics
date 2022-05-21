# Advanced Array Methods: sort, filter, forEach

## sort

Like the name says, sort is used for sorting arrays. The default behaviour is a ascending order. If no function is passed in, the sort method automatically converts the items to a string and compares them to the sequence of UTF-16 code values.
This means:
- strings will be sorted alphabetically.
- Converted numbers behave not like you think because they are sorted in the unicode order:

      sortedArr = [1, 10000, 21, 30 , 4];
            
To fine tune our sorting, we can pass in functions to the sort method. The function allows us to pass in two arguments for comparison. In this way you can, for example, reverse the sorting order from ascending to descending.

**Example 1:** Sorting the object keys in a descending order
In this example we get the keys from 'obj' with the Object.keys method and then sort the keys starting from 20 down to 0.2.

    let obj = {
        '10': 1,
        '1': 2,
        '20': 2,
        ".2": 1,
        '5': 1,
    }

    let sortedObj = Object.keys(obj).sort((a,b)=> b-a);
    console.log(sortedObj);

But why is the order correct? Isn't the sorting algorhythm based on unicode and we are working with strings? 🤔 
This is because of type coercion. Remember?

    1+'1' = '11'

But:

    1-'1'=0
    
And also:

    '1'-'1'=0*/

## filter

The filter method is, like its name says, for filtering elements that pass or not pass a certain condition. The filter method always needs a function to be executed. The filter method does not mutate your original array, but returns a new one. Common use cases can be filtering words by a certain length or looking for only a certain data type in an array.

**Example:** Get all the elements from the array which are a string

    const arr = [1, 2, true, null, 'bananas', undefined, 'are', false, 'delicious']

    const filteredArr = arr.filter( i => typeof i === 'string')
    console.log(filteredArr);

## forEach

The forEach method runs a function for each element in an array. forEach does not mutate the array,on which it is being called, but it does NOT create a new one either. So, unlike map or reduce, it does not return a value (technically it returns undefined) and this is also why it is not chainable and often can be found at the and of a chain. 

Basically the forEach method is very similar to a for-loop, but with the exeception that you cannot break or stop forEach like you can in a for loop (using break or continue and without being hacky).

Typical use cases can be, for example, iterating over arrays, if we want to iterate over ALL of them and not have any conditions that should result in a skip or stop.

**Example 2:** Back to our sorted object, or better said, sorted array of object keys. We now want to print each object key AND its corresponding value to the console. We retrieve the value from the object with obj[key] and its current 'key', but take over the order, which we created with sort in Example 1.

    obj = {
        '10': 1,
        '1': 2,
        '20': 2,
        ".2": 1,
        '5': 1,
    }

    sortedObj = Object.keys(obj)
                        .sort((a,b)=> b-a)
                        .forEach( key => console.log(`${obj[key]} x ${key}€`));


    console.log(sortedObj);

# Map & Redcue

## Map

The map method calls a function for every element in an array. In doing so, it creates a new array and does not mutate the original array. Therefore we shouldn't use map if we are not using the array it returns or if we are not returning a value.
The map method's callback function takes in maximum three arguments:

- value: the current value or element being processed
- index: the curerent index of the element being processed
- array: the array the method is being called upon

The map method works with just one argument. Also the array argument can be often times left out, because we are already calling the method on an array. In some cases it is helpful, though, for example in long chains or if the array is not bound to a variable.

Example 1: In this example we want to reformat the objects in an array, assigning the value of key as a key in the returned object and the value of 'value' as its value.

    const objArr = [
        {key: 'apple', value: 5},
        {key: 'banana', value: 3},
        {key: 'pear', value: 1},
        {key: 'kiwi', value: 10},
    ]

    const formatArr = objArr.map(({key, value}) => ({[key]: value}));

    console.log(formatArr);

## Reduce

Unlike the map method, the reduce method does not return an array, but returns a single value. Its callback function takes in a total of 4 arguments, which are:

- previousValue: the value resulting from the previous call
- currentValue: the value of the current element.
- currentIndex: the index position of the currentValue
- array: the array the method is being called upon

The reduce method gives the opportunity to give a initalValue, after the callback function, seperated by a comma. The initialValue defines the value to which previousValue can be set on the first call. Note, that if you do not define an initial value, the callback function will not go over every element in the array, but the initalValue will be set to <code>el[0]</code>, so the method starts at  <code>el[1]</code>.

The reduce method does not change the array it is called upon, but the callback function might do so. In that case reduce does not iterate over the appended items from the callback function, but takes the form of the array at the time the reduce method was first called.

//Example 1: In this exampe we want to find out which number is missing in the array with numbers from 1 to 10. To do this we use reduce to get the sum of the array and then compare it to the targetSum, which is the sum of all the numbers in the complete array.

    const missingArr = [1, 2, 3, 4, 6, 7, 8, 9, 10];

    function missingNums(arr) {
    const targetSum = 55;
    const isSum = arr.reduce((sub, x) => sub + x, 0);
    return targetSum - isSum;
    }

    console.log(missingNums(missingArr));

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