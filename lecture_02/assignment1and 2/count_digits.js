// Write a program to count the number of digits in a number.

function count_digits(num){

    let counter = 0;

    while(num >= 1){
        num = num/10;
        counter+=1;
    }

    return counter;
}

console.log(count_digits(12453));