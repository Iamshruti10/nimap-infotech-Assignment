'use strict';
const mysql = require('mysql');

//local mysql db connection
const sqlConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'nuvertos123!!!',
  database : 'mydb'
});

sqlConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = sqlConn;