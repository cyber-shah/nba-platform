const apiUrl = "http://localhost:5555";

export async function fetchTeamData(endpoint, seasonYear, team_id) {
  console.log(`Request to ${endpoint} received by TeamServer successfully. 
    Season Year: ${seasonYear}, Team ID: ${team_id}`);

  const response = await fetch(`${apiUrl}/api/teams/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ seasonYear: seasonYear, team_id: team_id }),
  });

  if (!response.ok) {
    console.log(`HTTP error! Status: ${response.json()}`);
    return null;
  }
  return response.json();
}

export async function getTeamSchedule(seasonYear, team_id) {
  return fetchTeamData("teamSchedule", seasonYear, team_id);
}

export async function getTeamRoster(seasonYear, team_id) {
  return fetchTeamData("teamRoster", seasonYear, team_id);
}

export async function getTeamStats(seasonYear, team_id) {
  return fetchTeamData("teamStats", seasonYear, team_id);
}

export async function getTeamDetails(seasonYear, team_id) {
  return fetchTeamData("teamDetails", seasonYear, team_id);
}

