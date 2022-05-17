// SORT

/* Example 1: Sorting the object keys in a descending order
In this example we get the keys from 'obj' with the Object.keys method and then sort the keys starting from 20 down to .2. We change the deault ascending order by passing in a function that compares the values in the opposite order. This also helps us to compare numbers. Why? See below.*/
console.log(`
Example Sort:
`);

let obj = {
    '10': 1,
    '1': 2,
    '20': 2,
    ".2": 1,
    '5': 1,
}

let sortedObj = Object.keys(obj).sort((a,b)=> b-a);
console.log(sortedObj);

/* But why is the order correct? Isn't the sorting algorhythm based on unicode and we are working with strings? 🤔 
This is because of type coercion. Remember?
1+'1' = '11' but 1-'1'=0 and also '1'-'1'=0*/



// FILTER

// Example: Get all the elements from the array which are a string
console.log(`
Example Filter:
`);


const arr = [1, 2, true, null, 'bananas', undefined, 'are', false, 'delicious']

const filteredArr = arr.filter( i => typeof i === 'string')
console.log(filteredArr);



//FOR EACH

// Example 2: Back to our sorted object, or better said, sorted array of object keys. We now want to print each object key AND its corresponding value to the console. We retrieve the value from the object with obj[key] and its current 'key', but take over the order, which we created with sort in Example 1.
console.log(`
Example forEach:
`);

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
