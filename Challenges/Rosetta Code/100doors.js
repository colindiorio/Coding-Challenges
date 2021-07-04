/*
***PROMPT***
There are 100 doors in a row that are all initially closed. You make 100 passes by the doors.
The first time through, visit every door and 'toggle' the door
(if the door is closed, open it; if it is open, close it).
The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it.
The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

***EXAMPLE***
Input: getFinalOpenedDoors(100)
Expected Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
*/



// First Accepted Solution
function getFinalOpenedDoors(numDoors) {
  // Doors implemented as an array of booleans (to represent opened/closed)
  // (true = open, false = closed)
  const doors = new Array(numDoors).fill(false);
  
  // Loops through each number and toggles multiples of that number (ex: 2, 4, 6, 8...)
  for (let i = 0; i < doors.length; i++) {
    for (let j = i; j < doors.length; j += (i + 1)) {
        doors[j] = !doors[j];
    }
  }
  
  // Replaces opened doors with their door number
  for (let i = 0; i < doors.length; i++) {
    if (doors[i]) doors[i] = i + 1;
  }
  
  // Removes closed doors from array and returns result
  return doors.filter(e => e);
}



// Optimized Preformance
function getFinalOpenedDoors(numDoors) {
    const doors = [];

    // Adds all perfect squares lower than the number of doors to the array
    for (let i = 1; i * i <= numDoors; i++) {
        doors.push(i * i);
    }

    return doors;
}



// Golfed Solution (66 chars)
getFinalOpenedDoors = n => {
    d = []

    for (i = 1; i * i <= n; i++)
        d.push(i * i)

    return d
}



// BONUS:
// Oneliner (70 chars)
getFinalOpenedDoors = n => [...Array(~~Math.sqrt(n))].map((e, i) => (i+1)**2)