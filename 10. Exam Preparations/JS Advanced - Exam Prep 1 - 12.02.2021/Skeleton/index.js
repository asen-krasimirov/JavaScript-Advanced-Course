function solve() {

    const lectureNameInput = document.querySelector('input[name="lecture-name"]');
    const lectureDateInput = document.querySelector('input[name="lecture-date"]');
    const moduleInput = document.querySelector('select[name="lecture-module"]');

    const trainingSection = document.querySelector('div.modules');

    document.querySelector('.form-control button').addEventListener('click', addLecture);

    function createCustomeElement(type, ...attributes) {
        const elem = document.createElement(type);

        for (const attr of attributes) {
            let [name, value] = attr;
            elem[name] = value;
        }

        return elem;
    }

    function createModuleElement(name) {
        const moduleElem = createCustomeElement('div', ['className', 'module'])

        // name = name.toUpperCase() + '-MODULE';
        const title = createCustomeElement('h3', ['textContent', name]);

        // lecture holder
        const lectureHolder = createCustomeElement('ul');

        moduleElem.appendChild(title);
        moduleElem.appendChild(lectureHolder);

        return moduleElem;
    }

    function createLectureElement(name, date) {
        const lectureElem = createCustomeElement('li', ['className', 'flex']);

        date = date.split('T');
        date = [date[0].split('-').join('/'), date[1]]
            .join(' - ');
        name = `${name} - ${date}`;
        const title = createCustomeElement('h4', ['textContent', name]);

        const deleteButton = createCustomeElement('button', ['className', 'red'], ['textContent', 'Del']);
        // adding an event listener to the delete button
        deleteButton.addEventListener('click', (event) => {
            const parent = lectureElem.parentElement;
            lectureElem.remove();
            if (parent.children.length <= 0) {
                parent.parentElement.remove();
            }
        });

        lectureElem.appendChild(title);
        lectureElem.appendChild(deleteButton);

        return lectureElem;
    }

    function sortLectures(lectureParent) {

        const sortedLectures = Array.from(lectureParent.children);
        sortedLectures.forEach((lecture, index) => sortedLectures[index] = lecture.children[0].textContent);

        // ["tse - 2021/02/05 - 17:58", "tse - 2021/02/05 - 17:58", "tse - 2021/02/05 - 17:58"]

        sortedLectures.sort((contentOne, contentTwo) => {
            let [nameOne, dateOne, timeOne] = contentOne.split(' - ');
            let [nameTwo, dateTwo, timeTwo] = contentTwo.split(' - ');

            dateOne = dateOne.split('/');
            timeOne = timeOne.split(':');
            dateTwo = dateTwo.split('/');
            timeTwo = timeTwo.split(':');

            for (let i = 0; i < dateOne.length; i++) {
                let elemOne = Number(dateOne[i]);
                let elemTwo = Number(dateTwo[i]);

                if (elemOne === elemTwo) {
                    continue;
                }

                return elemOne - elemTwo;
            }

            for (let i = 0; i < timeOne.length; i++) {
                let elemOne = Number(timeOne[i]);
                let elemTwo = Number(timeTwo[i]);

                if (elemOne === elemTwo) {
                    continue;
                }

                return elemOne - elemTwo;
            }

            return 0;
        });
        
        const elements = Array.from(lectureParent.children)
        for (let i = 0; i < elements.length; i++) {
            elements[i].children[0].textContent = sortedLectures[i];
        }
    }

    function addLecture(event) {
        event.preventDefault();

        let [name, date, moduleName] = [lectureNameInput.value, lectureDateInput.value, moduleInput.value];

        if (!name || !date || moduleName === 'Select module') { return; }

        moduleName = moduleName.toUpperCase() + '-MODULE';
        const lectureElem = createLectureElement(name, date);


        // if module exists- append the lecture
        for (const elem of Array.from(trainingSection.children)) {
            if (elem.children[0].textContent === moduleName) {
                elem.querySelector('ul').appendChild(lectureElem);
                sortLectures(elem.querySelector('ul'));
                // console.log(sortLectures(elem.querySelector('ul')))
                return;
            }
        }
        // if module does not exists- add it
        const module = createModuleElement(moduleName)
        trainingSection.appendChild(module);

        module.querySelector('ul').appendChild(lectureElem);

    }
};