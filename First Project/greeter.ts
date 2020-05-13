class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string,
    lastName: string;
}


// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }


//Test commit

function greeter(student: Student) {
    return "Hello, " + student.fullName;
}

//let user = {firstName: "Jane", lastName: "Doe"};
let user = new Student("Jane", "", "Doe");

document.body.textContent = greeter(user);