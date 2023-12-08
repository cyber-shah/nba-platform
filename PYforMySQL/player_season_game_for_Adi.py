# -*- coding: utf-8 -*-
"""
Created on Wed Dec  6 12:13:22 2023

@author: 19782
"""

from nba_api.stats.static import players
from nba_api.stats.endpoints import playergamelog
from nba_api.stats.endpoints import playercareerstats
import time
import pymysql

start_row_interval = 0
end_row_interval = 100
folder_path = "C:/Users/Adi/OneDrive/Desktop/NBA Data/player_game"

user_password = input("Enter password for MySQL: ")

try:
    connection = pymysql.connect(host = "localhost", database="nba",user="root",password=user_password,charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor)

except pymysql.err.OperationalError as e:
    print('Error: %d: %s' % (e.args[0], e.args[1]))

try:
    cursor = connection.cursor()
    select_query = "select * from player_season;"
    cursor.execute(select_query)
    rows = cursor.fetchall()
    player_season_per_game_string = ""

    #for each_player_season in player_season_list_records:
    for i in range(start_row_interval, end_row_interval):
        #current_player = each_player_season[0]
        current_player = rows[i]['player_id']
        #current_season = each_player_season[1]
        current_season = rows[i]['season_id']
        current_player_log = playergamelog.PlayerGameLog(player_id = current_player, season = current_season, season_type_all_star = "Regular Season")
        current_player_dict = current_player_log.get_dict()['resultSets'][0]['rowSet']
        for each_game in current_player_dict:
            game_id = each_game[2]
            
            player_minutes = each_game[6]
            if player_minutes == None or player_minutes == "":
                player_minutes = 0
                #print("Player minutes were null for game_id " + str(game_id) + ", player_id " + str(current_player))
            
            player_points = each_game[24]
            if player_points == None or player_points == "":
                player_points = 0
                #print("Player points were null for game_id " + str(game_id) + ", player_id " + str(current_player))
            
            player_fg_percent = each_game[9]
            if player_fg_percent == None or player_fg_percent == "":
                player_fg_percent = 0
                #print("Player fg_percent were null for game_id " + str(game_id) + ", player_id " + str(current_player))
                
            player_rebounds = each_game[18]
            if player_rebounds == None or player_rebounds == "":
                player_rebounds = 0
                #print("Player rebounds were null for game_id " + str(game_id) + ", player_id " + str(current_player))
                
            player_assists = each_game[19]
            if player_assists == None or player_assists == "":
                player_assists = 0
                #print("Player assists were null for game_id " + str(game_id) + ", player_id " + str(current_player))
            
            player_steal = each_game[20]
            if player_steal == None or player_steal == "":
                player_steal = 0
                #print("Player steal were null for game_id " + str(game_id) + ", player_id " + str(current_player))
            
            player_block = each_game[21]
            if player_block == None or player_block == "":
                player_block = 0
                #print("Player block were null for game_id " + str(game_id) + ", player_id " + str(current_player))
                
            player_turnover = each_game[22]
            if player_turnover == None or player_turnover == "":
                player_turnover = 0
                #print("Player turnover were null for game_id " + str(game_id) + ", player_id " + str(current_player))
            
            
            
            current_primary_key = str(current_player) + ",\'" + current_season + "\',\'" + game_id
            current_player_season_per_game = "(" + str(current_player) + ",\'" + current_season + "\',\'" + game_id + "\'," + str(player_minutes) + "," + str(player_points) + "," + str(player_fg_percent) + "," + str(player_rebounds) + "," + str(player_assists) + "," + str(player_steal) + "," + str(player_block) + "," + str(player_turnover) + "),"
            if current_primary_key not in player_season_per_game_string:
                player_season_per_game_string += current_player_season_per_game
        time.sleep(0.600)
    player_season_game_file_name = folder_path + "/player_season_game.txt"
    game_file_name = folder_path + "/game.txt"
    with open(player_season_game_file_name, 'w') as f:
        f.write(player_season_per_game_string)
    with open(player_season_game_file_name, 'w') as f:
        f.write(game_string)

finally:
    connection.close()
 
'''
This is just test stuff to extract all games for 1 player in 1 season
#players = players.get_players()
'''
'''
player_game_log = playergamelog.PlayerGameLog(player_id = 76007, season = '1946-47', season_type_all_star = "Regular Season")
player_game_log_dict = player_game_log.get_dict()['resultSets'][0]['rowSet']
print(player_game_log.get_dict()['resultSets'][0]['headers'])
print(player_game_log_dict)
'''
#player_career_stats = playercareerstats.PlayerCareerStats(76007).get_dict()
#print(player_career_stats)