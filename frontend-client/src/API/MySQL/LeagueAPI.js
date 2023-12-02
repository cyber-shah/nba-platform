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