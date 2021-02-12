

function solve() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];

            this.curTask = 0;
        }

        work() {
            console.log(this.tasks[this.curTask]);
            this.curTask++;
            if (this.curTask >= this.tasks.length) { this.curTask = 0; }
        }

        collectSalary() {
            let monthSalary = this.salary;
            if ('dividend' in this) { monthSalary+=this['dividend']; }
            console.log(`${this.name} received ${monthSalary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${name} is working on a complicated task.`,
                `${name} is taking time off work.`,
                `${name} is supervising junior workers.`
            ];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [
                `${name} scheduled a meeting.`,
                `${name} is preparing a quarterly report.`
            ];
        }
        
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    };
}


const classes = solve();
function testOne() {
    const testEmployeeOne = new classes.Senior('John', 12);
    testEmployeeOne.work();
    testEmployeeOne.work();
    testEmployeeOne.work();
    testEmployeeOne.work();
}


function testTwo() {
    // const testEmployeeOne = new classes.Senior('John', 12);
    const testEmployeeOne = new classes.Manager('John', 12);
    testEmployeeOne.salary = 100;
    testEmployeeOne.dividend = 5;
    testEmployeeOne.collectSalary();
}


// testOne();
testTwo();