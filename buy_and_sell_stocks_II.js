// Directions

/* 
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/

//Pseudocode
//create a variable to keep track of the maximum profit so far
//Go through each individual element in the array
//On each array element compare the current price of the array element to the price of yesterday's element
// if the price of the current element is greater than the price of the element before it, subtract the current element's price from the price of the element at the index before it and append that result to the maximum profit variable

// This makes sense because if difference you took between the prices will always be positive which denotes a constant profit

//Answer
var maxProfit = function(prices) {
    let maxProfit = 0;
     for(let i = 0; i < prices.length; i++){
         if(prices[i] > prices[i-1]){
             maxProfit += prices[i] - prices[i-1]
         }
     }
     
    return maxProfit;
 };