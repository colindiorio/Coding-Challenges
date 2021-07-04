/*
***PROMPT***
Given a string, calculate the frequency of each character.
All characters should be counted. This includes lower and upper case letters, digits, whitespace, special characters, or any other distinct characters.

***EXAMPLE***
Input: letterFrequency("Not all that Mrs. Bennet, however")
Expected Output: [[" ", 5], [",", 1], [".", 1], ["B", 1], ["M", 1], ["N", 1],
                  ["a", 2], ["e", 4], ["h", 2], ["l", 2], ["n", 2], ["o", 2],
                  ["r", 2], ["s", 1], ["t", 4], ["v", 1], ["w", 1]]
*/



// First Accepted Solution
function letterFrequency(text) {
    const frequencies = {};

    // Increment each characters count in the frequencies object
    for (let char of text) {
        frequencies[char] = (frequencies[char] || 0) + 1;
    }

    return Array.from(Object.entries(frequencies).sort());
}



// Golfed Solution (92 chars)
letterFrequency = s => {
    f = {}

    for (c of s) f[c] = (f[c] || 0) + 1

    return Array.from(Object.entries(f).sort())
}