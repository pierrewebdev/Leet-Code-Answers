//Question on Binary Search that asks you to transpose a matrix

//Pseudocode
//Go through every row in the 2d array
//Store the value of the current row and the current column
//Swap their positions



class Solution {
    solve(matrix) {
        const transArr = [];
        
        for(let i in matrix){
            transArr.push([]);
          for(let j in matrix){
              transArr[i].push(matrix[j][i]);
          }
          
        }
        
        return transArr;
    }
}