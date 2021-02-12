function addDestination() {

    function getValueAndClearInput(input) {
        let result = input.value;
        input.value = '';
        return result;
    }

    function createTr(city, country, season) {
        const newRowElem = document.createElement('tr');
        const newDestinationElem = document.createElement('td');
        newDestinationElem.textContent = `${city}, ${country}`;
        const newSeasonElem = document.createElement('td');
        newSeasonElem.textContent = season;

        newRowElem.appendChild(newDestinationElem);
        newRowElem.appendChild(newSeasonElem);

        return newRowElem;
    }

    const inputs = Array.from(document.getElementsByClassName('inputData'));
    let city = getValueAndClearInput(inputs[0]);
    let country = getValueAndClearInput(inputs[1]);
    let season = getValueAndClearInput(document.getElementById('seasons'));

    season = season[0].toUpperCase() + season.slice(1, season.length);

    if (!city || !country) {
        return;
    }

    const table = document.getElementById('destinationsList');
    const summoryInputs = Array.from(document.querySelectorAll('#summaryBox input'));

    // appending the new destionation
    table.appendChild(createTr(city, country, season));

    // incrementing the correct season
    for (const input of summoryInputs) {
        if (input.id === season.toLowerCase()) {
            input.value++;
        }
    }
}