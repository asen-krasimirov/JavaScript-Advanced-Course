function deleteByEmail() {
    // get the remove match
    const emailToRemove = document.querySelector('input[name="email"]').value;

    // go through all SECOND <td>s and remove the matches ones
    let index = 0; 
    let deleted = false;
    for (const td of document.querySelectorAll('tbody tr td')) {
        index++;
        if (index % 2 != 0){ continue; } 
        console.log(td);
        console.log(td.textContent);
        if (td.textContent === emailToRemove) {
            deleted = true;
            const curTr = td.parentNode;
            curTr.parentNode.removeChild(curTr); 
        }
    }
    // print the deleted state
    result = "Not found.";
    deleted ? result = 'Deleted.' : result = 'Not found.';
    document.querySelector('div#result').textContent = result;
}