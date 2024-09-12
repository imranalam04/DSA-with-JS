// Data structure :- A data structure is a specific way of organizing , storing, and accessing data
// Algorithm :- A set of instructions that tells a computer how to do something, or you can also say step-by-step solution of the problem is called algorithm .

/* 1. create an array with 5 students names, after that create a function which  takes 2 parameters (allStudents & studnetName) 
iterate over all students and find that specific user "studentName" */


const array = ["imran", "jack", "ryan", "sam", "mike"]
function yum(allStudents, studentName) {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] === studentName) {
            return `yeah, I found ${studentName}`
        }
    }
}
console.log(yum(array, "mike")) // true     