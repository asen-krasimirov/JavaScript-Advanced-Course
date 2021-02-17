

class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    get ramainingSlots() {
        return this.capacity - this.vehicles.length;
    }

    getCarByNumber(number) {
        let result;
        this.vehicles.forEach(car => {
            if (car.carNumber == number) {
                result = car;
            }
        })
        return result;
    }

    arrayRemove(value) {
        this.vehicles.filter(function (ele) {
            return ele != value;
        });
    }

    addCar(carModel, carNumber) {
        if (!this.ramainingSlots) {
            throw new Error("Not enough parking space.");
        }

        const car = {
            carModel,
            carNumber,
            payed: false,
        }

        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        const car = this.getCarByNumber(carNumber);
        if (!car) {
            throw new Error(`The car, you're looking for, is not found.`);
        }

        if (!car.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.arrayRemove(car);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        const car = this.getCarByNumber(carNumber);
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {

        let result;

        // if a parameter is provided
        if (carNumber) {

            const car = this.getCarByNumber(carNumber);
            result = `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;

        } else {
            
            result = `The Parking Lot has ${this.ramainingSlots} empty spots left.\n`;
            const sortedCars = this.vehicles
            .sort((carOne, carTwo) => carOne.carModel.localeCompare(carTwo.carModel))
            .map(car => `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`);
            result += sortedCars.join('\n');

        }

        return result;
    }
}

module.exports = Parking;