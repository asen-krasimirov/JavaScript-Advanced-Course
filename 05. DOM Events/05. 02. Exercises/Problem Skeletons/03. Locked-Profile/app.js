function lockedProfile() {
    document.querySelector('main#main').addEventListener('click', showMore);

    function showMore(event) {
        const button = event.target;
        if (button.tagName !== 'BUTTON') { return; } 
        
        const profile = event.target.parentNode;
        let radioValidator = profile.querySelector('input').checked;

        if (radioValidator) { return; }

        const hiddenInformation = profile.querySelector('div');

        let buttonState = button.textContent == 'Show more';
        button.textContent = buttonState ? 'Hide it' : 'Show more';
        hiddenInformation.style.display = buttonState ? 'block' : 'none';
    }
}