{
    type Todo = {
        userId: number;
        id: number;
        title: string;
        body: string;
    };
    
    const getToDo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data); // Log the data to the console
        return data; // Return the data to fulfill the promise
    };
    
    getToDo();

    type Someting = { something: string }

    //Samulate
    const createPromise = (): Promise<Someting> => {
        return new Promise<Someting>((resolve, reject) => {
            const data: Someting = { something: 'fasadfggsfd' };
            if (data) {
                resolve(data);
            }
            else {
                reject('data not found');
            }
        })
    }

    //calling create promise function 
    const showData = async (): Promise<Someting> => {
        const data: Someting = await createPromise();
        return data;
    }
    showData();




}