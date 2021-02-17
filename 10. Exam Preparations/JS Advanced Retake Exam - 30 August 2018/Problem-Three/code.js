

class Vacationer {
    constructor(fullName, creditCardInfo) {
        this.creditCard = {};
        this._fullName = {};
        this.fullName = fullName;

        // this.creditCard = this.addCreditCardInfo([1111, '', 111]);
        // this.addCreditCardInfo([1111, '', 111]);
        // {
        //     cardNumber: 1111,
        //     expirationDate: "",
        //     securityNumber = 111,
        // };

        // if (creditCardInfo) {
            // this.creditCard.cardNumber = creditCardInfo[0];
            // this.creditCard.expirationDate = creditCardInfo[1];
            // this.creditCard.securityNumber = creditCardInfo[2];
            // this.addCreditCardInfo(creditCardInfo);
        // }

        creditCardInfo ? this.addCreditCardInfo(creditCardInfo) : this.addCreditCardInfo([1111, '', 111]);

        this.wishList = [];
        // this.idNumber = this.generateIDNumber();
        this.idNumber;
        this.generateIDNumber();
    }

    get fullName() {
        return `${this._fullName.firstName} ${this._fullName.middleName} ${this._fullName.lastName}`;
    }

    set fullName(info) {
        if (info.length != 3) {
            throw new Error('Name must include first name, middle name and last name');
        }
        
        for (let name of info) {
            if (!/^[A-Z][a-z]+$/.test(name)) {
                throw new Error('Invalid full name');
            }
        }
        
        let [firstName, middleName, lastName] = info;

        this._fullName['firstName'] = firstName;
        this._fullName['middleName'] = middleName;
        this._fullName['lastName'] = lastName;
    }

    generateIDNumber() {
        // 231 * firstName’s first letter’s ASCII code + 139 * middleName length
        let result = 231 * this._fullName.firstName.charCodeAt(0) + 139 * this._fullName.middleName.length;
        result += (['a', 'e', 'o', 'i', 'u'].includes(this._fullName.lastName[this._fullName.lastName.length-1])) ? '8' : '7';
        this.idNumber = result;
        // return result;
    }

    addCreditCardInfo(info) {
        if (info.length < 3) {
            throw new Error('Missing credit card information');
        }

        let [cardNumber, expirationDate, securityNumber] = info;

        if (typeof cardNumber != 'number' || typeof securityNumber != 'number') {
            throw new Error('Invalid credit card details');
        }

        this.creditCard['cardNumber'] = cardNumber;
        this.creditCard['expirationDate'] = expirationDate;
        this.creditCard['securityNumber'] = securityNumber;
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }

        this.wishList.push(destination);

        this.wishList.sort((one, two) => one.length - two.length);
    }

    getVacationerInfo() {
        let result = `Name: ${this.fullName}\nID Number: ${this.idNumber}`
        result += `\nWishlist:\n${(this.wishList.length > 0) ? this.wishList.join(', ') : 'empty'}`;
        result += `\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`;
        return result;
    }
}

module.exports = Vacationer;