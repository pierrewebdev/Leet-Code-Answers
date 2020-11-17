// Directions

/*Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.*/


//Psuedocode

/*
 1. loop through each element in the given array

 2. for each element, check to see if the index at i is not equal to the last known index of that element.
   a. if true, then that means that the current element is unique
   b. if false, then that means there are duplicates in the array

3. The directions says that the array of numbers is sorted so if the condition is false, then you need to remove the duplicates based on their index position.
*/

//Answer

const removeDuplicates = function(nums){
    for (let i = 0; i < nums.length; i++){
        if (i !== nums.lastIndexOf(nums[i])){
            nums.splice(i,nums.lastIndexOf(nums[i]) - i);
        }
    }
    return nums.length
}

