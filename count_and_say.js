//pseudocode
/*
 The purpose of this question is to create a new sequence based on what's currently there
 
 1. Create a variable storing what you would return on the first row of the sequence which would be 1
 2. If the number provided (n) is 1 then you will return that variable that you created on step 1 immediately
 3. You will repeat the next few steps n number of times if the number provided is greater than 1
 
 3.a create 3 new variables:
  -once called "currentChar" to store the index position of the 1st character from the sequence before the current one
  -one called "count" to store the count of how many times that same number from the 1st position was encountered in the previous sequence
  - one called "newStr" to store the string of the new number sequence you are making for the current value of n

  3.b count how many times a number is encountered in that row in its current order before getting to a new number and store that count inside of the variable responsible for the count
  3.c update newStr with the count and currentChar before moving currentChar to the next unique number in the row at n-1; when you move on reset the value of count and currentChar so they function properly
  3.d Repeat that process until you have gone through all the numbers in the sequence from the row before

 4. replace that sequence string from step 1 with the content of newStr 
*/

var countAndSay = function(n) {
  
    let finalSeq = "1"
    if(n <= 1){
        return finalSeq;
    }
    
    while(n > 1){
        let newStr = ""
        let currentChar = 0
        let count = 0
        
        while(currentChar < finalSeq.length){
            while(finalSeq.charAt(currentChar) === finalSeq.charAt(count)){
            count++;
        }
        
        newStr += count - currentChar
        newStr += finalSeq.charAt(currentChar)
        currentChar = count.valueOf()
      }
        finalSeq = newStr.slice()
        n--;
        newStr = ""
        currentChar = 0
        count = 0
  }
    
    return finalSeq
};