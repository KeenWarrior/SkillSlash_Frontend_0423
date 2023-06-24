// SOLID Principles

// Single Responsibility Principle
// -> A class should have only one reason


// Open Closed Principle
// -> Class should be open for extension, but closed for modification
// -> Tempted to extend Square from Rectangle.

// Liskov Substitution Principle
// -> Subtypes must be substitutable for their base types

// Interface Segregation Principle

// Dependency Inversion Principle


class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    setWidth(width: number): void {
        this.width = width;
        this.height = width;
    }

    setHeight(height: number): void {
        this.width = height;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.width;
    }
}

