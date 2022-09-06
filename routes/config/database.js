const maria = require('mysql');
const conn = maria.createConnection({
    host: 'localhost', 
    port: 3307,
    user: 'root', 
    password: '1234',
    database: 'mysql',
    connectionLimit: 5
});
console.log('MARIA 데이터베이스에 연결되었습니다. ');
module.exports = conn;