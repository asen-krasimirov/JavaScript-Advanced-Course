function focus() {
    const allElements = document.querySelectorAll('div input');

    for (const elem of allElements) {
        elem.addEventListener('focus', focused);
        elem.addEventListener('blur', blured);
    }
    
    function focused(event) {
        const target = event.target;
        target.parentNode.setAttribute('class', 'focused');
    }

    function blured(event) {
        const target = event.target;
        target.parentNode.removeAttribute('class');
    }
}