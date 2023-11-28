const home = (req, res) => {
    let pessoas = [
        { nome: 'Luan', idade: 25 },
        { nome: 'Giovanna', idade: 22 },
        { nome: 'Ellen', idade: 19 },
        { nome: 'Mirian', idade: 18 }
    ]
    res.render('home', { gostandoDeExpHbs: true, dados: pessoas });
};

module.exports = { home };