{
    //Conostain 
    const addCourseToStudent = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course = 'Next Level Web Development Course'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: 'jhon', id: 123, email: 'jhon@gmail.com', devType: 'CourseL1' })
    const student2 = addCourseToStudent({ name: 'adil', id: 124, email: 'adil@gmail.com', devType: 'CourseL2', hasWatch: 'apple' })
    const student3 = addCourseToStudent({ name: 'siddik', id: 124, email: 'siddik@gmail.com', emni: 'emani' });

}