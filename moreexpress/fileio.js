/**
 * Created by championswimmer on 30/01/17.
 */


const fs = require('fs');

// fs.writeFile('myfile.txt', "Hello World", function (err) {
//     if (err) throw err;
//     console.log('File was written');
//
// });

fs.readFile("myfile.txt", function (err, data) {
    if(err) {
        console.log('File does not exist');
    } else {
        console.log(data.toString());
    }



});

console.log('Writing file');