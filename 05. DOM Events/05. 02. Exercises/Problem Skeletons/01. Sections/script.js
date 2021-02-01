function create(words) {
   
   function divWithParagraphCreator(content) {
      const newElem = document.createElement('div');
      const elementContent = document.createElement('p');
      elementContent.textContent = content;
      elementContent.style.display = 'none';

      newElem.appendChild(elementContent);

      return newElem;
   }

   const mainContainter = document.getElementById('content');
   // add 'click' listener to the main conteiner
   mainContainter.addEventListener('click', displayChild);

   function displayChild(event) {
      const target = event.target;
      if (target.tagName == 'DIV' && target.id != 'content') {
         target.querySelector('p').style.display = '';
      }
   }

   for (let word of words) {
      const newElem = divWithParagraphCreator(word);
      mainContainter.appendChild(newElem);
   }
}