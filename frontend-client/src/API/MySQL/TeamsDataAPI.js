
const apiUrl = "http://localhost:5555";


const getTeams = async () => {
  // Send a POST request to the 'query'
  // endpoint with the provided SQL query
  const response = await fetch(`${apiUrl}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  });

  // await for the response and convert it to json
  const data = await response.json();
  return data;
};


export { getTeams };