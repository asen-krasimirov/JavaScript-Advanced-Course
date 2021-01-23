function solve() {
  
  const toPascal = (text) => {
    const words = text.split(' ');
    words.forEach((word, index) => {

      word = word.toLowerCase();
      let firstLetter = word[0].toUpperCase();
      words[index] = firstLetter + word.slice(1, word.length);

    })
    return words.join('');
  };

  const toCamel = (text) => {
    text = toPascal(text);
    text = text[0].toLowerCase() + text.slice(1, text.length);
    return text;
  };

  const convertor = {
    'Camel Case': toCamel,
    'Pascal Case': toPascal,
  };

  let textToConvert = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  selectedConvertor = convertor[convention];
  let output = 'Error!';
  if (selectedConvertor) {
    output = selectedConvertor(textToConvert);
  }
  
  document.querySelector('span#result').textContent = output;
}
