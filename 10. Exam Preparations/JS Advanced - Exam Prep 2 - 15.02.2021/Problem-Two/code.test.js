const ChristmasDinner = require('./code');

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

/*
Unexpected error: expected 
'Ivan will eat Oshav, whitch consists of Fruits, Honey\nPetar will eat Folded cabbage leaves filled with rice, whitch consists of Cabbage, Rice, Salt, Savory\nGeorgi will eat Peppers filled with beans, whitch consists of Beans, Peppers, Salt' 
'Ivan will eat Oshav, which consists of Fruits, Honey\nPetar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory\nGeorgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt'

*/