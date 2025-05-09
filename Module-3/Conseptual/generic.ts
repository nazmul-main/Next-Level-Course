{

    type ArrayType<P> = Array<P>;
    const numberArray: ArrayType<number> = [1, 2, 3, 4, 5]; //Array
    const stringArray: ArrayType<string> = ['a', 'b', 'c', 'd', 'e']; //Array
    const booleanArray: ArrayType<boolean> = [true, false, true, false, true]; //Array

    // interface with  generic
    interface IPerson<T, U> {
        id: T,
        name: string,
        age: U,
        isMarried: boolean,
        designation: string,
        company: string,
        salary?: number,//nullable
    }

    const person: IPerson<string, number> = {
        id: 'abc123',
        name: "Karim",
        age: 32,
        isMarried: true,
        designation: "Software Engineer",
        company: "Google",
    }   
    console.log(person);

    // Funtion with generic
    const showMsg =<msgType>( massege: msgType) => {
        return massege;
    }
    console.log(showMsg<string>('Hello World'));

    const showMsg2 = <msgType2, msgType3> (massege1: msgType2, massege2: msgType3) => {
        return{ massege1 , massege2};
    }
    console.log(showMsg2<string, number>('Hello World', 123));
 



}

