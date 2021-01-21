

function createSortedList() {
    return {
        list: [],
        size: 0,
        add(elem) {
            this.list.push(elem);
            let item = this.list[this.list.length-1];
            this.list.sort((a, b) => a-b);
            this.size = this.list.length;
            return item;
        },
        remove(index) {
            if (!this.validateIndex(index)) { return; }
            let item = this.list[index];
            this.list.splice(index, 1);
            this.size = this.list.length;
            return item;
        },
        get(index) {
            if (!this.validateIndex(index)) { return; }
            return this.list[index];
        },
        validateIndex(index) {
            return -1 < index && index < this.size;
        }
    };
}

// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));

function unitTestOne() {
    var myList = createSortedList();
    console.log(myList.hasOwnProperty('size')) // .equal(true, "Property size was not found");

    // Generate random list of 20 numbers
    var expectedArray = [];
    for (let i = 0; i < 20; i++) {
        expectedArray.push(Math.floor(Math.random() * 200) - 100);
    }
    // Add to collection
    for (let i = 0; i < expectedArray.length; i++) {
        myList.add(expectedArray[i]);
    }
    console.log(myList.size) // .to.equal(20, "Elements weren't added");
    // Sort array
    expectedArray.sort((a, b) => a - b);
    // Compare with collection
    for (let i = 0; i < expectedArray.length; i++) {
        console.log(myList.get(i) == expectedArray[i]) // .to.equal(expectedArray[i], "Array wasn't sorted");
    }
}
function unitTestTwo() {
    var myList = createSortedList();
    var failsafe = 'failsafe';

    try {
        failsafe = myList.get(0) ? myList.get(0) : 'failsafe';
    } catch (e) {}

    console.log(myList.size === 0) // .to.equal(0, "Unexpected behaviour with empty collection.");
    console.log(failsafe === 'failsafe') // .to.equal('failsafe', "Unexpected behaviour with empty collection.");

    try {
        myList.remove(0);
    } catch (e) {}

    console.log(myList.size === 0) // .to.equal(0, "Unexpected behaviour with empty collection.");
}
function unitTestThree() {
    var myList = createSortedList();
    var failsafe = 'failsafe';

    for (let i = 0; i < 10; i++) {
        myList.add(i);
    }

    try {
        failsafe = myList.get(-1) ? myList.get(-1) : 'failsafe';
    } catch (e) {}
    console.log(myList.size === 10) // .to.equal(10, "Unexpected behaviour with negative index.");
    console.log(failsafe === 'failsafe') // .to.equal('failsafe', "Unexpected behaviour with negative index.");

    try {
        failsafe = myList.get(11) ? myList.get(11) : 'failsafe';
    } catch (e) {}
    console.log(myList.size === 10) // .to.equal(10, "Unexpected behaviour with negative index.");
    console.log(failsafe === 'failsafe') //.to.equal('failsafe', "Unexpected behaviour with negative index.");

    var expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    try {
        myList.remove(-1);
    } catch (e) {}

    console.log(myList.size === 10) // .to.equal(10, "Unexpected behaviour with negative index.");
    for (let i = 0; i < expectedArray.length; i++) {
        console.log(myList.get(i) === expectedArray[i]) //.to.equal(expectedArray[i], "Unexpected behaviour with negative index.");
    }

    try {
        myList.remove(11);
    } catch (e) {}

    console.log(myList.size === 10) // .to.equal(10, "Unexpected behaviour with negative index.");
    for (let i = 0; i < expectedArray.length; i++) {
        console.log(myList.get(i) === expectedArray[i]) // .to.equal(expectedArray[i], "Unexpected behaviour with negative index.");
    }
}

// unitTests();
// unitTestTwo();
unitTestThree();