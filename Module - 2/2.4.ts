{
    // Define a generic interface for a Developer
    interface Developer<T, Y = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartPhone: T;
        bike?: Y; // Optional generic type for bike (can be any type)
    }

    // Interface for a Samsung smartphone user
    interface SamsungUser {
        brand: string;
        model: string;
        display: string;
    }

    // Interface for an Apple smartphone user
    interface AppleUser {
        brand: string;
        model: string;
        typeC: boolean;
        charger: boolean;
        wifi6: boolean;
    }

    // Interface for a bike user
    interface BikeUser {
        brand: string;
        model: string;
        miles: number;
        cc: number;
    }

    // Example of a "poor" developer with a Samsung smartphone and no bike
    const poorDeveloper: Developer<SamsungUser> = {
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
    const richDeveloper: Developer<AppleUser, BikeUser> = {
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