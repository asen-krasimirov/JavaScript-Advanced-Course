

class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {
        [username, salary, position, department].forEach(input => {
            if (['', undefined, null].includes(input)) { throw new Error('Invalid input!'); }
        })

        if (salary < 0) { throw new Error('Invalid input!'); }

        if (!Object.keys(this.departments).includes(department)) {
            this.departments[department] = {'employees': []}
        }

        this.departments[department].employees.push({username, salary, position, department});
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    sortEmployees(department) {
        const employees = this.departments[department].employees;
        employees.sort((emp1, emp2) => {
            if (emp1.salary == emp2.salary) {
                return emp1.username.localeCompare(emp2.username);
            } else {
                return emp2.salary - emp1.salary;
            }
        })
        return employees;
    }

    bestDepartment() {
        let bestDepartmentName = '';
        let bestAverageSalary = 0;

        for (const department in this.departments) {
            let totalSalary = 0;
            let totalEmployees = this.departments[department].employees.length;

            for (const employee of this.departments[department].employees) {
                totalSalary += employee.salary;
            }

            if ((totalSalary / totalEmployees) > bestAverageSalary) {
                bestDepartmentName = department;
                bestAverageSalary = totalSalary / totalEmployees;
            }
        }

        let employeesForPrint = this.sortEmployees(bestDepartmentName).map(employee => `${employee.username} ${employee.salary} ${employee.position}`);

        let result = `Best Department is: ${bestDepartmentName}\nAverage salary: ${bestAverageSalary.toFixed(2)}\n`;
        result += employeesForPrint.join('\n');
        return result;
        }
}

let c = new Company();

function testOne() {
    c.addEmployee("Stanimir", 2000, "engineer", "Construction");
    c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
    c.addEmployee("Slavi", 500, "dyer", "Construction");
    c.addEmployee("Stan", 1500, "architect", "Construction");
    c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
    c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
    c.addEmployee("Gosho", 1350, "HR", "Human resources");
    console.log(c.bestDepartment());
}

function testTwo() {
    c.addEmployee("ABD", 2000, "engineer", "Construction");
    c.addEmployee("ABC", 2000, "engineer", "Construction");
    console.log(c.bestDepartment());

}

testOne();
// testTwo();