function sumtarget(nums, target){
    let solutions = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if((nums[i] + nums[j]) == target){
                solutions.push([nums[i], nums[j]])
            }
        }
    }
    return solutions;
}

let arr = [3, 1, 11, 2, 9, 7, 4, 5, -1, 13, 6];

let result = sumtarget(arr, 8);
console.log(result);