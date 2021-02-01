function encodeAndDecodeMessages() {
    
    document.getElementById('main').addEventListener('click', onClick);
    const textAreasInformation = document.getElementsByTagName('textarea');

    const textAreas = {
        'first': textAreasInformation[0],
        'second': textAreasInformation[1]
    };

    const messageTransformator = {
        encode(message) {
            let newMessage = '';
            for (let i = 0; i < message.length; i++) {
                newMessage += String.fromCharCode(message.charCodeAt(i)+1);
            }
            return newMessage;
        },
        decode(message) {
            let newMessage = '';
            for (let i = 0; i < message.length; i++) {
                newMessage += String.fromCharCode(message.charCodeAt(i)-1);
            }
            return newMessage;
        }
    };
    

    function onClick(event) {
        const target = event.target;
        if (target.tagName !== 'BUTTON') { return; }


        let buttonLabel = target.textContent;
        
        if (buttonLabel.includes('Encode')) {
            let message = textAreas['first'].value;
            let newMessage = messageTransformator.encode(message);
            // clear the text area and place the message to the other area
            textAreas['first'].value = '';
            textAreas['second'].value = newMessage;

        } else if (buttonLabel.includes('Decode')) {

            let message = textAreas['second'].value;
            let newMessage = messageTransformator.decode(message);
            // clear the text area and change the text
            textAreas['second'].value = newMessage;
        }
    }
}