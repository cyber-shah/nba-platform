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

      // Now that the connection is established, you can use it.
      executeQuery('SELECT * FROM genres')
        .then(results => {
          console.log(results);
        })
        .catch(error => {
          console.error(error);
        });
    });
  });
});

/**
 * Execute a MySQL query
 * @param {string} query - The SQL query to execute
 * @param {Array} values - Optional values to replace placeholders in the query
 * @returns {Promise<Object>} - A promise that resolves with the query result or rejects with an error
 */
const executeQuery = (query, values = []) => {
  return new Promise((resolve, reject) => {
    if (!con) {
      reject(new Error('Connection not established.'));
      return;
    }

    con.query(query, values, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
};

module.exports = {
  connection: con,
  executeQuery: executeQuery
};
