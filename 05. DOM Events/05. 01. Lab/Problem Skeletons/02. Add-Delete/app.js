function addItem() {
    // remove element
    
    // take the input element
    const input = document.getElementById('newText');

    // take the text from the input and create an <li> element
    const newElement = document.createElement('li');
    newElement.textContent = input.value;

    // adding deleting <a>
    const anchorElem = document.createElement('a');
    anchorElem.textContent = '[Delete]'
    anchorElem.href = '#';
    
    newElement.appendChild(anchorElem);
    
    const deleteItem = () => newElement.remove();
    anchorElem.addEventListener('click', deleteItem);
    
    
    // clear the input value
    input.value = '';
    
    // append the new element to the <ul>
    document.getElementById('items').appendChild(newElement);
}