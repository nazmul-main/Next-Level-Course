{

    // Define a simple book type
    type Book = {
        title: string;
        author: string;
        yearPublished: number;
    };

    // use keyof to get the keys of the Book type
  type bookKeys = keyof Book;


    //book[title] = "typeScript" 
    function gerBookProperty <T, K extends keyof T>(book: T,key: K,) :T[K] {
        return book[key];
    }
    const myBook: Book = {
        title: "TypeScript for Beginners",
        author: "John Smith",
        yearPublished: 2025,
    };

    const author =gerBookProperty(myBook, "author");
    console.log(author);

}