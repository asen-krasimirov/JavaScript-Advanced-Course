

class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [
            // {
            //     firstName: 'string', lastName: 'string', personalId: number, 
            //     totalMoney : number, transactions: Array 
            // }
        ];
    }

    getCustomerById(id) {
        for (const customer of this.allCustomers) {
            if (customer.personalId === id) {
                return customer;
            }
        }

        throw new Error('We have no customer with this ID!');
    }

    newCustomer(customer) {
        for (const curCustomer of this.allCustomers) {
            if (curCustomer.personalId === customer.personalId) {
                throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
            }
        }
        customer.totalMoney = 0;
        customer.transactions = [];
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        const customer = this.getCustomerById(personalId);

        customer.totalMoney += amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const customer = this.getCustomerById(personalId);

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const customer = this.getCustomerById(personalId);
        let customerInfo = `Bank name: ${this._bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${customer.totalMoney}$\nTransactions:\n`;
        let transactions = customer.transactions
            .map((elem, index) => `${index+1}. ${elem}`)
            .reverse()
            .join('\n');

        customerInfo += transactions;
        return customerInfo;
    }
}


module.exports = Bank;
