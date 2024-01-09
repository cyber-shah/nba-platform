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
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams`,
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


  // season type 2 is for regular season and 3 is for playoffs
  const nbaLeadersPlayersResponse = await fetch(
    `https://site.web.api.espn.com/apis/site/v3/sports/basketball/nba/leaders?
region=us&lang=en&contentorigin=espn&limit=5&
qualified=true&season=${params.seasonYear}&seasontype=2`,
    {
      cache: "no-store",
    }
  );
  const nbaLeadersPlayers = await nbaLeadersPlayersResponse.json();



  return {
    LeagueNews: nbaNews,
    LeagueTeams: nbaTeams,
    LeagueStandings: nbaStandings,
    LeagueLeadersPlayers: nbaLeadersPlayers,
  };

}


export async function GETScores(params) {

  const nbaScheduleResponse = await fetch(
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${params.date}`,
    {
      cache: "no-store",
    }
  );
  const nbaScoreboard = await nbaScheduleResponse.json();

  return {
    LeagueScoreboard: nbaScoreboard,
  };
}


