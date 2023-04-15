// https://leetcode.com/problems/remove-outermost-parentheses/

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {

    let result = [];

    let counter = 0;

    for(let i=0; i<s.length; i++){
        if(s[i] == "("){
            counter++;
            if(counter != 1){
                result.push("(");
            }
        } else if (s[i] == ")"){
            counter--;
            if(counter != 0){
                result.push(")");
            }
        }
    }

    return result.join("");
};