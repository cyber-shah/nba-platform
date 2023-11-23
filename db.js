// Import required modules
const mysql = require("mysql2");

/*
const readline = require('readline');

// Create an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
*/

// Initialize a variable to store the MySQL connection
// and then use this con object everywhere like :
// con.query("select ....")
let con;

function connect(username, password) {
  // using await in server.js so that it waits for this to complete
  // and not run parallely
  // now when we use await we need to use promise that
  // basically resolves or rejects
  return new Promise((resolve, reject) => {
    con = mysql.createConnection({
      host: "localhost",
      user: username,
      password: password,
      database: "musicshahp",
    });
    console.log(username, password);
    // Connect to MySQL and log the status
    con.connect((err) => {
      if (err) {
        reject(err);
      }
      else {
        resolve("success");
      }
    });
  });
}

/*
// Prompt the user for MySQL username and password
rl.question('Enter MySQL username: ', (user) => {
  rl.question('Enter MySQL password: ', (password) => {
    // Create a MySQL connection using user input
    con = mysql.createConnection({
      host: 'localhost',
      user: user,
      password: password,
      database: 'musicshahp'
    });

    // Connect to MySQL and log the status
    con.connect((err) => {
      if (err) throw err;
      console.log('Connected to MySQL!');
      rl.close();
    });
  });
});
*/

/**
 * Execute a MySQL query
 * @param {string} query - The SQL query to execute
 * @param {Array} values - Optional values to replace placeholders in the query
 * @returns {Promise<Object>} - A promise that resolves with the query result or rejects with an error
 */
const executeQuery = (query, values = []) => {
  return new Promise((resolve, reject) => {
    // Check if the connection is established before executing the query
    if (!con) {
      reject(new Error("Connection not established."));
      return;
    }

    // Execute the MySQL query and handle the results
    con.query(query, values, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
};

// Export the MySQL connection and executeQuery function for external use
module.exports = {
  connect: connect,
  executeQuery: executeQuery,
};
