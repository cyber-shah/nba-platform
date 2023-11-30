export async function GET(params) {
  const teamStatsResponse = await fetch(
    `https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/
        ${params.seasonYear}/types/2/teams/${params.teamId}/statistics`,
    {
      cache: "no-store",
    }
  );

  const teamStats = await teamStatsResponse.json();
}
