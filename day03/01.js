var http = require('http');

// var log =require('./log');
// var msg =require('./msg');


// // log.info('info');
// // log.warning('warn');
// console.log(log,msg);

var server = http.createServer(function (req, res) {   // 2 - creating server
  if (req.url == '/') { //check the URL of the current request  
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    
    // set response content    
    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.end();
  }
  else if (req.url == "/student") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is student Page.</p></body></html>');
    res.end();

  }
  else if (req.url == "/admin") {  
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is admin Page.</p></body></html>');
    res.end();
  }
  else
    res.end('Invalid Request!');
});
server.listen(8080); //3 - listen for any incoming requests

console.log('Node.js web server at port 8080 is running..')
