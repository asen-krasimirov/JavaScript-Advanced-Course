function attachEventsListeners() {
    const conversationRates = {
        '0': 1000,
        '1': 1,
        '2': 0.01,
        '3': 0.001,
        '4': 1609.34,
        '5': 0.9144,
        '6': 0.3048,
        '7': 0.0254
    };

    document.getElementById('convert').addEventListener('click', convertValues);
    const inputField = document.getElementById('inputDistance');
    const outputField = document.getElementById('outputDistance');

    const inputOption = document.getElementById('inputUnits');
    const outputOption = document.getElementById('outputUnits');

    function convertValues(event) {
        let convertedDistance = Number(inputField.value);
        convertedDistance *= conversationRates[inputOption.selectedIndex];
        convertedDistance /= conversationRates[outputOption.selectedIndex];

        outputField.value = convertedDistance;
    }
    
}