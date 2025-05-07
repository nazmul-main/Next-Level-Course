// Basic data types

const age: number = 10;
const youName: string = "John";
const isMarried: boolean = false;

// Array
const number: number[] = [1, 2, 3, 4, 5]; //Array
const info: [number, number, string, boolean, string, null] = [1, 40, "John", true, 'school', null]; //tuple

//Object

type Person = {
    name: string,
    age: number,
    isMarried: boolean,
    designation: string,
    company: string,
}

const strudent: Person = {
    name: "John",
    age: 29,
    isMarried: false,
    designation: "Software Engineer",
    company: "Google",
}

// normal function & arrow function

function multly(num1:number ,num2:number): number{
    const result = num1 * num2;
    return result;
}

const multyplyResult = multly(10,20);
console.log(multyplyResult);