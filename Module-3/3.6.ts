{
    class BankAccount {
        readonly id: number;
        public name: string;
        protected _balance: number;

        // Constructor initializes the object when created with 'new'
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // Public method to add money to the account
        // Even though _balance is protected, it can be modified through public methods
        //Use setter
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

       /*  addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        
        getBalance() {
            return this._balance;
        } */
       //Use getter 
       get balance() {
           return this._balance;
       }
    }

    // Creating an instance of BankAccount
    const goribAcount = new BankAccount(111, "Mr. gorib", 50);

    // This line is commented out because _balance is protected and cannot be accessed directly
    // goribAcount.balance = 222;

    // Instead, we use the public method to modify the balance
    /* goribAcount.addDeposit(50); */

    // We use the getter method to access the current balance
    const myBalance = goribAcount.balance;
    
    // Set a new deposit amount
    goribAcount.deposit = 100; // Using the setter to add 100 to balance
    
    // Get the updated balance after deposit
    const newBalance = goribAcount.balance; // Using the getter to retrieve current balance
    console.log(newBalance); // Will show 150 (initial 50 + deposit 100)
}