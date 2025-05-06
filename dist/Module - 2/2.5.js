"use strict";
{
    // Function with generics
    const createArray = (params) => {
        return [params];
    };
    const createArrayWithGeneric = (params) => {
        return [params];
    };
    const res1 = createArray('asdfafsd');
    const resWithGeneric = createArrayWithGeneric(3453);
    const resWithObjectT = createArrayWithGeneric({ id: 123, name: 'jhon' });
    const createArrayWithTuple = (params, Params) => {
        return [params, Params];
    };
    const res10 = createArrayWithTuple('BanglaDesh', 123);
    const res11 = createArrayWithTuple('BanglaDesh', { name: 'jhon' });
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development Course';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'jhon', id: 123, email: 'jhon@gmail.com', devType: 'CourseL1' });
    const student2 = addCourseToStudent({ name: 'adil', id: 124, email: 'adil@gmail.com', devType: 'CourseL2', hasWatch: 'apple' });
}
