{
    // Abstraction in OOP : 1. Interfaces 2. Abstract Classes

    /**
     * Interface example demonstrating abstraction through contract definition
     * Defines common vehicle behaviors that implementing classes must follow
     */
    interface Vehicle {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    /**
     * Concrete implementation of Vehicle interface
     * Shows how interfaces enforce behavior contracts
     */
    class car implements Vehicle {
        startEngine(): void {
            console.log('Starting the car engine');
        }
        stopEngine(): void {
            console.log('Stopping the car engine');
        }

        move(): void {
            console.log('Moving the car');
        }
        testDrive(): void {
            console.log('Testing drive');
        }
    }

    const toyota = new car();
    toyota.startEngine();


    /**
     * Abstract class example showing another form of abstraction
     * Defines template methods that derived classes must implement
     */
    abstract class car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
        abstract testDrive(): void
    }

    /**
     * Concrete implementation of abstract class
     * Must provide implementations for all abstract methods
     */
    class Toyata extends car2 {
        startEngine(): void {
            console.log(' Starting the car engine');
        }
        stopEngine(): void {
            console.log(' Stopping the car engine');
        }

        move(): void {
            console.log(' Moving the car');
        }

        testDrive(): void {
            console.log(' Testing drive');
        }
    }

    const toyota2 = new Toyata();
    toyota2.startEngine();
}