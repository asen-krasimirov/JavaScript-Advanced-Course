

function figureHierarchy() {

    // function Figure() {
    //     this.units = 
    // }

    class Figure {
        constructor() {
            this.units = 'cm';
            this.multiplier = {
                'm' : 0.1,
                'cm' : 1,
                'mm' : 10,
            };
        }

        get area() { }

        changeUnits(unit) {
            this.units = unit;
        }

        toString() {
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
            this.originalRadius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
            // "Figures units: {type} Area: {area} - radius: {radius}"
        }

        changeUnits(unit) {
            this.radius = this.originalRadius;
            super.changeUnits(unit);
            this.radius *= this.multiplier[this.units];
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super();
            this.units = units;
            this.width = width * this.multiplier[units];
            this.height = height * this.multiplier[units];

            this.originalWidth = width;
            this.originalHeight = height;
        }

        get area() {
            return this.width * this.height;
        }

        changeUnits(unit) {
            this.width = this.originalWidth;
            this.height = this.originalHeight;
            super.changeUnits(unit);
            this.width  *= this.multiplier[this.units];
            this.height *= this.multiplier[this.units];
            
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
            // "Figures units: {type} Area: {area} - width: {width}, height: {height}" 
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}


let classes = figureHierarchy();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

function testOne() {
    let c = new Circle(5);
    console.log(c.area); // 78.53981633974483
    console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    let r = new Rectangle(3, 4, 'mm');
    console.log(r.area); // 1200 
    console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    r.changeUnits('cm');
    console.log(r.area); // 12
    console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    c.changeUnits('mm');
    console.log(c.area); // 7853.981633974483
    console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

}

testOne();