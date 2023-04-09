function deci2bin(deci){
    let bin = 0;
    let place = 1;
    while(deci > 0){
        let rem = deci % 8;
        deci = Math.floor(deci/8);
        bin = bin + (place * rem);
        place = place * 10;
    }

    return bin;
}


console.log(deci2bin(16));