const mysql = require('mysql');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter MySQL username: ', (user) => {
  rl.question('Enter MySQL password: ', (password) => {
    const con = mysql.createConnection({
      host: 'localhost',
      user: user,
      password: password,
      database: 'musicshahp'
    });

    con.connect((err) => {
      if (err) throw err;
      console.log('Connected!');

      con.query('SELECT * FROM genres;', (err, result) => {
        if (err) throw err;
        console.log('1 record inserted, ID: ' + result.insertId);

        console.log(result);
        con.end();
        rl.close();
      });
    });
  });
});
