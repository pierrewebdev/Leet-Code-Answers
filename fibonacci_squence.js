var fib = function(N) {
    // set up a base for our fib function; if N is less than or equal to 1 we will return N
    //if the if statement is not triggered we will make a call to our helper function to use memoization
    
    if (N <=1){
        return N;
    }
    
   return memoize(N)
};

const memoize = (N) =>{
    //we need to set up an object to keep track of the current numbers N that we have been through
    //set up the object have the sums of the base case from the fib function for us
    //add new keys to the object to avoid unneccessary calls to the fib function
    //need to compute all fibonnaci sums up to the value that comes after N and store them in the object
    
    const cacheObj = {"0":0,"1":1}
    let counter = 2
    
    while(counter < N+1){
        cacheObj[counter] = cacheObj[counter-1] + cacheObj[counter-2]
        counter ++;
    }
    return cacheObj[N]   
}
