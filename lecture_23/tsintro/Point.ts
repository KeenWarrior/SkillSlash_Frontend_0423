interface ComparableTeacher {
  compareTo(another: Teacher): number;
}

interface Teacher extends ComparableTeacher {
  name: string;
  age: number;
  subject: string;
  teach(): void;
}

class MathTeacher implements Teacher {
  name: string;
  subject: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.subject = "Maths";
  }

  teach(): void {
    console.log("Teaching Maths");
  }

  bore(): void {
    console.log("Boring");
  }

  compareTo(another: Teacher): number {
    if (this.age > another.age) {
      return this.age - another.age;
    } else if (this.age < another.age) {
      return another.age - this.age;
    } else {
      return 0;
    }
  }
}

class ComputerTeacher implements Teacher {
  name: string;
  subject: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.subject = "Maths";
  }

  teach(): void {
    console.log("Teaching Maths");
  }

  bore(): void {
    console.log("Boring");
  }

  compareTo(another: Teacher): number {
    if (this.age < another.age) {
      return another.age - this.age;
    } else if (this.age > another.age) {
      return this.age - another.age;
    } else {
      return 0;
    }
  }
}

const arun: Teacher = new MathTeacher("Arun", 30);
const tejas: Teacher = new ComputerTeacher("Tejas", 20);

console.log(arun.compareTo(tejas));
console.log(tejas.compareTo(tejas));
