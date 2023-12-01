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
    "https://content-api-prod.nba.com/public/1/leagues/nba/content?page=1&count=10&types=post&region=united-states",
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
