//Pseudocode

/*
 The important part here is to keep track of the previous node, the current node and the next node
 
 1. create a new node to to be the tail at the end of the reversed node list
 2. store that node in a variable
 3. go through each node in the linked list and do the following:
    - store the value of the next node into a variable
    - point the current node at the node that you created in step 2
    - reset the value of the variable for the node in step 2 to the current node that you are working on
    -  set the value of the current node as being the next node that you stored at the beginning of this step (step #3)
*/
var reverseList = function(head) {
    let previousNode = null
    
    while(head !== null){
        let nextNode = head.next
        head.next = previousNode
        previousNode = head
        head = nextNode     
    }
    
    return previousNode
};