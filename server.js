var http = require('http');

http.createServer((req,res) => {
    res.write("sriraju krishnamsetty");
    res.end();
}).listen(8080);
