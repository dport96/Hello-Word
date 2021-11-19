var fs = require('fs');

var buf = new Buffer(1);
//var bufLength = buf.length;
// var bytesRead = bufLength;
var pos = 0;
var bytesRead = 0;
var filename = 'registration_data.dat';

if (fs.existsSync(filename)) {
    var stats = fs.statSync(filename);
    console.log(filename + ' has ' + stats["size"] + ' characters');
    var fdr = fs.openSync(filename, 'r');

    while (pos < stats["size"]) {
        bytesRead = fs.readSync(fdr, buf, 0, 1, pos);
        var bufStr = buf.toString('utf8', 0, bytesRead);
        console.log(bufStr);
        // numLinesRead += bufStr.split('\n').length - 1;
        // ret += bufStr;
        pos += bytesRead;
       }

    /*
    new_user_data_line = '\nnewuser; newpass; newuser@user.com; New User';
    fs.appendFileSync(filename, new_user_data_line);

    lines = fs.readFileSync(filename, 'utf-8')
        .split('\n')
        .filter(Boolean);
    lines.forEach(function (item) {
        user_info = item.split(';');
        console.log(`${user_info[0]} has password ${user_info[1]}`);
    }); 
    */

} else {
    console.log(filename + ' does not exist!');
}