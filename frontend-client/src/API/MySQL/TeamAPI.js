const apiUrl = "http://localhost:5555";

export async function fetchTeamData(endpoint, seasonYear, teamID) {
  console.log(`Request to ${endpoint} received by TeamServer successfully. 
    Season Year: ${seasonYear}, Team ID: ${teamID}`);

  const response = await fetch(`${apiUrl}/api/teams/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ seasonYear: seasonYear, teamID: teamID }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export async function getTeamSchedule(seasonYear, teamID) {
  return fetchTeamData("teamSchedule", seasonYear, teamID);
}

export async function getTeamRoster(seasonYear, teamID) {
  return fetchTeamData("teamRoster", seasonYear, teamID);
}

export async function getTeamStats(seasonYear, teamID) {
  return fetchTeamData("teamStats", seasonYear, teamID);
}

export async function getTeamDetails(seasonYear, teamID) {
  return fetchTeamData("teamDetails", seasonYear, teamID);
}

