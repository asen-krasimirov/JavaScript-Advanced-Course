

function fromJSONToHTMLTable(input) {

    function escapeHtml(param) {

        if (typeof param == 'number') {
            return param;
        }

        let result = '';
        const escaptedChars = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }
        for (let i = 0; i < param.length; i++) {
            if (Object.keys(escaptedChars).includes(param[i])) {
                result += escaptedChars[param[i]];
            } else { result += param[i]; }
        }

        return result;

    };
    
    input = JSON.parse(input);
    const htmlTable = ['<table>'];

    // table header
    const header = Object.keys(input[0]);
    let curEntry = "   <tr>";
    for (let elem of header) { curEntry += `<th>${elem}</th>` }
    curEntry += "</tr>"; htmlTable.push(curEntry);

    // adding entries
    for (const entry of input) {
        let curEntry = "   <tr>";
        for (const elem in entry) {
            curEntry += `<td>${escapeHtml(entry[elem])}</td>`
        }
        curEntry += "</tr>"; htmlTable.push(curEntry);
    }

    htmlTable.push('</table>')
    return htmlTable.join('\n');
}


console.log(fromJSONToHTMLTable('[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen","Score":6}]'));
// console.log(fromJSONToHTMLTable('[{"Name":"Pesho", "Score":4, "Grade":8}, {"Name":"Gosho", "Score":5,"Grade":8}, {"Name":"Angel", "Score":5.50, " Grade":10}]'));
