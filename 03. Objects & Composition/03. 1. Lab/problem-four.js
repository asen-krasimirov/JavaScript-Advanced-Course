

function factory(locLibrary, locOrders) {
    const finishedOrders = [];
    for (let order of locOrders) {
        
        const newObj = {};
        for (let property in order.template) { newObj[property] = order.template[property]; }
        
        // const newObj = Object.assign({}, order.template);
        
        for (let functionality of order.parts) { newObj[functionality] = locLibrary[functionality]; }
        finishedOrders.push(newObj);
    }
    return finishedOrders;
}


const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    },
];


const testFactory = (products) => {
    products.forEach(product => {
        console.log('\n');
        console.log(Object.keys(product));
        console.log(Object.values(product));
    })
}


const products = factory(library, orders);
// console.log(products);
testFactory(products);
