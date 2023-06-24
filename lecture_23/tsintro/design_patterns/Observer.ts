class Lecture {
  private subject: string;
  private teacherName: string;
  private classRoom: string;
  private time: Date;

  constructor(subject, teacherName, classRoom: string, time: Date) {
    this.classRoom = classRoom;
    this.time = time;
    this.subject = subject;
    this.teacherName = teacherName;
  }

  public toString(): string {
    return `Lecture: ${this.subject} - ${this.teacherName} - ${this.classRoom} - ${this.time}`;
  }

  public getTime(): Date {
    return this.time;
  }

  public getClassRoom(): string {
    return this.classRoom;
  }
}

class Teacher {
  name: string;
  subject: string;
  private observers: Student[];
  private lectures: Lecture[];

  constructor(name: string, subject: string) {
    this.name = name;
    this.subject = subject;
    this.observers = [];
    this.lectures = [];
  }

  public addLecture(lecture: Lecture): void {
    this.lectures.push(lecture);
    this.notify(lecture);
  }

  public attach(observer: Student): void {
    this.observers.push(observer);
  }

  public detach(observer: Student): void {
    this.observers = this.observers.filter((student) => student !== observer);
  }

  public notify(lecture: Lecture): void {
    this.observers.forEach((observer) => observer.update(lecture));
  }
}

class Student {
  private name: string;
  private lectures: Lecture[];

  constructor(name: string) {
    this.name = name;
    this.lectures = [];
  }

  public update(lecture: Lecture): void {
    console.log(
      `Hi ${this.name}, you have a new lecture: ${lecture.toString()}`,
    );
    this.lectures.push(lecture);
  }

  public getLectures(): Lecture[] {
    return this.lectures;
  }
}

const teacher = new Teacher("John", "Math");
const teacher2 = new Teacher("Veena", "Physics");

const student1 = new Student("Bob");
const student2 = new Student("Alice");

teacher.attach(student1);
teacher.attach(student2);

teacher2.attach(student1);

teacher2.addLecture(
  new Lecture(
    teacher2.subject,
    teacher2.name,
    "Hall 1",
    new Date("2024-02-01"),
  ),
);

teacher.addLecture(
  new Lecture(
    teacher.subject,
    teacher.name,
    "Hall 2",
    new Date("2024-02-01"),
  ),
);

console.log(student1.getLectures().length);
console.log(student2.getLectures().length);
