{
    //type
 /*    type Person = {
        name: string,
        age: number,
        isMarried: boolean,
        designation: string,
        company: string,
        salary?: number,//nullable
    } */
    
    //interface
    interface IPerson {
        name: string,
        age: number,
        isMarried: boolean,
        designation: string,
        company: string,
        salary?: number,//nullable
    }

    // interface can be extended using extends keyword
    interface IPerson { 
        address: string,
    }

    const person: IPerson = {
        name: "Karim",
        age: 32,
        isMarried: true,
        designation: "Software Engineer",
        company: "Google",
        address: "Dhaka",
    }
    console.log(person);



}