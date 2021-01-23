function solve() {

   function formatEmployees(employees) {
      const allEmployeesData = {};

      for (let employeeData of employees.split(', ')) {
         let [employeeName, salary] = employeeData.split(' ');
         allEmployeesData[employeeName] = Number(salary);
      }

      return allEmployeesData;
   }

   function getAverageSalary(employees) {

      let totalSum = 0;
      let employeeCount = 0;
      for (let employee in employees) {
         totalSum += employees[employee];
         employeeCount++;
      }
      return (totalSum / employeeCount);
   }

   function getBestSalary(employees) {
      let bestSalary = -100000000000;
      for (let employee in employees) {
         if (employees[employee] > bestSalary) { bestSalary = employees[employee]; }
      }
      return bestSalary;
   }
   function setSalaries(restaurant) {
      restaurant.averageSalary = Number(getAverageSalary(restaurant.employees)).toFixed(2);
      restaurant.bestSalary = Number(getBestSalary(restaurant.employees)).toFixed(2);
      return restaurant;
   }

   function getTheBestRestaurantName(allRestaurants) {
      let bestRestaurant = {'averageSalary': -100000000000};
      let bestRestaurantName = '';

      for (let restaurantName in allRestaurants) {
         let curSalary = Number(allRestaurants[restaurantName].averageSalary);
         if (curSalary > Number(bestRestaurant.averageSalary)) {
            bestRestaurant.averageSalary = curSalary;
            bestRestaurantName = restaurantName;
         }
      }
      return bestRestaurantName;
   }

   function sortEmployees(employees) {
      const orderedEmployees = {};

      const sorted = [];
      for (let employee in employees) {
         sorted.push([employee, employees[employee]]);
      }

      sorted.sort((a, b) => b[1]- a[1]);

      for (let elem of sorted) {
         orderedEmployees[elem[0]] = elem[1];
      }
      return orderedEmployees;
   }

   function displayTheBestRestourant(theBestRestauranName, theBestRestauran) {
      const bestRestaurantText = `Name: ${theBestRestauranName} Average Salary: ${theBestRestauran.averageSalary} Best Salary: ${theBestRestauran.bestSalary}`;
      const bestRestaurantEmployeeText = [];
      for (let employee in theBestRestauran.employees) {
         bestRestaurantEmployeeText.push(
            `Name: ${employee} With Salary: ${theBestRestauran.employees[employee]}`
         )
      }

      document.querySelector('#bestRestaurant p').textContent = bestRestaurantText;
      document.querySelector('#workers p').textContent = bestRestaurantEmployeeText.join(' ');
   }

   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {

      // Add
      const allRestaurants = {};
      let input = JSON.parse(document.querySelector('#inputs textarea').value);

      for (let restaurantData of input) {
         let [name, employees] = restaurantData.split(' - ');
         employees = formatEmployees(employees);
         let isRestaurantRegistered = Object.keys(allRestaurants).includes(name);

         if (!isRestaurantRegistered) {

            allRestaurants[name] = {
               'employees' : employees,
               'averageSalary' : null,
               'highestSalary' : null,
            };

         } else {
            for (let employeeName in employees) {
               let isEmployeeRegistered = Object.keys(allRestaurants[name].employees).includes(employeeName);

               if (!isEmployeeRegistered) {
                  allRestaurants[name]['employees'][employeeName] = employees[employeeName];
               }
            }
         }

      }

      // Set Average/Biggest Salary
      for (let restaurantName in allRestaurants) {
         setSalaries(allRestaurants[restaurantName]);
      }
      
      // Get the best restaurant (has the best average salary) and Sort the employees
      let theBestRestauranName = getTheBestRestaurantName(allRestaurants);
      const theBestRestauran = allRestaurants[theBestRestauranName];
      theBestRestauran.employees = sortEmployees(theBestRestauran.employees);

      // Print the Best
      displayTheBestRestourant(theBestRestauranName, theBestRestauran);

      }

}