{
    // ===== ACCESS MODIFIERS IN TYPESCRIPT =====
    // Access modifiers control the visibility and accessibility of class members (properties and methods)
    // TypeScript provides three access modifiers: public, private, and protected

    class BankAccount {
        // readonly: Property can only be assigned during initialization or in the constructor
        // Once set, it cannot be changed anywhere in the code
        readonly id: number;

        // public: Default modifier if none is specified
        // Can be accessed from anywhere (inside the class, child classes, and outside the class)
        public name: string;

        // protected: Can only be accessed within the class and its subclasses (child classes)
        // Not accessible from outside the class hierarchy
        protected _balance: number;

        // Constructor initializes the object when created with 'new'
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // Public method to add money to the account
        // Even though _balance is protected, it can be modified through public methods
        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // Public method that provides controlled access to the protected _balance property
        // This is an example of encapsulation - hiding internal state and providing controlled access
        getBalance(){
            return this._balance;
        }
    }

    // Inheritance example: studentAccount extends the base BankAccount class
    class studentAccount extends BankAccount{ 
        // This method can access the protected _balance property
        // because protected members are accessible in derived classes
        test(){
            this._balance = 0;
        }
    }

    // Creating an instance of BankAccount
    const goribAcount = new BankAccount(111, "Mr. gorib", 50);
    
    // This line is commented out because _balance is protected and cannot be accessed directly
    // goribAcount.balance = 222;
    
    // Instead, we use the public method to modify the balance
    goribAcount.addDeposit(50);
    
    // We use the getter method to access the current balance
    const NewBalance = goribAcount.getBalance();
    console.log(NewBalance); // Output: 100 (50 initial + 50 deposit)
}