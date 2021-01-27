function solve() {
   const productList = [];
   let totalPrice = 0;
   
   const allOrderButtons = Array.from(document.querySelectorAll('.add-product'));
   const checkoutButton = document.querySelector('.checkout');
   const textArea = document.querySelector('.shopping-cart textarea');
   // const textArea = document.getElementsByTagName('textarea')[0];

   // adding a listener to every button
   allOrderButtons.forEach(button => {
      button.addEventListener('click', addProduct);
   });

   // adding a listener to the checkout button
   checkoutButton.addEventListener('click', finishOrder);

   function finishOrder(event) {
      textArea.textContent += `You bought ${productList.join(', ')} for ${totalPrice.toFixed(2)}.`;
      disableAllButtons();
   }

   function disableAllButtons() {
      checkoutButton.removeEventListener('click', finishOrder);
      allOrderButtons.forEach(button => button.removeEventListener('click', addProduct));
   }

   function addProduct(event) {
      const mainProductInformation = event.target.parentNode.parentNode;
      let productName = mainProductInformation.querySelector(".product-details .product-title").textContent;
      let productPrice = Number(mainProductInformation.querySelector(".product-line-price").textContent);

      // adding the information to the textarea
      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

      // adding the information to the total
      if (!productList.includes(productName)) { productList.push(productName) }
      totalPrice += productPrice;

   }
}