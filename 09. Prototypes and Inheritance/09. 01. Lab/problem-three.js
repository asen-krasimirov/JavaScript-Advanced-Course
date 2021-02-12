

function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            // "Person (name: {name}, email: {email})"
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        
        // "Teacher (name: {name}, email:{email}, subject:{subject})"
        toString() {
            let result = super.toString();
            return `${result.slice(0, result.length-1)}, subject: ${this.subject})`;
        }
    }
    
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        
        // "Student (name: {name}, email: {email}, course: {course})"
        toString() {
            let result = super.toString();
            return `${result.slice(0, result.length-1)}, course: ${this.course}`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}


const classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

function testOne() {
    let p1 = new Person("Pesho",'Pesho@pesh.com');
    let p2 = new Teacher("Pesho",'Pesho@pesh.com', 'Tesing subject');
    let p3 = new Student("Pesho",'Pesho@pesh.com', 'Tesing course');
    console.log(p1.toString());
    console.log(p2.toString());
    console.log(p3.toString());
}


testOne();
