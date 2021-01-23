function search() {
   const searchedElem = document.getElementById('searchText').value;
   const allTowns = [...document.querySelectorAll('ul#towns li')];
   let matchesFound = 0;

   for (let town of allTowns) {
      if (town.textContent.includes(searchedElem)) {
         town.style['text-decoration'] = 'underline';
         town.style['font-weight']= 'bold';
         matchesFound++;
      } else {
         town.style['text-decoration'] = '';
         town.style['font-weight']= '';
      }
   }
   document.getElementById('result').textContent = `${matchesFound} matches found`;
}
