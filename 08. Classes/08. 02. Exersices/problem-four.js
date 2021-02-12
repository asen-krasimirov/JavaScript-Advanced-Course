

class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    // add(elemenent) - adds a new element to the collection
    add(elem) {
        this.collection.push(elem);
        this.innerSort();
        this.updateSize(true);
    }

    // remove(index) - removes the element at position index
    remove(index) {
        if (!this.validateIndex(index)) { throw new Error('Index ouside of collection bound!') }
        this.collection.splice(index, 1);
        this.innerSort();
        this.updateSize(false);
    }

    // get(index) - returns the value of the element at position index
    get(index) {
        if (!this.validateIndex(index)) { throw new Error('Index ouside of collection bound!') }
        return this.collection[index];
    }

    updateSize(positive_negative) {
        positive_negative ? this.size++ : this.size--
    }

    // size - number of elements stored in the collection
    // get size() {
    //     return this.collection.length;
    // }

    // make a sorting method
    innerSort() {
        this.collection.sort((a, b) => a-b);
    }

    validateIndex(index) {
        return -1 < index && index <= this.size && this.size > 0; 
    }

}


let list = new List();
list.add(7);
list.add(5);
list.add(6);
console.log(list.get(1)); 
list.remove(0);
console.log(list.get(1));

// overloading 
console.log(list.size);
// list.remove(10);
// list.get(-1);
