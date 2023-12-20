export async function GET(params) {
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


  // change level here to get more detailed standings
  const nbaStandingsResponse = await fetch(
    `https://site.web.api.espn.com/apis/v2/sports/basketball/nba/standings?
      region=us&lang=en&contentorigin=espn&type=0&
      level=2&sort=playoffseed:asc&season=${params.seasonYear}`,
    {
      cache: "no-store",
    }
  );

  const nbaStandings = await nbaStandingsResponse.json();
  return {
    LeagueNews: nbaNews,
    LeagueTeams: nbaTeams,
    LeagueStandings: nbaStandings,
  };



}

export default GET;
