/*
***PROMPT***
The objective is to write a function that finds the sum of all positive multiples of 3 or 5 below n.

***EXAMPLE***
Input: sumMults(10)
Expected Output: 23
*/



// First Accepted Solution
function sumMults(n) {
    let total = 0;

    // Adds all multiples of 3 below given number
    for (let i = 3; i < n; i += 3) {
        total += i;
    }

    // Adds all multiples of 5 below given number, unless its also a multiple of 3
    for (let i = 5; i < n; i += 5) {
        if (i % 3 === 0) continue;
        total += i;
    }

    return total;
}



// Golfed Solution (62 chars)
sumMults = n => {
    t = 0
    
    for (i = 1; i < n; i++)
        if (!(i % 3) || !(i % 5))
            t += i

    return t
}