let whatever = [1, 7, 2, 8, 6, 20, 11];

// console.log(arr.length)

function swap(nums, first, second){
    let temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}


function bubble_sort(arr){
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
            }
        }
    }
}

bubble_sort(whatever);


console.log(whatever);