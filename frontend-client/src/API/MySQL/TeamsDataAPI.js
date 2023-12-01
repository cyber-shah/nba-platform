const apiUrl = "http://localhost:5555";

export async function getTeamsData() {
  console.log("request recieved by teams data api successfully ")


  
  // Send a POST request to the 'query'
  // endpoint with the provided SQL query
  const teamListResponse = await fetch(`${apiUrl}/api/teams`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // Check if the response status is ok
  if (!teamListResponse.ok) {
    throw new Error(`HTTP error! Status: ${teamListResponse.status}`);
  }
  const teamList = await teamListResponse.json();




  const nbaNewsResponse = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?limit=10",
    {
      cache: "no-store",
    }
  );
  const nbaNews = await nbaNewsResponse.json();
  // await for the response and convert it to json

  return {
    teamList: teamList,
    LeagueNews: nbaNews,
  };
}
