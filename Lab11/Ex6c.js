parts = [..."abc"];

//for(p of parts) {
    parts.forEach(printIt);
//}

function printIt(q) {
    setTimeout(function () {
        console.log(q);
    }, 500 * Math.random());
}

