## Challenge

Write a function to return the factorial of a number.

Factorial of a number is given by:

n! = n * (n-1) * (n-2) * ..... * 1

#### Example #1
Input: `factorial(3)`

Expected Output: `6`

#### Example #2
Input: `factorial(4)`

Expected Output: `24`

#### Example #3
Input: `factorial(0)`

Expected Output: `1`

## Solutions

```js
// First Accepted Solution
function factorial(n) {
    let total = 1;

    for (let i = 1; i <= n; i++) {
        total *= i;
    }

    return total;
}
```

```js
// Golfed Solution (29 chars)
f = factorial = n => n < 2 ? 1 : n * f(n - 1)
```

## References

 - [Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

 - [Conditional (Ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)