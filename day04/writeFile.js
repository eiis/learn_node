var fs = require('fs');

//写入
fs.writeFile('test.txt', `${'Hello Node!'}`,'utf8', function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
});

//追加
fs.appendFile('test.txt', 'Hello World!', function (err) { 
  if (err)console.log(err);
  else console.log('Append operation complete.');
});
