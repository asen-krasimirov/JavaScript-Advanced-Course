class Textbox {
    constructor(selector, regex) {
        this._value = document.querySelector(selector);
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;

        Textbox.applyEvents(this._value, this._elements);
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        // let test = !this._invalidSymbols.match(this.value);
        let test = !this.value.value.match(this._invalidSymbols) ? true : false;
        return test;
        // return this._invalidSymbols.test(this.value);
    }

    static applyEvents(singleValue, allValues) {
        const newAllValues = Array.from(allValues);
        newAllValues.push(singleValue);

        for (const value of newAllValues) {
            value.addEventListener('change', changeValues);
        }

        function changeValues(event) {
            const curValue = event.target.value;
            newAllValues.forEach(elem => elem.value = curValue);
        }
    }


}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
// let inputs = $('.textbox');

// inputs.on('input', function () { console.log(textbox.value); });
