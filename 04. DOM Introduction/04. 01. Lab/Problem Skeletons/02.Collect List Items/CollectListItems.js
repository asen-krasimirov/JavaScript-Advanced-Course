function extractText() {
    let elements = [...document.querySelectorAll('ul#items li')];
    elements.forEach((htmlObj, index) => elements[index] = htmlObj.textContent);
    document.querySelector('#result').textContent = elements.join('\n');
}
