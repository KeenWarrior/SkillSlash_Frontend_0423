// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {

    let max = 0;

    let counter = 0;

    for(let i=0; i<s.length; i++){
        if(s[i] == "("){
            counter++;
            if(counter > max){
                max = counter;
            }
        } else if (s[i] == ")"){
            counter--;
        }
    }

    return max;
    
};