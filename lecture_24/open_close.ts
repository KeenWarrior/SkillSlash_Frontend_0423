class Teacher {
    teach() {
        console.log("teaching");
    }
}

class ComputerTeacher extends Teacher {
    teach() {
        console.log("teaching computer");
    }

    demo() {
        console.log("demo");
    }
}