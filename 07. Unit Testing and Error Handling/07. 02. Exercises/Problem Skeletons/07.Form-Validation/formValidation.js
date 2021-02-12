function validate() {
    /*
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    */
    const passwordInput = document.getElementById('password');
    const confirm_passwordInput = document.getElementById('confirm-password');

    const isCompanyInput = document.getElementById('company');
    const companyFrom = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');

    let allValid = true;

    const inputTags = ['username', 'email', 'password',
        // 'confirm-password', 'company'
    ];
    const inputValidations = {
        'username': validateUsername,
        'email': validateEamil,
        'password': validatePassword,
    };

    document.getElementById('submit').addEventListener('click', validateForm);
    isCompanyInput.addEventListener('change', displayCompanyForm);

    function displayCompanyForm(event) {
        companyFrom.style.display = event.target.checked ? 'block' : 'none';
    }

    function validateUsername(username) {
        return /^[a-zA-Z0-9]{3,20}$/.test(username);
    }

    function validateEamil(email) {
        return /.+\@.*\.{1,}/.test(email);
    }

    function validatePassword(password) {
        return /^[\w]{5,15}$/.test(password);
    }

    function validateConfirmationPassword(confirmation_password, password, isValid) {
        return password === confirmation_password && isValid;
    }

    function validateCompanyNumber(number) {
        let valid = true;
        number = Number(number);
        if (number == 'NaN') { valid = false; }
        else if (1000 > number || number > 9999) { valid = false; }

        return valid;
    }

    function changeBorderColor(elem, validator) {
        elem.style['border-color'] = validator ? '' : 'red';
        if (!validator) { allValid = false; }
    }

    function validateForm(event) {
        event.preventDefault();
        allValid = true;

        inputTags.forEach(tag => {
            const curElement = document.getElementById(tag);
            let information = curElement.value;
            changeBorderColor(curElement, inputValidations[tag](information))
        });

        // 'confirm-password': validateConfirmationPassword,
        changeBorderColor(confirm_passwordInput, validateConfirmationPassword(confirm_passwordInput.value, passwordInput.value, validatePassword(passwordInput.value)));
        // 'company'
        if (isCompanyInput.checked) {
            changeBorderColor(companyNumber, validateCompanyNumber(companyNumber.value));
        };

        document.getElementById('valid').style.display = allValid ? 'block' : 'none';


    }

}
