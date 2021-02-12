

function validateHTTP(httpObj) {
    const objProperies = Object.keys(httpObj);

    function validateMethod() {
        // let isValid = true;
        // if (!objProperies.includes('method')) { isValid = false; }
        // if (!possibleMethods.includes(httpObj.method)) { isValid = false; }
        // return isValid;

        const possibleMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        return possibleMethods.includes(httpObj.method);

    }

    function validateUri() {
        const regEx = /\*|^[A-Za-z\.0-9]+$/;
        return regEx.test(httpObj.uri);  // Note: cannot be an empty string
    }

    function validateVersion() {
        const possibleVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        return possibleVersions.includes(httpObj.version);
    }

    function validateMessage() {
        const regEx = /^[^\<\>\\\&\'\"]+$/;
        return (httpObj.message.length != '') ? regEx.test(httpObj.message) : true;  // Note: can be an empty string
    }

    const validations = {
        'method': validateMethod,
        'uri': validateUri,
        'version': validateVersion,
        'message': validateMessage
    };

    const turnValidationNamesToInputNames = {
        'method': 'Method',
        'uri': 'URI',
        'version': 'Version',
        'message': 'Message'
    };
    // function makeFirstLatterUpper(input) {
    //     let fisrtLatter = input[0].toUpperCase();
    //     return fisrtLatter + input.slice(1);
    // }

    for (const validation in validations) {
        // throw new Error(`Invalid request header: Invalid ${validation}`)

        let valid = true;
        if (!objProperies.includes(validation)) { valid = false; }
        else if (!validations[validation]()) { valid = false; }

        if (!valid) { throw new Error(`Invalid request header: Invalid ${turnValidationNamesToInputNames[validation]}`) }

    }

    return httpObj;

}


// console.log(validateHTTP({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }
// ));

// console.log(validateHTTP({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }
// ));


// console.log(validateHTTP({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   }
  
// ));

// let obj = {
//     method: 'POST',
//     version: 'HTTP/2.0',
//     message: 'rm -rf /*'
// };

let obj = {
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
};

console.log(validateHTTP(obj));