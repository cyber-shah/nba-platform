const apiUrl = "http://localhost:5555";

export async function fetchPlayerData(playerID) {
  console.log(`Request to ${playerID} received by PlayerServer successfully.`);

  const response = await fetch(`${apiUrl}/api/players/${playerID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}
