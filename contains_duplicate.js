//Pseudocode

//create a new variable and store the value false in it
//The purpose of this variable is to return it at the end to show if the array has all unique values or not
//Look through each element in the array
//compare each element's current index with their last known index in the array to see if they are at the same index position
//if the comparison returns that they are not the same index position, then that means that the numbers are not unique and you can set the variable that you set at the beginning to true
//if the comparison returns the same index position, then that means the number is unique, so you can keep the variable's value as false
//Return the variable at the end of the function



var containsDuplicate = function(nums) {
    let booleanToReturn = false;
    nums.forEach((num,index) =>{
        if(index !== nums.lastIndexOf(num)){
            booleanToReturn = true;
        }
    })
    return booleanToReturn;
};
