export default async function GET(params) {

  const teamDataResponse = await fetch(
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${params.teamId}`,
    { cache: "no-store", }
  );
  if (!teamDataResponse.ok) {
    throw new Error("Failed to fetch team data");
  }
  const teamData = await teamDataResponse.json();

  // TEAM STATS ____________________________________
  const teamStatsResponse = await fetch(
    `https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/${params.seasonYear}/types/2/teams/${params.teamId}/statistics`,
    {
      cache: "no-store",
    }
  );
  if (!teamStatsResponse.ok) {
    throw new Error("Failed to fetch team data");
  }
  const teamStats = await teamStatsResponse.json();


  // TEAM SCHEDULES ____________________________________
  const teamScheduleResponse = await fetch(
    `https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${params.teamId}/schedule?region=us&lang=en&season=${params.seasonYear}&seasontype=1`,
    {
      cache: "no-store",
    }
  );
  if (!teamScheduleResponse.ok) {
    throw new Error("Failed to fetch team data");
  }
  const teamSchedule = await teamScheduleResponse.json();


  // TEAM ROSTER___________________________________________
  const teamRosterResponse = await fetch(
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/
      ${params.teamId}/roster?region=us&lang=en&season=${params.seasonYear}`,
    {
      cache: "no-store",
    }
  );
  if (!teamRosterResponse.ok) {
    throw new Error("Failed to fetch team data");
  }
  const teamRoster = await teamRosterResponse.json();


  // TEAM NEWS ____________________________________________
  const teamNewsResponse = await fetch(
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?team=${params.teamId}`,
    { cache: "no-store", }
  );
  if (!teamNewsResponse.ok) {
    throw new Error("Failed to fetch team news");
  }
  const teamNews = await teamNewsResponse.json();


  // TEAM PLAYER STATS ____________________________________
  const teamPlayerStatsResponse = await fetch(
    `https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${params.teamId}/athletes/statistics?region=us&lang=en&contentorigin=espn&season=${params.seasonYear}&seasontype=2&sort=game.gamesPlayed%3Adesc`,
    { cache: "no-store", }
  );
  if (!teamPlayerStatsResponse.ok) {
    throw new Error("Failed to fetch team player stats");
  }
  const teamPlayerStats = await teamPlayerStatsResponse.json();


  // TEAM LEADERS _________________________________________
  const teamLeadersResponse = await fetch(
    `https://site.web.api.espn.com/apis/site/v3/sports/basketball/nba/leaders?region=us&lang=en&contentorigin=espn&limit=1&team=${params.teamId}&season=${params.seasonYear}&seasontype=2`,
    { cache: "no-store", }
  );
  if (!teamLeadersResponse.ok) {
    throw new Error("Failed to fetch team leaders");
  }
  const teamLeaders = await teamLeadersResponse.json();

  return {
    teamData: teamData,
    teamStats: teamStats,
    teamSchedule: teamSchedule,
    teamRoster: teamRoster,
    teamNews: teamNews,
    teamPlayerStats: teamPlayerStats,
    teamLeaders: teamLeaders
  }
}
