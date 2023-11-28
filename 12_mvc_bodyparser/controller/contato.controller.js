const Cliente = require('../models/contato.model');

const contato =  (req, res) => {
    res.render('contato');
}

const salvarContato = (req, res) => {
    let cliente = new Cliente(req.body);
    console.log(cliente);
    const {nome, email, senha} = req.body;
    console.log(nome, email, senha);
    res.render('contato');
}

module.exports = { contato , salvarContato};