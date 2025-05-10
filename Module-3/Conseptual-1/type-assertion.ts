{
    const massege: unknown= 'I am the boss of the company';
    const msgLength = (massege as string).length; // 'as' keyword use for type assertion
    console.log(msgLength);
}