/*
***PROMPT***
Determine whether a given year is a leap year in the Gregorian calendar.

***EXAMPLE***
Input: isLeapYear(2018)
Expected Output: false

Input: isLeapYear(2016)
Expected Output: true
*/



// First Accepted Solution
function isLeapYear(year) {
    // If the year is divisible by 100 and not 400 then it's not a leap year
    if (year % 100 === 0 && year % 400 !== 0) return false;

    // Returns true if the year is divisible by 4, and false if not
    return year % 4 === 0;
}



// Golfed Solution (35 chars)
isLeapYear = y => y % 100 ? !(y % 4) : !(y % 400)