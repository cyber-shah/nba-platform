export async function GET(params) {
  // TEAM STATS ____________________________________
  const teamStatsResponse = await fetch(
    `https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/
        ${params.seasonYear}/types/2/teams/${params.teamId}/statistics`,
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
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/
        ${params.teamId}/schedule`
  );

  if (!teamScheduleResponse.ok) {
    throw new Error("Failed to fetch team data");
  }
  const teamSchedule = await teamScheduleResponse.json();

  // TEAM ROSTER___________________________________________
  const teamRosterResponse = await fetch(
      `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/
    ${params.teamId}/roster`
  );

  if (!teamRosterResponse.ok) {
    throw new Error("Failed to fetch team data");
  }

  const teamRoster = await teamRosterResponse.json();

  // TEAM NEWS ____________________________________________
  const teamNewsResponse = await fetch(
      `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?
    team=${params.teamId}`
  );

  if (!teamNewsResponse.ok) {
    throw new Error("Failed to fetch team news");
  }

  const teamNews = await teamNewsResponse.json();
}
