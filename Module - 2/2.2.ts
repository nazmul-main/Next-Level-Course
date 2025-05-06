{

    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }

    type UserWithRole = User1 & { role: string; }
    interface UserWithRole2 extends User2 { gender: string }

    const user: UserWithRole2 = {
        name: 'john',
        age: 35,
        gender: 'male'
    };
    // JS --> object, array -> object function -> object
    type Roll1 = number[]
    interface Roll2 {
        [index: number]: number;
    }
    const rollnumber: Roll1 = [1, 2, 3];



    //functions
    type Add1 =(num1: number, num2: number)=> number
    interface Add2 {
        (num1: number, num2: number) : number
    }

    const add: Add2 = (num1 ,  num2) => num1 + num2;





}
