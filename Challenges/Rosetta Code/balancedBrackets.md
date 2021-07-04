## Challenge
Determine whether a generated string of brackets is balanced;
that is, whether it consists entirely of pairs of opening/closing brackets (in that order),
none of which mis-nest.

#### Example
Input: `isBalanced("[][]")`
Expected Output: `true`

Input: `isBalanced("[]]]")`
Expected Output: `false`

## Solutions

```js
// First Accepted Solution
function isBalanced(brackets) {
    // This can be an actual stack, but for fun I used just an int
    // since we don't require any of the functions of a stack
    let openBracketCount = 0;
    
    for (let bracket of brackets) {
        // If it's an opening bracket, add it to the stack
        if (bracket === '[') {
            openBracketCount++;
        } else {
            // If stack is empty when encountering a closing bracket it's invalid
            if (openBracketCount === 0) {
                return false;
            }

            // Remove it from the stack
            openBracketCount--;
        }
    }

    return true;
}
```

```js
// Golfed Solution (68 chars)
isBalanced = s => {
    c = 0
    o = !0

    for (b of s)
        if (b == '[') c++
        else if (!c--) o = !1

    return o
}
```

## References
