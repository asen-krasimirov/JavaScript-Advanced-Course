

function returnPeople() {
    const peopleInfo = [
        ['Anna', 'Simpson', 22, 'anna@yahoo.com'],
        ['SoftUni'],
        ['Stephan', 'Johnson', 25],
        ['Gabriel', 'Peterson', 24, 'g.p@gmail.com']
    ]

    const people = [];

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    };

    for (const info of peopleInfo) {
        let [firstName, lastName, age, email] = info;
        people.push(
            new Person(firstName, lastName, age, email)
        )
    }

    return people;
}

console.log(returnPeople());