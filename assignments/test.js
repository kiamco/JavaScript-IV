// CODE here for your Lambda Classes
// class Person ---------------------------------------------------------------------
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }

    speak() {
        return `Hellomy name is ${this.name}, I am from ${this.location}`;
    }
}

// Class Person test 
const person = new Person({
    name: "kim",
    age: 12,
    location: "fremont"
});
console.log(person)


// class instructor -------------------------------------------------------------------
class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}`
    }
}

// class Instrucotr test
const instructor = new Instructor({
    name: "bob",
    age: 20,
    location: "hayward",
    specialty: "react",
    favLanguage: "js",
    catchPhrase: "code is life"
});
console.log(instructor)

//class student ----------------------------------------------------------------
class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }

    listSubjects() {
        this.favSubjects.forEach((el) => {
            return console.log(`these are ${this.name}'s favorit subject ${el}`)
        });
    }

    PRAAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

// class student test
const student = new Student({
    name: "ana",
    age: 18,
    location: "San Mateo",
    previousBackground: "CS",
    className: "webpt7",
    favSubjects: ["js", "react, data structures and algorithms"]
});

console.log(student)

// class PM --------------------------------------------------------------------

class ProjectManager extends Person {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel} @channel standy times!`
    }

    debugCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

// class pm test
const pm = new ProjectManager({
    name: "jack",
    age: 20,
    location: "Mountain View",
    gradClassName: "webpt1",
    favInstructor: "Dan"
});

console.log(pm)


// function test for instructor test
console.log(instructor.grade(student, "react"));
console.log(instructor.calculateGrade(student));


// function test for student
student.listSubjects()
console.log(student.sprintChallenge());

// function test for pm
console.log(pm.standUp("some channel"));
console.log(pm.debugCode(student, "react"));