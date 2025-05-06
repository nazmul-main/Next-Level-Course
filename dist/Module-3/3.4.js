"use strict";
{
    // inostanceof guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("I am barking");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMew() {
            console.log("I am Mewing");
        }
    }
    const dog = new Dog("German Shepard", "dog");
    const cat = new Cat("Persian", "cat");
    cat.
    ;
}
