//pseudocode

/*
1) Look Through each element in the array in reverse order
2) If the current number is less than 9, reset that index to zero just like you would in normal addition
3) If not, then set the current digit to zero and move on to the next digit
When the statement on step 2 fails, we move on to the next number to simulate carrying over the 1 to the next digit in actual addition
4) Repeat step 2 and if it fails again move on to step 3
5) If you make it to the end of your array repeating steps 2 and 3, then that means that you will have to add 1 to the beginning of the array, just like you would if you did 999 + 1 in regular addition

You can do this by returning a new array which contains a 1 at the front followed by the all the elements in the digits array 
*/


var plusOne = function(digits){
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i]++
            break
        }
        digits[i] = 0
    }
    
     let areTheyAllNine = digits.every(num => num === 0)
     if(areTheyAllNine){
         return [1,...digits]
     }
    return digits
}