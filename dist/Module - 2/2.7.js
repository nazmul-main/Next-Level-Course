"use strict";
{
    const getpropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "nazmul",
        age: 18,
        address: 'bogura'
    };
    const car = {
        model: 'Toyota 100',
        year: 2000,
    };
    const result1 = getpropertyValue(user, 'name');
}
