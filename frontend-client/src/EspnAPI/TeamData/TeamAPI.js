export default async function GET(params) {

  const teamDataResponse = await fetch(
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${params.teamId}`,
    { cache: "no-store", }
  );
  if (!teamDataResponse.ok) {
    throw new Error("Failed to fetch team data");
  }
  const teamData = await teamDataResponse.json();

  /**
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
      `https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/
      teams/${params.teamId}/schedule?region=us&lang=en&season=${params.seasonYear}&seasontype=1`,
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
      `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?
      team=${params.teamId}`,
      { cache: "no-store", }
    );
    if (!teamNewsResponse.ok) {
      throw new Error("Failed to fetch team news");
    }
  
    const teamNews = await teamNewsResponse.json();
  */
  return {
    teamData: teamData,
    // teamStats: teamStats,
    // teamSchedule: teamSchedule,
    // teamRoster: teamRoster,
    // teamNews: teamNews,
  };
}
