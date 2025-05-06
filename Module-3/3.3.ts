{
    // Type Guard - Fixed typo in comment
    // Correct way to declare a type alias using 'type' keyword
    type Alphanumeric = string | number;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }

    // Example usage with type annotations for clarity
    const result1 = add("1", "2"); 
    const result2 = add(10, 2);    
    console.log(result1, result2);

    // in gurad

    type NormalUserType = {
        name: string;
    }

    type AdminUserType = {
        name: string;
        role: "admin";
    }

    const getUser = (user: NormalUserType | AdminUserType) => {
        user.
    }

    
}