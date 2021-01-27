function addItem() {
    // take the input element
    const input = document.getElementById('newItemText');

    // take the text from the input and create an <li> element
    const newElement = document.createElement('li');
    newElement.textContent = input.value;
    
    // clear the input value
    input.value = '';

    // append the new element to the <ul>
    document.getElementById('items').appendChild(newElement);
}