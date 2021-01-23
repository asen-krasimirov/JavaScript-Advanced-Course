function colorize() {
    const elementsToColor = document.querySelectorAll('table tr');
    for (let i = 1; i < elementsToColor.length; i+=2) {
        elementsToColor[i].style['background-color'] = 'teal';
    }
}