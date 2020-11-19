// Directions

/* 

Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
*/


//Pseudocode

//Will focus on one array first
//Go through each item in array and count how many of each item you have
// Compare the items from the first array with the items from the second
// If you have an item in the second array that matches one in the first, then you will store it to a  new array and decrease the count of the item you matched from the first 


//Answer

var intersect = function(nums1, nums2) {
      
    const map = new Map()
    
    nums1.forEach(num => {
        if(map.has(num)){
            map.set(num,map.get(num) + 1)
        }else{
            map.set(num,1)
        }
    })
      
      const results = []
      nums2.forEach(num => {
          if(map.has(num) && map.get(num) > 0){
              results.push(num)
              map.set(num,map.get(num) - 1)
          }
      })
      return results;
};