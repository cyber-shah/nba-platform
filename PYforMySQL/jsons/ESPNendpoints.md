# Games Data
1. game data = https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${params.gameId}
2. home team stats = https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2023/types/2/teams/${homeTeamId}/statistics
3. away team stats = https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2023/types/2/teams/${awayTeamId}/statistics

# Season Data
1. Standings by Division :  https://site.web.api.espn.com/apis/v2/sports/basketball/nba/standings?region=us&lang=en&contentorigin=espn&type=0&level=3&sort=playoffseed:asc&season={params.seasonYear}
2. Standings total : https://site.web.api.espn.com/apis/v2/sports/basketball/nba/standings?region=us&lang=en&contentorigin=espn&type=0&level=1&sort=wins%3Adesc&season={params.seasonYear}
3. Teams with divisions: https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/teams?region=us&lang=en&contentorigin=espn&limit=400&includeModules=news&enable=groups
4. Weeks : http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/calendar/ondays?lang=en&region=us

# Team Data
1. Team Stats(may not be useful to us ): https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/{params.seasonYear}/types/2/teams/{params.teamId}/statistics
2. Team Schedule : https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/teams/{params.teamId}/schedule?region=us&lang=en&season={params.seasonYear}&seasontype=1
3. Team News : https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?team=${params.teamId}
4. 