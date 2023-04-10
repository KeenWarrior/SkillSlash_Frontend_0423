
function sortLogic(first, second){
    
    if(first%2 == 0){
        first = first - 2000;
    }
    if(second%2 == 0){
        second = second - 2000;
    }
    return first - second
}


function swap(nums, first, second){
    let temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}


function bubble_sort(arr, sortLogic){
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length - i - 1; j++){
            if(sortLogic(arr[j], arr[j+1]) > 0){
                swap(arr, j, j+1)
            }
        }
    }
}

let whatever = [1, 7, 2, 8, 6, 20, 11];

bubble_sort(whatever, sortLogic);

console.log(whatever);

