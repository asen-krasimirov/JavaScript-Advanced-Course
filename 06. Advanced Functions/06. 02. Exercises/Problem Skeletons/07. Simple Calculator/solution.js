

function solution() {
    /*
    const sumButton = document.querySelector('#sumButton'); 
    const subtractButton = document.querySelector('#subtractButton'); 
    const resultField = document.querySelector('#result');
    */

    const modifyObj = {
        // init(selector1, selector2, resultSelector)
        // add()
        // subtract()
    };

    const init = (selector1, selector2, resultSelector) => {
        modifyObj.selector1 = document.querySelector(selector1);
        modifyObj.selector2 = document.querySelector(selector2);
        modifyObj.resultSelector = document.querySelector(resultSelector);
    };

    const add = () => {
        modifyObj.resultSelector.value = Number(modifyObj.selector1.value) + Number(modifyObj.selector2.value);
    };

    const subtract = () => {
        modifyObj.resultSelector.value = Number(modifyObj.selector1.value) - Number(modifyObj.selector2.value);

    };

    modifyObj.init = init;
    modifyObj.add = add;
    modifyObj.subtract = subtract;

    return modifyObj;
}


function executeSolution() {
    
    const sumButton = document.querySelector('#sumButton'); 
    const subtractButton = document.querySelector('#subtractButton'); 

    // const numOne = document.querySelector('#num1');
    // const numTwo = document.querySelector('#num2');
    // const resultField = document.querySelector('#result');
    
    const modifyObj = solution();
    modifyObj.init('#num1', '#num2', '#result');

    sumButton.addEventListener('click', modifyObj.add);
    subtractButton.addEventListener('click', modifyObj.subtract);
}
