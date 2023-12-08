const apiUrl = "http://localhost:5555";

export async function getSeasonStandings(seasonYear) {
  const seasonStandingsResponse = await fetch(
    `${apiUrl}/api/league/seasonStandings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seasonYear: seasonYear }),
    }
  );
  // Check if the response status is ok
  if (!seasonStandingsResponse.ok) {
    throw new Error(`HTTP error! Status: ${seasonStandingsResponse.status}`);
  }
  const seasonStandings = await seasonStandingsResponse.json();
  return seasonStandings;
}


export async function getSeasonsTeams(seasonYear) {
  console.log("request for getSeasonsTeams received successfully ");

  const teamListResponse = await fetch(`${apiUrl}/api/league/seasonTeams`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ seasonYear: seasonYear }),
  });

  if (!teamListResponse.ok) {
    throw new Error(`HTTP error! Status: ${teamListResponse.status}`);
  }

  const teamList = await teamListResponse.json();
  console.log("Team List:", teamList);
  return teamList;
}



export async function getSeasonNews() {
    const nbaNewsResponse = await fetch(
    "https://content-api-prod.nba.com/public/1/leagues/nba/content?page=1&count=10&types=post&region=united-states",
    {
      cache: "no-store",
    }
  );
  const nbaNews = await nbaNewsResponse.json();
  return nbaNews;
}


export async function getSeasonPlayers(seasonYear) {
  console.log("request for getSeasonPlayers received successfully ");
  const seasonPlayersResponse = await fetch(
    `${apiUrl}/api/league/seasonPlayers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seasonYear: seasonYear }),
    }
  );
  // Check if the response status is ok
  if (!seasonPlayersResponse.ok) {
    throw new Error(`HTTP error! Status: ${seasonPlayersResponse.status}`);
  }
  const seasonPlayers = await seasonPlayersResponse.json();
  return seasonPlayers;
}


export async function getSeasonGames(seasonYear) {
  console.log("request for getSeasonGames received successfully ");
  const seasonGamesResponse = await fetch(
    `${apiUrl}/api/league/seasonGames`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seasonYear: seasonYear }),
    }
  );
  // Check if the response status is ok
  if (!seasonGamesResponse.ok) {
    throw new Error(`HTTP error! Status: ${seasonGamesResponse.status}`);
  }
  const seasonGames = await seasonGamesResponse.json();
  return seasonGames;
}