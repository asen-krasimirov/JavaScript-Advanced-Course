class Test {
    constructor(test) {
        this.test = test;
    }
}


class Child extends Test {
    constructor(testone) {
        this.test = testone;
    }
}


const testInstance = new Child('tet');
console.log(testInstance.test);