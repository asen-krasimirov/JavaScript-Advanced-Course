function extract(content) {
    const matches = [];
    const data = [...document.getElementById(content).textContent];
    let curWord = '';
    let i = 0;
    while (i < data.length) {
        let curChar = data[i];
        if (curChar == '(') {
            i++;
            while (i < data.length) {
                let curChar = data[i];
                if (curChar == ')') { matches.push(curWord); curWord=''; break; }
                else { curWord+=curChar; }
                i++;
            }
        }
        i++;

    }
    // console.log(matches.join('; '));
    return matches.join('; ');
}