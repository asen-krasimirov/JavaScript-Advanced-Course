function solve() {

  // const executeButtonFunction = {
  //   'Generate': generateNewElements,
  //   'Buy': printSelectedElements
  // };

  // document.getElementById('exercise').addEventListener('click', buttonClick);
  const tableBody = document.querySelector('tbody');
  const [generateTextArea, resultTextArea] = document.getElementsByTagName('textarea');

  // function buttonClick(event) {
  //   const target = event.target;
  //   if (target.tagName !== 'BUTTON') { return; }

  //   executeButtonFunction[target.textContent]();
  // }

  const [generateButton, buyButton] = document.getElementsByTagName('button');

  generateButton.addEventListener('click', generateNewElements);
  buyButton.addEventListener('click', printSelectedElements);


  function generateNewElements() {
    const input = JSON.parse(generateTextArea.value);
    generateTextArea.value = '';

    for (const newItemInfo of input) {
      const { img, name, price, decFactor } = newItemInfo;

      // TODO: Optimize <td> elements creation with factory function

      // image
      const imgTd = document.createElement('td');
      const itemImg = document.createElement('img');
      itemImg.setAttribute('src', img);
      // itemImg.src = img;
      imgTd.appendChild(itemImg);

      // name
      const nameTd = document.createElement('td');
      const itemName = document.createElement('p');
      itemName.textContent = name;
      nameTd.appendChild(itemName);

      // price
      const priceTd = document.createElement('td');
      const itemPrice = document.createElement('p');
      itemPrice.textContent = price;
      priceTd.appendChild(itemPrice);

      // decFactor
      const decFactorTd = document.createElement('td');
      const itemDecFactor = document.createElement('p');
      itemDecFactor.textContent = decFactor;
      decFactorTd.appendChild(itemDecFactor);

      // input button
      const inputTd = document.createElement('td');
      const itemCheckbox = document.createElement('input');
      // itemCheckbox.disabled = true;
      itemCheckbox.type = 'checkbox';
      inputTd.appendChild(itemCheckbox);

      // for (const tdInfo of [itemImg, itemName, itemPrice, itemDecFactor, itemCheckbox]) {
      //   const td = document.createElement('td');
      //   td.appendChild(tdInfo);
      //   newItem.appendChild(td);
      // }

      const newItem = document.createElement('tr');
      newItem.appendChild(imgTd);
      newItem.appendChild(nameTd);
      newItem.appendChild(priceTd);
      newItem.appendChild(decFactorTd);
      newItem.appendChild(inputTd);

      tableBody.appendChild(newItem);
    }

  }

  function printSelectedElements() {
    // console.log(resultTextArea);

    const allFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (const item of tableBody.children) {
      // const [imgHolder, nameHolder, priceHolder, decFactorHolder, checkboxHolder] = item.children;
      const data = item.children;

      let name = data[1].children[0].textContent;
      let price = Number(data[2].children[0].textContent);
      let decFactor = Number(data[3].children[0].textContent);
      let markedForBuying = data[4].children[0].checked;

      if (markedForBuying) {
        allFurniture.push(name);
        totalPrice += price;
        totalDecFactor += decFactor;
      }
    }

    
    resultTextArea.value = `Bought furniture: ${allFurniture.join(', ')}\n`;
    resultTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    resultTextArea.value += `Average decoration factor: ${(totalDecFactor/allFurniture.length)}`;
  }
}