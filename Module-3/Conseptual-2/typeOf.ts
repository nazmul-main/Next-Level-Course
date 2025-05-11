{
    // Movie name string variable
    const movieName = 'Deadpool';

    // Get type of movieName using typeof operator
    const movieNameType = typeof movieName; // Will be 'string'

    // Movie object with title and director
    const movie = {
        title: 'Rock On',
        Director: 'John Wick',
    }

    // Create type from movie object structure using typeof
    type newMovieDetails = typeof movie;

    // New movie object using the inferred type
    const newMovie: newMovieDetails = {
        title: 'Money Heist',
        Director: 'John Wick',
    }

    // Custom type for logging details
    type detailsLog = {
        message: string,
        Level: 'infor' | 'Warning' | 'Error' // Union type for log levels
    }

    // Function to handle different types of log messages
    function logMessage(input: string | number | detailsLog) {
        if (typeof input === 'string') {
            console.log('Simple message info:', input);
        }
        else if (typeof input === 'number') {
            console.log('Error Code:', input);
        }
        else if ('message' in input && 'Level' in input) {
            console.log(`Danger level: ${input.Level} ---- Instruction for Next Level Dev: ${input.message}`);
        }
    }

    // Test the logMessage function with a detailsLog object
    // Note: Level should have a valid value from the union type
    const text = logMessage({message: 'Please proceed quickly', Level: 'Warning'});
    console.log(text);
}