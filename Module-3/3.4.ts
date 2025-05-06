{

    // inostanceof guard
    class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBark() {
            console.log("I am barking");
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMew() {
            console.log("I am Mewing");
        }
    }

    //smaet way to handle this then you can use bwlow the code
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

   const getAnimal = (animal : Animal) => {
    if(isDog(animal)){
        animal.makeBark();
    }
    else if(isCat(animal)){
        animal.makeMew();
    }
    else{
        animal.makeSound();
    }
   }

    const dog = new Dog("German Shepard", "dog");
    const cat = new Cat("Persian", "cat");

    getAnimal(dog);


}