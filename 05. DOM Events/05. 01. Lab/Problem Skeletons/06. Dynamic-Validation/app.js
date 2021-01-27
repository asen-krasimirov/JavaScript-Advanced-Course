function validate() {
    document.getElementById('email').addEventListener('change', validateEmail);

    function validateEmail(event) {
        const email = event.target;

        // check the email
        let myRe = new RegExp('[a-z]+\@[a-z]+\.[a-z]+', 'g');
        let isValid = myRe.test(email.value);
        
        // if it's not valid apply 'error' class else remove the class attribute
        isValid ? email.removeAttribute('class') : email.setAttribute('class', 'error');

    }
}