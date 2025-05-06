{
    // Function with generics
    const createArray = (params: string): string[] => {
        return [params]
    }
    const createArrayWithGeneric = <T>(params: T): T[] => {
        return [params]
    }
    const res1 = createArray('asdfafsd')
    const resWithGeneric = createArrayWithGeneric<number>(3453)
    interface User {
        id: number;
        name: string;
    }
    const resWithObjectT = createArrayWithGeneric<User>({ id: 123, name: 'jhon' })

    const createArrayWithTuple = <T, Y>(params: T, Params: Y): [T, Y] => {
        return [params, Params]
    }

    const res10 = createArrayWithTuple<string, number>('BanglaDesh', 123)
    const res11 = createArrayWithTuple<string, { name: string }>('BanglaDesh', { name: 'jhon' })


    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development Course'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: 'jhon', id: 123, email: 'jhon@gmail.com', devType: 'CourseL1' })
    const student2 = addCourseToStudent({ name: 'adil', id: 124, email: 'adil@gmail.com', devType: 'CourseL2', hasWatch: 'apple' })

}


