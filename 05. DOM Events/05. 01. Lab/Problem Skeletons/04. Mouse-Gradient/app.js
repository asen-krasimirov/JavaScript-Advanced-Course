function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient'); 
    const reusltElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', onMouseMove);
    gradientElement.addEventListener('mouseout', onMouseOut);

    function onMouseMove(event) {
        // get the offset in persentage
        const persentage = Math.floor(event.offsetX / event.target.clientWidth * 100);

        // display the calculated persentage in the "result" div id
        reusltElement.textContent = `${persentage}%`;
        
    }
    function onMouseOut(event) {
        reusltElement.textContent = '';
    }
}