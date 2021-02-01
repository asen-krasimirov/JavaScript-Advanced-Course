function solution() {
    string = '';
    return {
        append: newStr =>  this.string+=newStr,
        removeStart: n => this.string = this.string.slice(n, this.string.length),
        removeEnd: n => this.string = this.string.slice(0, this.string.length-n),
        print: () => console.log(this.string)
    };
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
