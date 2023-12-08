const apiUrl = "http://localhost:5555";

async function fetchData(endpoint, bodyData) {
  const response = await fetch(`${apiUrl}/api/league/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });

  if (!response.ok) {
    console.log(`HTTP error! Status: ${response.json()}`);
    return null;
  }

  return response.json();
}

export async function getSeasonStandings(seasonYear) {
  return fetchData("seasonStandings", { seasonYear });
}

export async function getSeasonsTeams(seasonYear) {
  console.log("request for getSeasonsTeams received successfully ");
  return fetchData("seasonTeams", { seasonYear });
}


export async function getSeasonPlayers(seasonYear) {
  console.log("request for getSeasonPlayers received successfully ");
  return fetchData("seasonPlayers", { seasonYear });
}

export async function getSeasonGames(seasonYear) {
  console.log("request for getSeasonGames received successfully ");
  return fetchData("seasonGames", { seasonYear });
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