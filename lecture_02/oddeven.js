// Write a program to sort odd and even numbers without taking extra space. (place
// even numbers first then all the odd numbers} For eg: {3,8,5,13,6,12,18,5}
// Ans: {8,6,12,18,3,5,13,5}

function oddeven(nums) {
  let odd_index = 0; // looking at first odd
  let even_index = 0; // looking for first event

  // when you have both you swap
  while (even_index < nums.length) {
    if (nums[even_index] % 2 == 0) {
      swap(nums, odd_index, even_index);
      odd_index++;
    }
    even_index++;
  }
}

function swap(nums, first, second) {
  let temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
}

let arr = [3, 8, 5, 13, 6, 12, 18, 5];

oddeven(arr);
console.log(arr);
