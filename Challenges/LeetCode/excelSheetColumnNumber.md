## Challenge

Given a string `columnTitle` that represents the column title as appear in an Excel sheet, return its corresponding column number.

#### Example #1

Input: `columnTitle('A')`

Expected Output: `1`

#### Example #2

Input: `columnTitle('AB')`

Expected Output: `28`

#### Example #3

Input: `columnTitle('ZY')`

Expected Output: `701`

#### Constraints
 - `1 <= columnTitle.length <= 7`
 - `columnTitle` consists only of uppercase English letters.
 - `columnTitle` is in the range `['A', 'FXSHRXW']`.

## Solutions

```js
// First Accepted Solution
function titleToNumber(columnTitle) {
    // Creates a string of letters to use the index of each one to switch to numbers
    const letterValues = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let totalValue = 0;

    // Iterate through the array from right to left
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        // Gets the value of the letter from the string above, then multiplies it by 26
        // raised to a power based off which letter we're currently on (first letter from the
        // right is 0, second is 1, and so on)
        totalValue += 26 ** (columnTitle.length - 1 - i) * letterValues.indexOf(columnTitle[i]);
    }

    return totalValue;
}
```

```js
// Optimized Preformance
function titleToNumber(columnTitle) {
    let totalValue = 0;

    for (let letter of columnTitle) {
        // Multiplies the current total by 26 each time, then adds the
        // letters number value to the total
        totalValue = totalValue * 26 + letter.charCodeAt() - 64;
    }

    return totalValue;
}
```

```js
// Golfed Solution (65 chars)
titleToNumber = c => [...c].reduce((a, e) => a = a * 26 + e.charCodeAt() - 64, 0)
```

## References

 - [String.prototype.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
 - [String.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)