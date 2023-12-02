const apiUrl = "http://localhost:5555";

export async function getSeasonsData(seasonYear) {
  console.log("request received by LeagueAPI successfully ")

  // Send a POST request to the 'query'
  // endpoint with the provided SQL query
  const teamListResponse = await fetch(`${apiUrl}/api/league/seasonTeams`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ seasonYear: seasonYear }),
  });
  // Check if the response status is ok
  if (!teamListResponse.ok) {
    throw new Error(`HTTP error! Status: ${teamListResponse.status}`);
  }
  const teamList = await teamListResponse.json();



  // const seasonStandingsResponse = await fetch(
  //   `${apiUrl}/api/seasonStandings`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ seasonYear: seasonYear }),
  //   }
  // );
  // // Check if the response status is ok
  // if (!seasonStandingsResponse.ok) {
  //   throw new Error(`HTTP error! Status: ${seasonStandingsResponse.status}`);
  // }
  // const seasonStandings = await seasonStandingsResponse.json();



  const nbaNewsResponse = await fetch(
    "https://content-api-prod.nba.com/public/1/leagues/nba/content?page=1&count=10&types=post&region=united-states",
    {
      cache: "no-store",
    }
  );
  const nbaNews = await nbaNewsResponse.json();





  return {
    teamList: teamList,
    LeagueNews: nbaNews,
    // seasonStandings: seasonStandings,
  };
}
