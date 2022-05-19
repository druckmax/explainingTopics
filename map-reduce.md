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
