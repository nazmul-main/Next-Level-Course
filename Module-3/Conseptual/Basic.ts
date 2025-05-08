// Basic data types

const age: number = 10;
const youName: string = "John";
const isMarried: boolean = false;

// Array
const number: number[] = [1, 2, 3, 4, 5]; //Array
const info: [number, number, string, boolean, string, null] = [1, 40, "John", true, 'school', null]; //tuple

//Object

type strudentInfo = {
    name: string,
    age: number,
    isMarried: boolean,
    designation: string,
    company: string,
}

const strudent: strudentInfo = {
    name: "John",
    age: 29,
    isMarried: false,
    designation: "Software Engineer",
    company: "Google",
}

// normal function & arrow function

function multly(num1: number, num2: number): number {
    const result = num1 * num2;
    return result;
}

const multyplyResult = multly(10, 20);
// console.log(multyplyResult);


const sumofTwo = (a: number, b: number): number => {
    return a + b;
}
const sumofTwoResult = sumofTwo(10, 20);
// console.log(sumofTwoResult);



/* --------------------------------
    Oparetor and destructuring
 ---------------------------------*/

 const roll: number[] = [1,2,3,4,5,6,7,8,9,10];
 const newRoll: number[] = [...roll, 11, 12, 13, 14, 15];
 console.log(newRoll);

 type Person = {
    name: string,
    age: number,
    isMarried: boolean,
    designation: string,
    company: string,
    salary?: number,//nullable
}

const person: Person = {
    name: "Karim",
    age: 32,
    isMarried: true,
    designation: "Software Engineer",
    company: "Google",
}

const newInfoPerson1 : Person ={
    ...person,
    salary: 100000,
}
console.log(newInfoPerson1);



