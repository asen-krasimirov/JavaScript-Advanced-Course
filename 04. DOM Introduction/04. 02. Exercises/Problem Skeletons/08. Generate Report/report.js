function generateReport(colNames) {
    const result = [];
    const checkedCatrgories = {};
    Array.from(document.querySelectorAll('thead tr th input')).forEach((category, index) => {
        if (category.checked) {
            checkedCatrgories[index] = category.name;
            category.checked = false;
        }
    });
    const rows = [...document.querySelectorAll('tbody tr')];
    const indexOfCheckedCatrgories = Object.keys(checkedCatrgories);

    for (let row of rows) {
        row = Array.from(row.children);
        let curEmployee = {};
        for (let index = 0; index < row.length; index ++) {
            if (indexOfCheckedCatrgories.includes(String(index))) {
                curEmployee[checkedCatrgories[index]] = row[index].textContent;
            }
        }
        result.push(curEmployee);
    }
    document.getElementById('output').value = JSON.stringify(result, undefined, 4);
}