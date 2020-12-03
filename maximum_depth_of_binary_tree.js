//pseudocode  --> Problem requires a recursive approach
/*
 1. Go through the left and right hand side of a node
 2. Pick one side first and repeat step 1 for each node you get null for the left and right values for the node; when you get to this point that means you have reached the botton
 3. As you do steps 1 and 2 keep track of some sort of count of the number of nodes you go through
 4. Return the side that has the highest count from the root node
*/
var maxDepth = function(root) {
    return deepestNode(root,0)
};

const deepestNode = (currentNode,sum) =>{
    
    if(!currentNode){
        return sum;
    }
    
    let leftBranch = deepestNode(currentNode.left, sum + 1);
    let rightBranch = deepestNode(currentNode.right, sum + 1);
    
    return leftBranch > rightBranch ? leftBranch : rightBranch;
}