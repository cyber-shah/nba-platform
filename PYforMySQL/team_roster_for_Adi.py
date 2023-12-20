# -*- coding: utf-8 -*-
"""
Created on Wed Dec  6 08:01:48 2023

@author: 19782
"""

from nba_api.stats.static import teams
from nba_api.stats.endpoints import commonteamroster
import time
from nba_api.stats.static import players

players = players.get_players()
player_ids = []
for each_player in players:
    player_ids.append(each_player['id'])

teams = teams.get_teams()
team_ids = []
for each_team in teams:
    team_ids.append(each_team['id'])

x = 1946
y = 1947
output_string = ""
season_list = []
for i in range(y, 2025):
    new_y = str(y)[2:]
    output_string = str(x) + "-" + new_y
    season_list.append(output_string)
    x += 1
    y += 1

start_team_index = 12
end_team_index = 13
player_team_season = ""
head_coach_season = ""
assistant_coach_season = ""
folder_path = "C:/Users/19782/Desktop/NE_ALIGN_Program/Second_Year_Coursework/CS_5200/Group_project_data/"

for each_team_id_index in range(start_team_index, end_team_index):
    for each_season in season_list:
        team_roster = commonteamroster.CommonTeamRoster(team_ids[each_team_id_index], each_season)
        players_dict = team_roster.get_dict()['resultSets'][0]['rowSet']
        for each_player in players_dict:
            current_player_id = each_player[14]
            current_player_team_season = "(" + str(current_player_id) + ",\'" + each_season + "\'," + str(team_ids[each_team_id_index]) + "),"
            if (current_player_id in player_ids) and (current_player_team_season not in player_team_season):
                player_team_season += current_player_team_season
            else:
                print("Ghost player: " + str(current_player_id))
        '''
        coaches_dict = team_roster.get_dict()['resultSets'][1]['rowSet']
        for each_coach in coaches_dict:
            if each_coach[7] == "Head Coach":
                head_coach_id = each_coach[2]
                head_coach_first_name = each_coach[3]
                head_coach_last_name = each_coach[4]
                # check for ' in both names in GM and Owner!!
                current_head_coach_season = "(" + str(head_coach_id) + ",\'" + head_coach_first_name + "\',\'" + head_coach_last_name + "\'," + str(team_ids[each_team_id_index]) + ",\'" + each_season + "\'),"
                if current_head_coach_season not in head_coach_season:
                    head_coach_season += current_head_coach_season
            elif each_coach[7] == "Assistant Coach":
                assistant_coach_id = each_coach[2]
                assistant_coach_first_name = each_coach[3]
                # check for ' in both names!!
                assistant_coach_last_name = each_coach[4]
                current_assistant_coach_season = "(" + str(assistant_coach_id) + ",\'" + assistant_coach_first_name + "\',\'" + assistant_coach_last_name + "\'," + str(team_ids[each_team_id_index]) + ",\'" + each_season + "\'),"
                if current_assistant_coach_season not in assistant_coach_season:
                    assistant_coach_season += current_assistant_coach_season
        '''
        time.sleep(0.600)

player_season_team_file_name = folder_path + "/player_season_team.txt"
with open(player_season_team_file_name, 'w') as f:
    f.write(player_team_season)

'''
head_coach_season_file_name = folder_path + "/head_coach.txt"
with open(head_coach_season_file_name, 'w') as f:
    f.write(head_coach_season)

assistant_coach_season_file_name = folder_path + "/assistant_coach.txt"
with open(assistant_coach_season_file_name, 'w') as f:
    f.write(assistant_coach_season)
'''

'''
#test for 1 team in 1 season
player_team_season = ""
head_coach_season = ""
assistant_coach_season = ""
team_roster = commonteamroster.CommonTeamRoster(1610612760, '1946-47')
players_dict = team_roster.get_dict()['resultSets'][0]['rowSet']
print(players_dict)
for each_player in players_dict:
    player_id = each_player[14]
    player_team_season += "(" + str(player_id) + ",\'" + '2022-23' + "\'," + str(1610612737) + "),"

coaches_dict = team_roster.get_dict()['resultSets'][1]['rowSet']
print(coaches_dict)
for each_coach in coaches_dict:
    if each_coach[7] == "Head Coach":
        head_coach_id = each_coach[2]
        head_coach_first_name = each_coach[3]
        head_coach_last_name = each_coach[4]
        head_coach_season += "(" + str(head_coach_id) + ",\'" + head_coach_first_name + "\',\'" + head_coach_last_name + "\'," + str(1610612737) + ",\'" + '2022-23' + "\'),"
    elif each_coach[7] == "Assistant Coach":
        assistant_coach_id = each_coach[2]
        assistant_coach_first_name = each_coach[3]
        assistant_coach_last_name = each_coach[4]
        assistant_coach_season += "(" + str(assistant_coach_id) + ",\'" + assistant_coach_first_name + "\',\'" + assistant_coach_last_name + "\'," + str(1610612737) + ",\'" + '2022-23' + "\'),"

print(player_team_season)
print(head_coach_season)
print(assistant_coach_season)
'''