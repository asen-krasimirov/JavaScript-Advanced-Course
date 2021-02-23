function solve() {

   const authorInput = document.getElementById('creator');
   const titleInput = document.getElementById('title');
   const categoryInput = document.getElementById('category');
   const contentInput = document.getElementById('content');

   const postsSection = document.querySelector('main section');
   const archiveSection = document.querySelector('.archive-section ol');

   document.querySelector('.create').addEventListener('click', (event) => {
      event.preventDefault();

      const newPost = createNewPost(authorInput.value, titleInput.value, categoryInput.value, contentInput.value);
      postsSection.appendChild(newPost);
   });

   function sortArchivedElements() {
      Array.from(archiveSection.children)
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(elem => archiveSection.appendChild(elem));
   }

   function createCustomElement(type, classes, ...attributes) {
      const newElem = document.createElement(type);
      if (classes) {
         newElem.className = classes;
      }

      if (attributes) {
         for (let [name, value] of attributes) {
            newElem[name] = value;
         }
      }

      return newElem;
   }

   function createNewPost(author, title, category, content) {
      const newPost = createCustomElement('article');

      const newTitle = createCustomElement('h1', undefined, ['textContent', title]);

      const newCategory = createCustomElement('p');
      newCategory.textContent = 'Category: '
      const categoryContent = createCustomElement('strong', undefined, ['textContent', category]);
      newCategory.appendChild(categoryContent);


      const newCreator = createCustomElement('p');
      newCreator.textContent = 'Creator: '
      const creatorContent = createCustomElement('strong', undefined, ['textContent', author]);
      newCreator.appendChild(creatorContent);


      const newContent = createCustomElement('p', undefined, ['textContent', content]);

      // button holder
      const buttonHolder = createCustomElement('div', 'buttons');

      // delete button
      const deleteButton = createCustomElement('button', 'btn delete', ['textContent', 'Delete']);
      deleteButton.addEventListener('click', (event) => {
         newPost.remove();
      });

      // archive button
      const archiveButton = createCustomElement('button', 'btn archive', ['textContent', 'Archive']);
      archiveButton.addEventListener('click', (event) => {
         const archivedElem = createCustomElement('li', undefined, ['textContent', title]);
         archiveSection.appendChild(archivedElem);
         sortArchivedElements();
         newPost.remove();
      });

      buttonHolder.appendChild(deleteButton);
      buttonHolder.appendChild(archiveButton);

      newPost.appendChild(newTitle);
      newPost.appendChild(newCategory);
      newPost.appendChild(newCreator);
      newPost.appendChild(newContent);
      newPost.appendChild(buttonHolder);

      return newPost;
   }
}
