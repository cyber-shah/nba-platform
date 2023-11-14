const apiUrl = 'http://localhost:5555';

const echoText = async (text) => {
  const response = await fetch(`${apiUrl}/api/echo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });
  const data = await response.json();
  return data.result;
};

const queryAPI = async (text) => {
  console.log("From API -- " + text);

  const response = await fetch(`${apiUrl}/api/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });
  const data = await response.json();
  console.log("From API, Result -- " + data.result);
  return data;
}



export { echoText, queryAPI};

/**
 * so whenever someone clicks the button on react, it sends the contents of the text to echotext, who then converts it into json and redirects it to express, who then sends a response json back to echotext who stores it inside data and returns result of data to react who shows the it inside result inside result component
 */