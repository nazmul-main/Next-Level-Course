"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    const getToDo = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/posts');
        const data = yield res.json();
        console.log(data); // Log the data to the console
        return data; // Return the data to fulfill the promise
    });
    getToDo();
    //Samulate
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = { something: 'fasadfggsfd' };
            if (data) {
                resolve(data);
            }
            else {
                reject('data not found');
            }
        });
    };
    //calling create promise function 
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        return data;
    });
    showData();
}
