let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (const fruit of fruits) {
//     console.log(fruit);
// }

function processFruit(fruit) {
    console.log(fruit);
}

fruits.map(processFruit);