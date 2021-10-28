


var attributes  =  "Dan;55;-1;1.23";

var parts = attributes.split(';');

/*
for(part of parts) {

    console.log(`${part} isNonNegInt: ${isNonNegInt(part)}`);
}
*/


parts.forEach( (item, index) => {console.log(`part ${item} is ${(isNonNegInt(item)?'a':'not a')} quantity`);} );

function isNonNegInt(q, returnErrors = false) {

    // Checks if a string q is a non-neg integer. If returnErrors is true, the array of errors is returned,
    // others returns true if q is a non-neg int.
    // q is a callback fun
    errors = []; // assume no errors at first
    if(q == '') q = 0;
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    // callBack(errors);
    return returnErrors ? errors : (errors.length == 0);
}


isNonNegInt("-1.23");
isNonNegInt("-1");
