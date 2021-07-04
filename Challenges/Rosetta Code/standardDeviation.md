## Challenge
Write a function that takes an array of numbers as parameter and returns the [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) of the series.

#### Example #1
Input: `standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])`

Expected `Output: 2`


## Solutions

```js
// First Accepted Solution
function standardDeviation(nums) {
    // Function for getting the sum of all elements in an array (when used in reduce)
    const sum = (accumulator, element) => accumulator += element;
    // Calculates average by getting the sum of all the elements in the array and dividing by the amount of elements
    const getAverage = arr => arr.reduce(sum) / arr.length;

    const average = getAverage(nums);
    // Calculates standard deviation by changing each element to the difference between itself
    // and the average of the array, gets the average of that new array, then square roots it
    const deviation = Math.sqrt(getAverage(nums.map(e => (e - average) ** 2)));

    // Returns the result rounded to 3 decimal places
    return Math.round(deviation * 1000) / 1000;
}
```

```js
// Optimized Solution
function standardDeviation(nums) {
    let total = 0;
    let squareTotal = 0;
    const numCount = nums.length;

    // Gets the total of each number & each number squared
    for (let num of nums) {
        total += num;
        squareTotal += num * num;
    }

    // Calculates standard deviation by using the shortcut formula
    let deviation = Math.sqrt((squareTotal - total ** 2 / numCount) / numCount);
    
    // Returns the result rounded to 3 decimal places
    return Math.round(deviation * 1000) / 1000;
}
```

```js
// Golfed Solution (106 chars)
standardDeviation = (n, A = a => a.reduce((a, e) => a += e) / a.length) => +Math.sqrt(A(n.map(e => (e - A(n)) ** 2))).toFixed(3)
```

## References

 - [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

 - [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)