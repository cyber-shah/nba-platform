# -*- coding: utf-8 -*-
"""
Created on Wed Dec  6 12:13:22 2023

@author: 19782
"""

from nba_api.stats.static import players
from nba_api.stats.endpoints import playergamelog
from nba_api.stats.endpoints import playercareerstats
import time
import mysql.connector

user_password = input("Please put in your password to the \'root\ (local) connection of MySQL: ')

try:
    connection = mysql.connector.connect(host = "localhost", database="nba",user="root",password=user_password)

    if connection.is_connected():
        print("Connected to MySQL Server")
    
    select_query = "select * from player_season;"
    cursor = connection.cursor()
    cursor.execute(select_query)
    player_season_list_records = cursor.fetchall()
    player_season_per_game_string = ""
    for each_player_season in player_season_list_records:
        current_player = each_player_season[0]
        current_season = each_player_season[1]
        current_player_log = playergamelog.PlayerGameLog(player_id = current_player, season = current_season, season_type_all_star = "Regular Season")
        current_player_dict = current_player_log.get_dict()['resultSets'][0]['rowSet']
        for each_game in current_player_dict:
            game_id = each_game[2]
            player_minutes = each_game[6]
            player_points = each_game[24]
            player_fg_percent = each_game[9]
            player_rebounds = each_game[18]
            player_assists = each_game[19]
            player_steal = each_game[20]
            player_block = each_game[21]
            player_turnover = each_game[22]
            current_player_season_per_game = "(" + str(current_player) + ",\'" + current_season + "\',\'" + game_id + "\'," + player_minutes + "," + "," + player_points + "," + player_fg_percent + "," + player_rebounds + "," + player_assists + "," + player_steal + "," + player_block + "," + player_turnover + ")"
            if current_player_season_per_game not in player_season_per_game_string:
                player_season_per_game_string += current_player_season_per_game
            
    connection.close()
    
'''
players = players.get_players()
first_player = players[0]

player_game_log = playergamelog.PlayerGameLog(player_id = first_player['id'], season = '1990-91', season_type_all_star = "Regular Season")
player_game_log_dict = player_game_log.get_dict()['resultSets'][0]['rowSet']
print(player_game_log_dict)
'''

player_counter = 0
file_counter = 1
max_range = 0
end_player_index = 300

# creating a separate folder to store 1000+ files
folder_path = "C:/Users/19782/Desktop/NE_ALIGN_Program/Second_Year_Coursework/CS_5200/Group_project_data/player_games"

'''
while player_counter < end_player_index:
    player_games_in_season = ""
    if player_counter + 50 < len(players):
        max_range = player_counter + 50
    elif player_counter + 50 >= len(players):
        max_range = len(players)
    for each_player_index in range(player_counter, max_range):
        current_player = players[each_player_index]
        player_id_num = current_player['id']
        player_career = playercareerstats.PlayerCareerStats(player_id = player_id_num)
        player_career_dict = player_career.get_dict()
        regular_season_stats = player_career_dict['resultSets'][0]['rowSet']
        for each_season in regular_season_stats:
            season = each_season[1]
            current_player_season_string = "(" + str(player_id_num) + ",\'" + str(season) + "\'),"
            if current_player_season_string not in player_year:
                player_year += current_player_season_string
        time.sleep(0.600)
    file_name = folder_path + "/player_seasons" + str(file_counter) + ".txt"
    with open(file_name, 'w') as f:
        f.write(player_year)
    player_counter += 50
    file_counter += 1
'''