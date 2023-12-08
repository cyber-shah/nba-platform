const apiUrl = "http://localhost:5555";

export async function get_player_details(seasonYear, playerID) {
  console.log(`Request to ${playerID} received by PlayerServer successfully.`);

  const response = await fetch(`${apiUrl}/api/players/${playerID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ seasonYear: seasonYear, teamID: playerID })
  });

  if (!response.ok) {
    console.log(`HTTP error! Status: ${response.json()}`);
    return null;
  }

  return response.json();
}


