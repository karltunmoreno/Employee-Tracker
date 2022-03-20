const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employees'
  }
);

connection.connect(function (err) { 
  if (err) {
    console.log(err)  
  }
})
module.exports = connection;