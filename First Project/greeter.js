var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
function greeter(student) {
    return "Hello, " + student.fullName;
}
//let user = {firstName: "Jane", lastName: "Doe"};
var user = new Student("Jane", "", "Doe");
document.body.textContent = greeter(user);
