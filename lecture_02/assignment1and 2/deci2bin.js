function deci2bin(deci){
    let bin = 0;
    let place = 1;
    while(deci > 0){
        let rem = deci % 2;
        deci = Math.floor(deci/2);
        bin = bin + (place * rem);
        place = place * 10;
    }

    return bin;
}


console.log(deci2bin(7));