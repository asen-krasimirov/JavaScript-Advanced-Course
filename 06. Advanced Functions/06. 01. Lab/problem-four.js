

function filterEmployees(employeeData, criteria) {
  let [data, curEmployeeCriteria] = criteria.split('-');
  let employeeIndex = 0;

  function employeePredicat(employee) {
    if (curEmployeeCriteria == 'all') { return true; }
    else { return employee[data] == curEmployeeCriteria; }

  }

  function formatEmployeeData(employee) {
    return `${employeeIndex++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
  }

  const filteredEmployees = JSON.parse(employeeData).filter(employeePredicat);
  console.log(filteredEmployees.map(formatEmployeeData).join('\n'));

}


example1 = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
}]`

example2 = `[{
  "id": "1",
  "first_name": "Kaylee",
  "last_name": "Johnson",
  "email": "k0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson",
  "email": "kjost1@forbes.com",
  "gender": "Female"
}, {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}, {
  "id": "4",
  "first_name": "Evanne",
  "last_name": "Johnson",
  "email": "ev2@hostgator.com",
  "gender": "Male"
}]`

// filterEmployees(example1, 'gender-Female');
filterEmployees(example2, 'last_name-Johnson');