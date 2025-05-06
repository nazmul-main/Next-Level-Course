{
    //generic type

    /* type Roll = Array<number>;
    type Mentors = Array<string>;
    type BoolArray = Array<boolean>; 

    // const rollnumber: number[] = [1, 2, 3]; 
    const rollnumber:Roll  = [1, 2, 3];


    // const mentors: string[] = ['M. X', 'M. Y', 'M. Z']
    const mentors:Mentors= ['M. X', 'M. Y', 'M. Z']

    // const boolArray: boolean[] = [true, false, true] 
    const boolArray: BoolArray = [true, false, true] */


    //Reusable 
    type GenaraticArray<T> = Array<T>;

    const rollnumber: GenaraticArray<number> = [1, 2, 3];
    const mentors: GenaraticArray<string> = ['M. X', 'M. Y', 'M. Z']
    const boolArray: GenaraticArray<boolean> = [true, false, true]

    type User = {
        name: string,
        age: number,
    }

    interface User1 {
        name: string,
        age: number,
    }

    const user: GenaraticArray<User1> = [
        {
            name: 'Adil',
            age: 53
        },
        {
            name: 'Root',
            age: 32
        }

    ]

    const add = (x: number, y: number) => x + y;
    add(20, 30)

    //generic tuple
    type GeneticTuple<X, Y> = [X, Y];
    const manus: GeneticTuple<string, string> = ['Mr. X', 'Mr.y']
    const userWithId: GeneticTuple<number, { name: string, email: string }> = [1234, { name: 'John', email: 'john@gmail.com' }];




}