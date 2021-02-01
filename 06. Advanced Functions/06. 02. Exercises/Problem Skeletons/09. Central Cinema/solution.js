function solve() {
    // const onScreenButton = document.querySelector('#container button');
    // const movieInputs = Array.from(document.querySelectorAll('#container input'));
    const [nameInput, hallInput, ticketPrice] = Array.from(document.querySelectorAll('#container input'));
    const addedMovies = document.querySelector('#movies ul');
    const archiveSection = document.querySelector('#archive ul');

    document.querySelector('#container button').addEventListener('click', addNewMovie);
    document.querySelector('#archive button').addEventListener('click', clearAllMovies);

    function clearAllMovies(event) {
        Array.from(archiveSection.children).forEach(archive => archive.remove());
    }

    function areAllInputFilled(...inputs) {
        let areFilled = true;
        inputs.forEach(input => { if (input.value == "") { areFilled = false; } });
        return areFilled;
    }

    function clearAllInput(...inputs) {
        inputs.forEach(input => { input.value = ""; });
    }

    function createMovieElement(name, hallName, ticketPrice) {
        const newMovie = document.createElement('li');

        const movieName = document.createElement('span');
        movieName.textContent = name;

        const movieHall = document.createElement('strong');
        movieHall.textContent = `Hall: ${hallName}`;

        // price holder
        const priceHolder = document.createElement('div');
        const moviePrice = document.createElement('strong');
        moviePrice.textContent = ticketPrice.toFixed(2);  // NOTE: clould not be toFixeded
        const ticketNumber = document.createElement('input');
        ticketNumber.placeholder = 'Tickets Sold';
        
        // archive button
        const archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';
        // adding an event listener to the button
        archiveButton.addEventListener('click', (e) => {
            let ticketsCount = Number(ticketNumber.value);
            console.log(String(ticketsCount));
            if (String(ticketsCount) == 'NaN' || ticketsCount == 0) { return; }
            
            const archivedMovie = document.createElement('li');

            const archivedMovieName = document.createElement('span');
            archivedMovieName.textContent = name;

            const archivedMoviePrice = document.createElement('strong');
            archivedMoviePrice.textContent = `Total amount: ${(ticketPrice * ticketsCount).toFixed(2)}`;
            
            // delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Clear';
            // adding an event listener to the button
            deleteButton.addEventListener('click', (e) => {
                archivedMovie.remove();
            });

            
            archivedMovie.appendChild(archivedMovieName);
            archivedMovie.appendChild(archivedMoviePrice);
            archivedMovie.appendChild(deleteButton);

            archiveSection.appendChild(archivedMovie);
        });

        priceHolder.appendChild(moviePrice);
        priceHolder.appendChild(ticketNumber);
        priceHolder.appendChild(archiveButton);

        newMovie.appendChild(movieName);
        newMovie.appendChild(movieHall);
        newMovie.appendChild(priceHolder);
        
        return newMovie;
    }

    function addNewMovie(event) {
        event.preventDefault();

        if (!areAllInputFilled(nameInput, hallInput, ticketPrice)) { return; }
        let price = Number(ticketPrice.value);
        if (String(price) == 'NaN') { return; }

        let name = nameInput.value;
        let hall = hallInput.value;

        clearAllInput(nameInput, hallInput, ticketPrice);
        addedMovies.appendChild(createMovieElement(name, hall, price));
    };
}