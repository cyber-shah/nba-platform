// Define the API URL for server communication
const apiUrl = "http://localhost:5555";

/**
 * Function to send a query request to the server
 * @param {string} text - SQL query to be executed on the server
 * @returns {Promise<Object>} - A promise that resolves with the query result or rejects with an error
 */
const queryAPI = async (text) => {
  console.log("From API -- " + text);
  // Send a POST request to the 'query'
  // endpoint with the provided SQL query
  const response = await fetch(`${apiUrl}/api/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  // Parse the JSON response and log the result
  const data = await response.json();
  console.log("From API, Result from Server -- " + data.result);
  return data;
};

// Export the echoText and queryAPI functions for external use
export { queryAPI };

/**
 * so whenever someone clicks the button on react, it sends the contents of the text to echotext, who then converts it into json and redirects it to express, who then sends a response json back to echotext who stores it inside data and returns result of data to react who shows the it inside result inside result component
 */
