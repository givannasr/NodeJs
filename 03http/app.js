const http = require('http');

http.createServer(function (req, res){
    res.write('Aprendendo Node.js! ');
    // res.end('Bem vindo ao meu website!');
    res.end();
}).listen(8081);