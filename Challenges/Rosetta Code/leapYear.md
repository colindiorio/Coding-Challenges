## Challenge

Determine whether a given year is a leap year in the (Gregorian calendar)[https://en.wikipedia.org/wiki/Leap_year#Gregorian_calendar].

#### Example #1

Input: `isLeapYear(2018)`

Expected Output: `false`

## Solutions

```js
// First Accepted Solution
function isLeapYear(year) {
    // If the year is divisible by 100 and not 400 then it's not a leap year
    if (year % 100 === 0 && year % 400 !== 0) return false;

    // Returns true if the year is divisible by 4, and false if not
    return year % 4 === 0;
}
```

```js
// Golfed Solution (35 chars)
isLeapYear = y => y % 100 ? !(y % 4) : !(y % 400)
```

## References

- [Remainder Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

- [Conditional (Ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)