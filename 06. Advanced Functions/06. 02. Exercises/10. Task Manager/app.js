function solve() {
    let [_, openSection, progressSection, completeSection] = Array.from(document.getElementsByTagName('section'));
    openSection = openSection.children[1];
    progressSection = progressSection.children[1];
    completeSection = completeSection.children[1];

    document.getElementById('add').addEventListener('click', createTask);
    const taskNameInput = document.getElementById('task');
    const taskDescription = document.getElementById('description');
    const taskDate = document.getElementById('date');

    function validateInputs(...inputs) {
        let validInputs = true;
        inputs.forEach(input => { if (input.value == '') { validInputs = false; } });
        return validInputs;
    }


    function addRemoveListener(trigger, target) {
        trigger.addEventListener('click', () => target.remove());
    }

    function createButton(buttonColor, parent) {
        const buttonColorLog = {
            'green': 'Start',
            'red': 'Delete',
            'orange': 'Finish'
        }

        const button = document.createElement('button');
        button.textContent = buttonColorLog[buttonColor];
        button.classList.add(buttonColor);
        return button;
    }

    function createButtonHolder() {
        const buttonHolder = document.createElement('div');
        buttonHolder.classList.add('flex');
        return buttonHolder;
    }

    function addNewTask(name, description, date) {
        const newTask = document.createElement('article');

        const newName = document.createElement('h3');
        newName.textContent = name;

        const newDescription = document.createElement('p');
        newDescription.textContent = `Description: ${description}`;

        const newDate = document.createElement('p');
        newDate.textContent = `Due Date: ${date}`;

        // creating the two buttons
        const buttonHolder = createButtonHolder();

        /*
        const startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.classList.add('green');
        */

        const startButton = createButton('green');
        startButton.addEventListener('click', (e) => {
            newTask.removeChild(buttonHolder);
            const newButtonHolder = createButtonHolder();
            const deleteButton = createButton('red');
            addRemoveListener(deleteButton, newTask);

            const finishButton = createButton('orange');
            finishButton.addEventListener('click', (e) => {
                newTask.removeChild(newButtonHolder);
                progressSection.removeChild(newTask);
                completeSection.appendChild(newTask);
            });

            newButtonHolder.appendChild(deleteButton);
            newButtonHolder.appendChild(finishButton);

            newTask.appendChild(newButtonHolder);

            openSection.removeChild(newTask);
            progressSection.appendChild(newTask);
        });

        /*
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('red');
        */
        
        const deleteButton = createButton('red');
        addRemoveListener(deleteButton, newTask);

        buttonHolder.appendChild(startButton);
        buttonHolder.appendChild(deleteButton);

        newTask.appendChild(newName);
        newTask.appendChild(newDescription);
        newTask.appendChild(newDate);
        newTask.appendChild(buttonHolder);

        return newTask;
    }

    function createTask(event) {
        event.preventDefault();
        if (!validateInputs(taskNameInput, taskDescription, taskDate)) { return; }
        let name = taskNameInput.value;
        let description = taskDescription.value;
        let date = taskDate.value;

        openSection.appendChild(addNewTask(name, description, date));
    }
}
