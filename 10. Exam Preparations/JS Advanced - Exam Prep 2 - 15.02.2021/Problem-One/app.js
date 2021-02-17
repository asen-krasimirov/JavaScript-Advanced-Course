function solution() {

    const [giftsList, sendGiftsList, discardGiftsList] = Array.from(document.querySelectorAll('section ul'));
    const nameInput = document.querySelector('div input');

    document.querySelector('div button').addEventListener('click', () => {
        const gift = createListItem(nameInput.value);
        nameInput.value = '';
        giftsList.appendChild(gift);
        sortGifts();
    });

    function createListItem(name) {
        let newItem = document.createElement('li');
        newItem.className = 'gift';
        newItem.textContent = name;

        // adding buttons
        newItem = appendButtonsToElement(newItem);

        return newItem;
    }

    function appendButtonsToElement(newItem) {
        // adding 'Send' button
        const sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.className = 'sendButton';

        // adding 'Discard' button
        const discardButton = document.createElement('button');
        discardButton.textContent = 'Discard';
        discardButton.className = 'discardButton';

        newItem.appendChild(sendButton);
        newItem.appendChild(discardButton);

        function removeButtons() {
            newItem.removeChild(sendButton);
            newItem.removeChild(discardButton);
        }

        sendButton.addEventListener('click', () => {
            removeButtons();
            sendGiftsList.appendChild(newItem);
        });

        discardButton.addEventListener('click', () => {
            removeButtons();
            discardGiftsList.appendChild(newItem);
        });

        return newItem;
    }

    function sortGifts() {
        // const gifts = Array.from(giftsList.children);
        // const orderedList = gifts.map(elem => {
        //     let content = elem.textContent;
        //     content = content.slice(0, content.length-11);
        //     return content;
        // });
        // orderedList.sort((a, b) => a.localeCompare(b));

        // for (let i = 0; i < gifts.length; i++) {
        //     let content = orderedList[i];
        //     let elem = gifts[i];
        //     elem.textContent = content;
        //     elem = appendButtonsToElement(elem);
        // }
        Array
            .from(giftsList.children)
            .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
            .forEach(elem => giftsList.appendChild(elem));
    }
}