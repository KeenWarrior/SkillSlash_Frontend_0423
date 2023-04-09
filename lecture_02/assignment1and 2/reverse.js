// 6. Write a program to reverse a number (9735 -> 5379)

function reverse(num){
    let result = 0;

    while(num > 0){
        let digit = num % 10;
        result = result * 10 + digit;
        num = Math.floor(num/10);
    }

    return result;
}

console.log(reverse(12545453));