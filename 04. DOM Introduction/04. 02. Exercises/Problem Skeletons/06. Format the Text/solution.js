function solve() {
  let data = [...document.querySelector('textarea#input').value.split('.')];
  data = data.filter(elem => elem !== '');
  const result = [];

  for (let i = 0; i < data.length; i+=3) {
    let curElements = data.slice(i, i+3).join('. ') + '.';
    result.push(`<p>${curElements}</p>`);
  }
  document.querySelector('div#output').innerHTML = result.join();
}
