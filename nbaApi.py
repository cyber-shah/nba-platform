import json
import nba_api
from nba_api.stats.endpoints import playercareerstats
from nba_api.stats.static import players
from nba_api.stats.static import teams
from nba_api.stats.endpoints import teamdetails
from nba_api.stats.endpoints import commonteamroster

# # Create a PlayerCareerStats object
# career = playercareerstats.PlayerCareerStats(977)
# career_dict = career.get_dict()

# # Save the dictionary to a JSON file
# with open('career_stats.json', 'w') as f:
#     json.dump(career_dict, f)



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

teamroster = commonteamroster.CommonTeamRoster(1610612754, 2022);
with open('team_roster.json', 'w') as f:
    json.dump(teamroster.get_dict(), f)
