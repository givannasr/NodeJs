const crud = require('../models/crud');

const filePath = './data/db.contatos.json';

const home = (req, res) => {
    let pessoa = crud.read(filePath);
    res.render('home', {gostandoDeExpHbs: false, dados: pessoa});
}

module.exports = { home };