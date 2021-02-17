const Bank = require('./code');



// let bank = new Bank('SoftUni Bank');

function testOne() {
    let bank = new Bank('SoftUni Bank');

    console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
    console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

    bank.depositMoney(6233267, 250);
    console.log(bank.depositMoney(6233267, 250));
    bank.depositMoney(4151596, 555);

    console.log(bank.withdrawMoney(6233267, 125));

    console.log(bank.customerInfo(6233267));

}

function testTwo() {
    let bank = new Bank('SoftUni Bank');

    let customer1 = bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 });
    // expect(customer1.firstName).to.be.equal('Svetlin');
    // console.log(customer1.firstName);
    // bank.newCustomer(customer1);
    console.log(bank.depositMoney(1111111, 10));
    // bank.depositMoney(11, 10);
    // console.log(bank.withdrawMoney(1111111, 5));

}

testOne();
// testTwo();

/*
Unexpected error: 
expected 'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!' 
to equal 'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!'
*/