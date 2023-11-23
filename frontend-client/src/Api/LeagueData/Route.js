export async function GET() {
  const nbaNewsResponse = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?limit=10",
    {
      cache: "no-store",
    });
  
  const nbaNews = await nbaNewsResponse.json();
  
  const nbaTeams = await fetch(
    "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams",
    {
      cache: "no-store",
    });
  
  
  
  return {
        LeagueNews: nbaNews
    }
}

export default GET;