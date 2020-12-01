//Pseudocode

//Find the last digit
//Multiply that digit by 10 to get a new place in the number
//Add the the last digit of the number left over from the original and repeat the 1st 2 steps until the original number is 0

var reverse = function(x){
    let rev = 0;
    const maxConstraint = 2**31 -1
    const negative = x < 0
    
    if(negative){
        x = x * -1
    }

    while(x !== 0){
        let lastDigit = x % 10
        rev = rev * 10 + lastDigit
        x = Math.floor(x/10)
        console.log("rev:", rev)
        console.log("current x:", x)
    }
    
    if (rev > maxConstraint){
        return 0
    } else if(negative){
        return rev * -1
    }
    
    return rev
}