function addItem() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');

    const setOptionProperties = (elem, text, value) => {
        elem.textContent = text;
        elem.value = value;
    };

    const clearValues = (elem) => elem.value = '';
    
    // create option and set it's properties
    const optionElem = document.createElement('option');
    setOptionProperties(optionElem, textInput.value, valueInput.value);

    // clear element values
    Array.from([textInput, valueInput]).forEach(elem => clearValues(elem));

    // append the option to the menue
    document.getElementById('menu').appendChild(optionElem);
}