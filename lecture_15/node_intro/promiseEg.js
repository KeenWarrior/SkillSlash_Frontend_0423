const fs = require('fs');

function handler(resolve, reject) {
    fs.readFile('hell.txt', 'utf8', (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
}

const myPromise = new Promise(handler);

myPromise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);
});

// function add(a, b){
//     return a+b;
// }


// function ops(op, a, b){
//     return op(a,b);
// }

// const output = ops(add, 10, 20);