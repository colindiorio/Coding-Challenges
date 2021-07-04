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
function titleToNumber(columnTitle) {
    let total = 0;
    let values = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    for (let i = columnTitle.length - 1; i >= 0; i--) {
        total += 26 ** (columnTitle.length - 1- i) * values.indexOf(columnTitle[i]);
    }

    return total;
}
```

## References
