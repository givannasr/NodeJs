const express = require('express')
const { engine } = require('express-handlebars')

const app = express();
const port = 8080;

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(`${__dirname}/publico`));

app.get('/', (req, res) => {
    let pessoas = [
        {nome: 'Luan', idade: 25},
        {nome: 'Giovanna', idade: 22},
        {nome: 'Ellen', idade: 19},
        {nome: 'Mirian', idade: 18}
    ]
    res.render('home', { gostandoDeExpHbs: true, dados: pessoas});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});