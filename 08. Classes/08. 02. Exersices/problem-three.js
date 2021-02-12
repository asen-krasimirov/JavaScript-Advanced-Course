

function manageTickets(ticketInformation, criteria) {
    const allTickets = [];
    
    // [
    //     'Philadelphia|94.20|available',
    //     'New York City|95.99|available',
    //     'New York City|95.99|sold',
    //     'Boston|126.20|departed'
    // ]

    const sortByCriteria = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status),
    };

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    ticketInformation.forEach(info => {
        let [destination, price, status] = info.split('|');
        allTickets.push(
            new Ticket(destination, Number(price), status)
        )
    });

    return allTickets.sort(sortByCriteria[criteria]);
}



console.log(manageTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination'))