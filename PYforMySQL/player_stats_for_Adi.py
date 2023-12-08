# -*- coding: utf-8 -*-
"""
Created on Tue Dec  5 22:38:05 2023

@author: 19782
"""
import os
import time
from nba_api.stats.endpoints import playercareerstats
from nba_api.stats.static import players

#creating insert statement for player_season table
players = players.get_players()
player_ids = []
for each_player in players:
    player_ids.append(each_player['id'])
    
player_counter = 0
file_counter = 1
max_range = 0
end_player_index = 300

# creating a separate folder to store 1000+ files
folder_path = "C:/Users/19782/Desktop/NE_ALIGN_Program/Second_Year_Coursework/CS_5200/Group_project_data/all_player_seasons"
#os.mkdir(folder_path)

# this is to get the players in chunks of 300
while player_counter < end_player_index:
    player_year = ""
    if player_counter + 50 < len(players):
        max_range = player_counter + 50
    elif player_counter + 50 >= len(players):
        max_range = len(players)
    for each_player_index in range(player_counter, max_range):
        current_player_id = player_ids[each_player_index]
        player_career = playercareerstats.PlayerCareerStats(player_id = current_player_id)
        player_career_dict = player_career.get_dict()
        regular_season_stats = player_career_dict['resultSets'][0]['rowSet']
        for each_season in regular_season_stats:
            season = each_season[1]
            current_player_season_string = "(" + str(current_player_id) + ",\'" + str(season) + "\'),"
            if current_player_season_string not in player_year:
                player_year += current_player_season_string
        time.sleep(0.600)
    file_name = folder_path + "/player_seasons" + str(file_counter) + ".txt"
    with open(file_name, 'w') as f:
        f.write(player_year)
    player_counter += 50
    file_counter += 1

'''
This is to get all of the players at once!!!
player_year = ""
for each_player in players:
    player_id_num = each_player['id']
    player_career = playercareerstats.PlayerCareerStats(player_id = player_id_num)
    player_career_dict = player_career.get_dict()
    regular_season_stats = player_career_dict['resultSets'][0]['rowSet']
    for each_season in regular_season_stats:
        season = each_season[1]
        player_year += "(" + str(player_id_num) + ",\'" + str(season) + "\'),"
    time.sleep(0.600)
player_year = player_year[:len(player_year)-1]
file_name = folder_path + "/player_seasons" + str(file_counter) + ".txt"
with open(file_name, 'w') as f:
    f.write(player_year)
'''

# combining 1000+ files into 1 txt file
file_names = os.listdir(folder_path)
for i in range(len(file_names)):
    file_names[i] = folder_path + "/" + file_names[i]
#print(file_names)

final_file_path = "C:/Users/19782/Desktop/NE_ALIGN_Program/Second_Year_Coursework/CS_5200/Group_project_data/final_file.txt"
with open(final_file_path, 'w') as outfile:    
    for each_file in file_names:
        with open(each_file, 'r') as infile:
            outfile.write(infile.read())