function solve() {
    document.querySelector('#container #selectMenuTo').innerHTML = `<option selected value="binary">Binary</option><option selected value="hexadecimal">Hexadecimal</option>`;
    document.querySelector('body button').addEventListener('click', onClick);

    function changeToBinary(number) {
        let binaryNumber = [];
        while (number >= 1) {
            binaryNumber.push(Math.floor(number%2));
            number = Math.floor(number / 2);
        }
        return binaryNumber.reverse().join('');
    }

    function changeToHexadcecimal(number) {
        let binaryNumber = [];

        // HEXA     0	1	2	3	4	5	6	7	8	9	A	B	C	D	E	F
        // DECIMAL	0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15
        const hexaConvertor = {
            0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
            10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F', 
        };
        
        while (number >= 1) {
            binaryNumber.push(hexaConvertor[Math.floor(number%16)]);
            number = Math.floor(number / 16);
        }
        return binaryNumber.reverse().join('');
        
    }

    const convertor = {
        'binary': changeToBinary,
        'hexadecimal': changeToHexadcecimal
    };

    function onClick() {
        const selectedOption = document.querySelector('#selectMenuTo').value;
        let input = Number(document.querySelector('#container #input').value);
        document.querySelector('footer #result').value = convertor[selectedOption](input);
    }
}