//pseudocode

/*
1. go through each string in the array
2. check to see if they all have the same first letter
3. if they do then store that letter in a variable called lcp; if they don't return an empty string
4. Do steps 1 and 2 again until you find a letter they don't all have in common
5. once you find this letter you return the least common prefix
*/
var longestCommonPrefix = function(strs) {
    let lcp = ""
    let currentLetterInCommon = true
    let index = 0
    
    if (strs === null || strs.length === 0)return lcp
    while (currentLetterInCommon && index < strs[0].length){
        const currentLetter = strs[0][index]
        currentLetterInCommon = strs.every(str => str[index] === currentLetter)
        if(currentLetterInCommon){
            lcp += currentLetter
        }
        index++;
    }
    return lcp
};