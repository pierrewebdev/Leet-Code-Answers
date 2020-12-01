var firstUniqChar = function(s) {
    const strObj = {}
    
    for (let i = 0; i < s.length; i++){
        if (!strObj[s[i]]){
            strObj[s[i]] = {
              count:1
            }
        }else{
            strObj[s[i]].count ++;
        }
    }
    
    for(let i = 0; i < s.length; i++){
        console.log(strObj[s[i]])
        if(strObj[s[i]] && strObj[s[i]].count === 1){
            return i;
        }
    }
    return -1;
};