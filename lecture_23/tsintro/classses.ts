class Human {

    name: string;
    age: number;

    constructor(name : string, age: number) {
        this.name = name;
        this.age = age;
    }

    dance(): void{
        console.log(this.name + " is dancing");
    }

    incAge(): void{
        this.age = this.age + 1;
    }
}

let anuj = new Human("Anuj Garg", 29);
let ravi = new Human("Ravi", 20);

// console.log(anuj.name, anuj.age);

anuj.dance();
anuj.incAge();

console.log(anuj.name, anuj.age);
// ravi.dance();

