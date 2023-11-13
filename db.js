/**
 * Role:    It establishes a connection to your MySQL database when 
 *          the application starts.
 * Export:  It exports the connection object so other parts of 
 *          your application can use it.
 */
const mysql = require('mysql2');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let con;
rl.question('Enter MySQL username: ', (user) => {
  rl.question('Enter MySQL password: ', (password) => {
    con = mysql.createConnection({
      host: 'localhost',
      user: user,
      password: password,
      database: 'musicshahp'
    });

    con.connect((err) => {
      if (err) throw err;
      console.log('Connected to MySQL!');
        rl.close();
      });
    });
});
  
module.exports = con;