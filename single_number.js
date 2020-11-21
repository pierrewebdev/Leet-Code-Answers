//Solution 1 pseudocode

//create a new object to store values as keys with the count as the value
    //look through every number in the array
    //every time a number is encountered for the first time, it will be entered into the object with a count of 1 as a value
    //if the number is already in the object, add 1 to the count stored as a value
    
    //once done going through all numbers in the array, now look through each key and value in the object
    //return the key whose object has a count value of 1

//Answer

var singleNumber = function(nums) {
    const countObj = {}
    nums.forEach(num => {
        if(countObj.hasOwnProperty(num)){
            countObj[num] = countObj[num] + 1;
        }else{
            countObj[num] = 1;
        }
    });
    
      let keyToReturn;
      
      for(let key in countObj){
          if(countObj[key] === 1){
              keyToReturn = key
          }
      }
      return keyToReturn
  };
  
  