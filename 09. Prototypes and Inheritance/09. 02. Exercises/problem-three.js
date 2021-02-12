


// // Extensible object
// const myObj = {
//     // __proto__: {}
//     extend: function () {
//         // …
//     }
// }

// Template object
// const template = {
//     extensionMethod: function () {
//         //  … 
//     },
//     extensionProperty: 'someString',
//     printTenZeroes() {
//         console.log('0'.repeat(10));
//     }
// }

// result
const myObj = {
    __proto__: {
        extensionMethod: function () {
            //   …
        }
    },

    /*
    extend: function () {
        // …
    },
    */

    extensionProperty: 'someString'
}


function solve() {
    const proto = {};
    const myObj = Object.create(proto);

    // __proto__: {}
    myObj.extend = function (template) {
        for (const property of Object.keys(template)) {
            if (typeof template[property] != 'function') {
                myObj[property] = template[property];
                // this[property] = template[property];
                continue;
            }
            // Object.getPrototypeOf(this)[property] = template[property];
            // Object.defineProperty(Object.getPrototypeOf(this), property, { value: template[property], enumerable: true});
            proto[property] = template[property];
        }
    }
    return myObj;
}


var template = {
    name: 'test',
    setName: function (newValue) {
        console.log(this)
        console.log(newValue)
        console.log(this.name)
        this.name = newValue;
    },
    getName: function () {
        return this.name;
    }
};


const extensibleObj = solve();


extensibleObj.extend(template);
// console.log(extensibleObj);
// console.log(extensibleObj.__proto__);

extensibleObj.setName('Ani');

console.log(extensibleObj.getName());