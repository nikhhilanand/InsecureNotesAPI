const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456', // 🔥 Hardcoded secret
  database: 'notesdb'
});
connection.connect();
module.exports = connection;
