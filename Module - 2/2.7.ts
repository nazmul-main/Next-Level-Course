{
    //  genetic conotrain with keyof
    type Vehicle = {
        bike: string,
        car: string,
        ship: string
    }
    
    type Owner = "bike" | "car" | "ship" //manually

    type Owner2 = keyof Vehicle

    const getpropertyValue  = <X, Y extends keyof X > (obj: X , key: Y) => {
        return obj[key]
    } 

    const user = {
        name: "nazmul",
        age: 18,
        address: 'bogura'
    }
    const car = {
        model: 'Toyota 100',
        year: 2000,
    }
    const result1 = getpropertyValue(user, 'name')
}