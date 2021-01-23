function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const clearField = (field) => field.value = '';
   
   function onClick() {
      let input = document.querySelector('#searchField');
      const rows = [...document.querySelectorAll('.container tbody tr')];

      // rows.map(tr => {
      //    for (let td of tr.children) {
      //       if (td.textContent.toLowerCase().includes(input.value.toLowerCase()) && input.value !== '') {
      //          tr.setAttribute('class', 'select');
      //          return;
      //       } else {
      //          tr.removeAttribute('class');
      //       }
      //    }
      // })

      rows.map(tr => {
         if (tr.textContent.toLowerCase().includes(input.value.toLowerCase()) && input.value !== '') {
            tr.setAttribute('class', 'select');
         } else {
            tr.removeAttribute('class');
         }
      })
      clearField(input);
   }
}