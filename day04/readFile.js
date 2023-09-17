var fs = require('fs');

fs.readFile('TestFile.txt','utf8', function (err, data) {
    if (err) 
        throw err;

    console.log(data);
});


// try {
//   const data = fs.readFileSync('TestFile.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error('Error reading the file:', err);
// }
