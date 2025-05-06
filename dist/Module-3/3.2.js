"use strict";
{
    //oop = Inheritence
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numbersOfHours) {
            console.log(`${this.name} will sleep for ${numbersOfHours} hours`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numbersOfClass) {
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
