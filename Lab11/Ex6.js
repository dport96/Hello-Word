function isNonNegInt(q) {
    // q is a callback fun
    errors = []; // assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    // callBack(errors);
    return (errors.length == 0);
}

attributes  =  "Dan;55;55.5;-54.5";
pieces = attributes.split(';');

pieces.forEach(
    (item, index) => {
    console.log(`part ${index}:${item} is ${(isNonNegInt(item)?'a':'not a')} quantity`);
    }
);