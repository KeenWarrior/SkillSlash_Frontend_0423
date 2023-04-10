// https://leetcode.com/problems/build-array-from-permutation/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {

    let arr = new Array(nums.length);
    for(let i=0; i<nums.length; i++){
        arr[i] = nums[nums[i]];
    }
    return arr;
    
};
