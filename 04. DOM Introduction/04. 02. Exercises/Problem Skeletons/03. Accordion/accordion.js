function toggle() {
    const button = document.querySelector('span.button');
    const extraDiv = document.querySelector('#extra');

    let isHidden = button.textContent == 'More';
    button.textContent = isHidden ? 'Less' : 'More';
    extraDiv.style.display = isHidden ? 'block' : 'none';
}