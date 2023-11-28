const http = require('http');

http.createServer(function (req, res){
    res.write('Aprendendo Nodemon! Estou alterando o javascript.');
    res.end();
}).listen(7000);