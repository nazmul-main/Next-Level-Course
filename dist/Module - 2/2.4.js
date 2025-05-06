"use strict";
{
    // Example of a "poor" developer with a Samsung smartphone and no bike
    const poorDeveloper = {
        name: 'Jhon',
        computer: {
            brand: 'Microsoft',
            model: 'Inter Cor-i5',
            releaseYear: 2022,
        },
        smartPhone: {
            brand: 'Samsung',
            model: 'A20S',
            display: 'IPS',
        },
    };
    // Example of a "rich" developer with an Apple smartphone and a bike
    const richDeveloper = {
        name: 'Rock',
        computer: {
            brand: 'HP',
            model: 'G8',
            releaseYear: 2023,
        },
        smartPhone: {
            brand: 'Apple',
            model: '14',
            typeC: true,
            charger: false,
            wifi6: true,
        },
        bike: {
            brand: 'Yamaha',
            model: 'FZ-X',
            miles: 45,
            cc: 180,
        },
    };
    // Log the developers to the console
    console.log('Poor Developer:', poorDeveloper);
    console.log('Rich Developer:', richDeveloper);
}
