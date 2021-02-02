

function solution(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suitUTFConvert = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    if (!validFaces.includes(face)) { throw new Error('Face not valid!'); }
    else if (!Object.keys(suitUTFConvert).includes(suit)) { throw new Error('Suit not valid!'); }

    suit = suitUTFConvert[suit];

    return {
        face,
        suit,
        toString() { return `${face}${suit}` }
    };
}


const newCard = solution('A', 'S');
console.log(newCard.toString());

const newCardTwo = solution('2', 'W');
console.log(newCardTwo.toString());
