/*

Solution #1

function upperWords (string) {
    let words = [];
    let currentWord = '';
    let currentChar = '';
    const delimiters = [",", " ", "!", "?", "'", '"', "/", "\\", "|", "(", ")", "[", "]", "{", "}", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (let i = 0; i < string.length; i++) {
        currentChar = string[i];

        if (delimiters.includes(currentChar)) {

            if (currentWord.length) {
                words.push(currentWord);
            }
            currentWord = '';

        } else if (i == string.length-1) {

            currentWord += currentChar;
            words.push(currentWord);

        } else {

            currentWord += currentChar;

        }
    }

    for (let i = 0; i < words.length; i++) {words[i] = words[i].toUpperCase();} 


    return words.join(", ");
}
*/

// Solution #2
function upperWords (string) {
    const re = /([\w]+)/g;
    const words = string.match(re);

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
    }
    console.log(words.join(', '))

}

console.log(upperWords('Hi, how are you?'));
// console.log(upperWords('hello'));
// console.log(upperWords("Functions in JS can be nested, i.e. hold other functions"));
