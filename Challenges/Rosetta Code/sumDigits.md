## Challenge
Write a function that takes a string as a parameter. This string represents a number that can be in any base (less than 37) and return the sum of its digits.

#### Example #1
Input: `sumDigits("1234")`

Expected Output: `10`

#### Example #2
Input: `sumDigits("fe")`

Expected Output: `29`

#### Example #4
Input: `sumDigits("999ABCXYZ")`

Expected Output: `162`

## Solutions

```js
// First Accepted Solution
function sumDigits(num) {
    // Since its passed as a string, we can split it into an array of characters
    const digits = num.split('');
    let total = 0;
    
    // Iterates through each digit and parses it to a base 36 integer & adds it to the total
    for (let digit of digits) {
        total += parseInt(digit, 36);
    }

    return total;
}
```

```js
// Golfed Solution (59 chars)
sumDigits = n => n.split('').reduce((a, e) => a += parseInt(e, 36), 0)
```

## References

 - [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

 - [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

 - [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)