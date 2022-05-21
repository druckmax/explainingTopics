// MAP
// Example 1: In this example we want to reformat the objects in an array, assigning the value of key as a key in the returned object and the value of 'value' as its value.
console.log(`
Map Example 1
`);

const objArr = [
  { key: "apple", value: 5 },
  { key: "banana", value: 3 },
  { key: "pear", value: 1 },
  { key: "kiwi", value: 10 },
];

const formatArr = objArr.map(({ key, value }) => ({ [key]: value }));

console.log(formatArr);

//Example 1: In this exampe we want to find out which number is missing in the array with numbers from 1 to 10. To do this we use reduce to get the sum of the array and then compare it to the targetSum, which is the sum of all the numbers in the complete array.
console.log(`
Reduce Example 1s
`);

const missingArr = [1, 2, 3, 4, 6, 7, 8, 9, 10];

function missingNums(arr) {
  const targetSum = 55;
  const isSum = arr.reduce((sub, x) => sub + x, 0);
  return targetSum - isSum;
}

console.log(missingNums(missingArr));