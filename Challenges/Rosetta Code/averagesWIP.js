// First Accepted Solution
function mode(nums) {
    const occurrences = {};
    let mostFrequent = [];
    let highestCount = -1;
    
    for (let num of nums) {
        // Increment amount of occurrences of the current number
        occurrences[num] = occurrences[num] + 1 || 1;
        
        // If occurrences reach a new high, update the highestCount & mostFrequent numbers
        if (occurrences[num] > highestCount) {
            mostFrequent = [num];
            highestCount = occurrences[num];
        } else if (occurrences[num] === highestCount) {
            mostFrequent.push(num);
        }
    } 

    return mostFrequent.sort((a, b) => a - b);
}

// Golfed Solution (116 chars)
mode = N => {
    o = {}
    m = []
    h = 0
    
    for (n of N) {
        o[n] = o[n] + 1 || 1
        
        if (o[n] > h)
            m = [n], h = o[n]
        else if (o[n] == h)
            m.push(n)
    } 

    return m.sort((a, b) => a - b)
}


console.log(mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]));
console.log(mode([1, 2, 4, 4, 1]));