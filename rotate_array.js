//pseudocode

// make a copy of the array
//create a counter and use a while loop with k as the ending the condition
// until k is reached by the counter, remove the last value from the copied array and place it in the front
//return the copied array once the while loop's condition fails

var rotate = function(nums, k) {
    let count = 0;
    
    while(count < k){
        let poppedVal = nums.pop();
        nums.unshift(poppedVal);
        count++;
    }
    return nums;
};
