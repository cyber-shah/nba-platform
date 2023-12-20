Just remove the $ and put in actual data there, maybe you can also write a python script or something? to fetch and create all files for all teams or something
# Games Data
1. game data = https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${params.gameId}
2. home team stats = https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2023/types/2/teams/${homeTeamId}/statistics
3. away team stats = https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2023/types/2/teams/${awayTeamId}/statistics

# Season Data
1. Standings :  https://site.web.api.espn.com/apis/v2/sports/basketball/nba/standings?region=us&lang=en&contentorigin=espn&type=0&level=3&sort=playoffseed:asc&season=${params.seasonYear}
2. Teams : http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams
3. Weeks : http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/calendar/ondays?lang=en&region=us

# Team Data
1. Team Stats(may not be useful to us ): https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/{params.seasonYear}/types/2/teams/{params.teamId}/statistics
2. 