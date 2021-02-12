const HolidayPackage = require('./code');


let holidayPackage = new HolidayPackage('Italy', 'Summer');

console.log(holidayPackage.showVacationers());

// should throw an error
try {
    holidayPackage.generateHolidayPackage();
} catch (err) {
    console.log('Error: ' + err.message);
}

// should throw an error
try {
    holidayPackage.addVacationer('');
} catch (err) {
    console.log('Error: ' + err.message);
}

// should throw an error
try {
    holidayPackage.addVacationer('Ivan');
} catch (err) {
    console.log('Error: ' + err.message);
}

holidayPackage.addVacationer('Ivan Ivanov');
holidayPackage.addVacationer('Petar Petrov');
holidayPackage.addVacationer('Georgi Georgiev');

console.log(holidayPackage.showVacationers());

// should throw an error
try {
    holidayPackage.insuranceIncluded = 'true';
} catch (err) {
    console.log('Error: ' + err.message);
}

holidayPackage.insuranceIncluded = true;

console.log(holidayPackage.generateHolidayPackage());
