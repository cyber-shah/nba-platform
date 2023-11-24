export async function GET() {
  const nbaNewsResponse = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?limit=10",
    {
      cache: "no-store",
    }
  );

  const nbaNews = await nbaNewsResponse.json();

  
  // NOTE : this is only for NBA hence, we see "nba, sports" 
  // here if there is some other could be the same
  const nbaTeamsResponse = await fetch(
    "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams",
    {
      cache: "no-store",
    }
  );
  const nbaTeams = await nbaTeamsResponse.json();

  return {
    LeagueNews: nbaNews,
    LeagueTeams: nbaTeams,
  };
}

export default GET;
