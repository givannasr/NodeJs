/**
 * DAO- Data Access Object (Objeto de Acesso á Dados)
 * 
 * Instalar módulo MySQL: npm intall mysql2
 */

const mysql2 = require('mysql2');

const conMysql = mysql2.createConnection({
    host: 'Localhost',
    database: 'aula-mvc',
    user: 'root',
    password: '1234'
});

module.exports = conMysql;