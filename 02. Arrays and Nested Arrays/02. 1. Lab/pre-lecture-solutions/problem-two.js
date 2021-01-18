

function kSequence (n, k) {
    n = Number(n);
    k = Number(k);
    let sequence = [1];

    for (let i = 0; i < n-1; i++) {
        let curElem = 0;
        let backLimit = i-k;

        for (let y = i; y > backLimit; y--) {
            if (y >= 0) {
                curElem += sequence[y];
            } 
        }
        sequence.push(curElem);
        curElem = 0;
    }

    return sequence;
    // return `[${sequence.join(', ')}]`;
}


console.log(kSequence(6, 3));
console.log();
console.log(kSequence(8, 2));
