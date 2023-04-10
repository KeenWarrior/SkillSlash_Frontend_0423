function reverse(nums){

    for(let i=0; i < Math.floor(nums.length / 2); i++){
        swap(nums, i, nums.length-i-1);
    }
}

function swap(nums, first, second){
    let temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}

let arr = [1, 4, 2, 7, 0];

reverse(arr);

console.log(arr);

