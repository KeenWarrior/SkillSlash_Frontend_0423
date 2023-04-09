function sortLogic(first, second){
    if((first % 2) == (second % 2)){
        return 0;
    } else if((first % 2) == 0){
        return 1;
    } else {
        return -1;
    }
}

// console.log(sortLogic(10, 11));

let arr = [1, 5, 2, 5, 1, 7, 33, 10];

arr.sort(sortLogic);

console.log(arr);
