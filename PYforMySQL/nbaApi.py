import json
import nba_api
from nba_api.stats.endpoints import playercareerstats
from nba_api.stats.static import players
from nba_api.stats.static import teams
from nba_api.stats.endpoints import teamdetails
from nba_api.stats.endpoints import commonteamroster
from nba_api.stats.endpoints import leaguestandingsv3
from nba_api.stats.endpoints import leaderstiles
from nba_api.stats.endpoints import alltimeleadersgrids
from nba_api.stats.endpoints import leagueleaders

# # Create a PlayerCareerStats object
career = playercareerstats.PlayerCareerStats(977)
career_dict = career.get_dict()

# # Save the dictionary to a JSON file
with open('career_stats.json', 'w') as f:
    json.dump(career_dict, f)



# # get all players
# players = players.get_players()
# with open('all_players.json', 'w') as f:
#     json.dump(players, f)

# teams = teams.get_teams()
# with open('all_teams.json', 'w') as f:
#     json.dump(teams, f)

# teamdetails = teamdetails.TeamDetails(1610612754);
# with open('team_details.json', 'w') as f:
#     json.dump(teamdetails.get_dict(), f)

# teamroster = commonteamroster.CommonTeamRoster(1610612754, 2022);
# with open('team_roster.json', 'w') as f:
#     json.dump(teamroster.get_dict(), f)


# standings = leaguestandingsv3.LeagueStandingsV3();
# with open('league_standings.json', 'w') as f:
#     json.dump(standings.get_dict(), f)


# leaders = leaderstiles.LeadersTiles(2024)
# print(leaders.get_dict())
# with open('team_leaders.json', 'w') as f:
#     json.dump(leaders.get_dict(), f)

# leadersplayers = alltimeleadersgrids.AllTimeLeadersGrids()
# with open('leaders_players.json', 'w') as f:
#     json.dump(leadersplayers.get_dict(), f)


leadersseason = leagueleaders.LeagueLeaders()
with open('leaders_season.json', 'w') as f:
    json.dump(leadersseason.get_dict(), f)