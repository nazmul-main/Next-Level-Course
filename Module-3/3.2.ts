{
    //oop = Inheritence
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numbersOfHours: number) {
            console.log(`${this.name} will sleep for ${numbersOfHours} hours`);
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }

        takeClass(numbersOfClass: number) {
            console.log(`${this.name} will take ${numbersOfClass} classes`);
        }
    }

    const student1 = new Student("Munna", 20, "Dhaka");
    const student2 = new Student("Rahidh", 20, "Bogura");

    const teacher1 = new Teacher("Mamun", 30, "Dhaka", "Math Teacher");
    const teacher2 = new Teacher("Rahim", 30, "Bogura", "English Teacher");

    student1.getSleep(8);
    teacher1.takeClass(5);
}