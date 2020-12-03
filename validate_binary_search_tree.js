//Pseudocode
/*
 1.Check to see if node is equal to null, if it is then return true
 2.If the root node is valid, then store its value in a variable
 3. create a lower and upper bound to check if the left subtree and right subtree are sorted in regards to the root node
 4. check to see if the value of the current node is within the range of lower bound to upper bound; if it is not return false
 4.  Make a recursive call on the left and right subtree
   - Note that as we make the recursive calls, the lower bound will be adjusted for every recursive made on the left side; the upper bound will be adjusted for every recursive call made on the right side.
*/

var isValidBST = function(root) {
    return helper(root)
 };
 
 var helper = (node, lowerLimit = Number.NEGATIVE_INFINITY,upperLimit = Number.POSITIVE_INFINITY ) =>{
     if(!node){
         return true
     }
     
     let val = node.val
     
     if(val <= lowerLimit || val >= upperLimit){return false}
     if(!helper(node.left, lowerLimit, val)){return false}
     if(!helper(node.right, val, upperLimit)){return false}
     
     return true
     
 }
 
 