// https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {

    let max = 0;

    for(let account of accounts){
        let total = 0;
        for(let balance of account){
            total+=balance;
        }

        if(total > max){
            max = total;
        }
    }

    return max;
};