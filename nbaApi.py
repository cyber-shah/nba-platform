import json
import nba_api
from nba_api.stats.endpoints import playercareerstats
from nba_api.stats.static import players

# Create a PlayerCareerStats object
career = playercareerstats.PlayerCareerStats(977)
career_dict = career.get_dict()

# Save the dictionary to a JSON file
with open('career_stats.json', 'w') as f:
    json.dump(career_dict, f)



# get all players
players = players.get_players()
print(players)

with open('all_players.json', 'w') as f:
    json.dump(players, f)


