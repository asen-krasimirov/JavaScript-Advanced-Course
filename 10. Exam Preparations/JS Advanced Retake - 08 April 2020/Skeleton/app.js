function solve() {

    const [_, openDiv, progressDiv, completedDiv] = Array.from(document.querySelectorAll('section div:nth-child(2)'));
    const nameInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');

    document.getElementById('add').addEventListener('click', (event) => {
        event.preventDefault();
        let [name, description, date] = [nameInput.value, descriptionInput.value, dateInput.value];

        if (!validateInputs([name, description, date])) {
            return;
        }

        createTask(name, description, date);
    });

    function validateInputs(inputs) {
        for (let input of inputs) {
            if (input === '') { return false; }
        }
        return true;
    }

    function createCustomElement(type, content, className) {
        const newElem = document.createElement(type);

        if (content) {
            newElem.textContent = content;
        }

        if (className) {
            newElem.className = className;
        }

        return newElem;
    }

    function addSelfDeleteEvenListener(element) {
        element.addEventListener('click', (event) => {
            element.parentNode.parentNode.remove();
        });
    }

    function createTask(name, description, date) {
        const newTask = createCustomElement('article');

        const taskName = createCustomElement('h3', name);
        const taskDescription = createCustomElement('p', `Description: ${description}`);
        const taskDate = createCustomElement('p', `Due Date: ${date}`);

        // button holder
        const buttonHolder = createCustomElement('div', undefined, 'flex');

        // 'Start' button
        const startButton = createCustomElement('button', 'Start', 'green');
        startButton.addEventListener('click', (event) => {
            buttonHolder.removeChild(startButton);
            
            // 'Finish' Button
            const finishButton = createCustomElement('button', 'Finish', 'orange');
            finishButton.addEventListener('click', (event) => {
                newTask.removeChild(buttonHolder);
                completedDiv.appendChild(newTask);
            })
            
            buttonHolder.appendChild(finishButton);
            progressDiv.appendChild(newTask);
        });

        // 'Delete' button
        const deleteButton = createCustomElement('button', 'Delete', 'red');
        addSelfDeleteEvenListener(deleteButton);

        buttonHolder.appendChild(startButton);
        buttonHolder.appendChild(deleteButton);

        newTask.appendChild(taskName);
        newTask.appendChild(taskDescription);
        newTask.appendChild(taskDate);
        newTask.appendChild(buttonHolder);

        openDiv.appendChild(newTask);
    }
}