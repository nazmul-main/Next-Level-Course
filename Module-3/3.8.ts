{
    // Example 1: Polymorphism with sleep patterns
    // Demonstrates how different classes can implement the same method differently
    class personal {
        getSleep() {
            console.log('I am slpeeping 8 hours per day');
        }
    }

    class student extends personal {
        getSleep() {
            console.log('I am slpeeping 7 hours per day');
        }
    }

    class developer extends personal {
        getSleep() {
            console.log('I am slpeeping 6 hours per day');
        }
    }

    // Function that works with any class that extends personal
    const getSleepingHours = (param: personal) => {
        param.getSleep();
    }

    // Testing different sleep patterns
    const person = new personal();
    const person2 = new student();
    const person3 = new developer();

    getSleepingHours(person);
    getSleepingHours(person2);
    getSleepingHours(person3);

    // Example 2: Polymorphism with geometric shapes
    // Demonstrates area calculation for different shapes
    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Shape {
        height: number;
        width: number;
        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width;
        }
    }

    // Generic function to calculate area of any shape
    const calculateArea = (param: Shape) => {
        console.log(param.getArea());
    }

    // Testing area calculations
    const shape = new Shape();
    const circle1 = new Circle(10);
    const rectangle1 = new Rectangle(10, 20);

    calculateArea(shape);
    calculateArea(circle1);
    calculateArea(rectangle1);
}