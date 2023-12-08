// Import required modules
const mysql = require("mysql2");

let con;

function connect(username, password) {
  // using await in server.js so that it waits for this to complete
  // and not run parallely
  // now when we use await we need to use promise that
  // basically resolves or rejects
  return new Promise((resolve, reject) => {
    con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "aH24fkWu*}Q",
      database: "nba",
    });
    // console.log(username, password);
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



const executeStoredProcedure = (procedureName, params = []) => {
  return new Promise((resolve, reject) => {
    // Check if the connection is established before executing the stored procedure
    if (!con) {
      reject(new Error("Connection not established."));
      return;
    }

    // Build the stored procedure call
    const callStatement = `CALL ${procedureName}(${params.map(() => "?").join(",")})`;

    // Execute the stored procedure and handle the results
    con.query(callStatement, params, (err, results) => {
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
  executeStoredProcedure: executeStoredProcedure,
};



