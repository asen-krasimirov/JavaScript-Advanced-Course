function sumTable() {
    let totalSum = 0;
    [...document.querySelectorAll('tr td:last-child')].forEach(
        elem => {
            totalSum += Number(elem.textContent);
        }
    );
    document.getElementById('sum').textContent = totalSum;
}