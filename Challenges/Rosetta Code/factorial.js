/*
***PROMPT***
Write a function to return the factorial of a number.
Factorial of a number is given by:
n! = n * (n-1) * (n-2) * ..... * 1

***EXAMPLE***
Input: factorial(3)
Expected Output: 6

Input: factorial(4)
Expected Output: 24

Input: factorial(0)
Expected Output: 1
*/

// First Accepted Solution
function factorial(n) {
    let total = 1;

    for (let i = 1; i <= n; i++) {
        total *= i;
    }

    return total;
}

// Golfed Solution (29 chars)
f = factorial = n => n < 2 ? 1 : n * f(n - 1)