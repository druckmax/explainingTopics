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