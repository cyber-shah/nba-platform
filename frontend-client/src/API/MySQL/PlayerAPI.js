const apiUrl = "http://localhost:5555";

export async function get_player_details(seasonYear, player_id) {
  console.log(`Request to ${player_id} received by playerAPI successfully.`);

  const response = await fetch(`${apiUrl}/api/players/playerHeader`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ seasonYear: seasonYear, player_id: player_id })
  });

  if (!response.ok) {
    console.log(`HTTP error! Status: ${response.json()}`);
    return null;
  }

  return response.json();
}


export async function get_player_stats_per_year(seasonYear, player_id) {
  console.log(`Request to ${player_id} received by PlayerServer successfully.`);

  const response = await fetch(`${apiUrl}/api/players/playerStats`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ seasonYear: seasonYear, player_id: player_id })
  });

  if (!response.ok) {
    console.log(`HTTP error! Status: ${response.json()}`);
    return null;
  }

  return response.json();
}


