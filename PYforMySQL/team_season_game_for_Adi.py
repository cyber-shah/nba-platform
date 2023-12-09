# -*- coding: utf-8 -*-
"""
Created on Fri Dec  8 16:12:44 2023

@author: Adi
"""

from nba_api.stats.endpoints import teamgamelog
import time
import pymysql

start_row_interval = 0
end_row_interval = 1627
folder_path = "C:/Users/Adi/OneDrive/Desktop/NBA Data/team_game"

user_password = input("Enter password for MySQL: ")

try:
    connection = pymysql.connect(host = "localhost", database="nba",user="root",password=user_password,charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor)

except pymysql.err.OperationalError as e:
    print('Error: %d: %s' % (e.args[0], e.args[1]))

try:
    cursor = connection.cursor()
    select_query = "select * from team_season;"
    cursor.execute(select_query)
    rows = cursor.fetchall()
    select_query_2 = "select * from nba_games;"
    cursor.execute(select_query_2)
    already_stored_games = cursor.fetchall()
    all_games = ""
    for each_row in already_stored_games:
        each_game = each_row['game_id']
        each_date = each_row['game_date']
        all_games += "(\'" + each_game + "\',\'" + each_date + "\')"
    team_season_per_game_string = ""
    game_string = ""
    #for each_player_season in player_season_list_records:
    for i in range(start_row_interval, end_row_interval):
        #current_player = each_player_season[0]
        current_team = rows[i]['team_id']
        #current_season = each_player_season[1]
        current_season = rows[i]['season_id']
        current_team_log = teamgamelog.TeamGameLog(team_id = current_team, season = current_season, season_type_all_star = "Regular Season")
        current_team_dict = current_team_log.get_dict()['resultSets'][0]['rowSet']
        for each_game in current_team_dict:
            game_id = each_game[1]
            
            team_points = each_game[26]
            if team_points == None or team_points == "":
                team_points = 0
                #print("Player points were null for game_id " + str(game_id) + ", player_id " + str(current_player))
            
            team_fg_percent = each_game[11]
            if team_fg_percent == None or team_fg_percent == "":
                team_fg_percent = 0
                #print("Player fg_percent were null for game_id " + str(game_id) + ", player_id " + str(current_player))
                
            team_rebounds = each_game[20]
            if team_rebounds == None or team_rebounds == "":
                team_rebounds = 0
                #print("Player rebounds were null for game_id " + str(game_id) + ", player_id " + str(current_player))
                
            team_assists = each_game[21]
            if team_assists == None or team_assists == "":
                team_assists = 0
                #print("Player assists were null for game_id " + str(game_id) + ", player_id " + str(current_player))
            
            team_steal = each_game[22]
            if team_steal == None or team_steal == "":
                team_steal = 0
                #print("Player steal were null for game_id " + str(game_id) + ", player_id " + str(current_player))
            
            team_block = each_game[23]
            if team_block == None or team_block == "":
                team_block = 0
                #print("Player block were null for game_id " + str(game_id) + ", player_id " + str(current_player))
                
            team_turnover = each_game[24]
            if team_turnover == None or team_turnover == "":
                team_turnover = 0
                #print("Player turnover were null for game_id " + str(game_id) + ", player_id " + str(current_player))
            
            game_date = each_game[2]
            
            if "vs." in each_game[3]:
                is_home = 1
            elif "@" in each_game[3]:
                is_home = 0
            
            current_primary_key = str(current_team) + ",\'" + current_season + "\',\'" + game_id + "\'"
            current_team_season_per_game = "(" + str(current_team) + ",\'" + current_season + "\',\'" + game_id + "\'," + str(is_home) + "," + str(team_points) + "," + str(team_fg_percent) + "," + str(team_rebounds) + "," + str(team_assists) + "," + str(team_steal) + "," + str(team_block) + "," + str(team_turnover) + ")," 
            game_primary_key = "(\'" + game_id + "\',\'" + game_date + "\'),"
            if (current_primary_key not in team_season_per_game_string) and (current_primary_key not in all_games):
                team_season_per_game_string += current_team_season_per_game
            if game_primary_key not in game_string:
                game_string += game_primary_key
        time.sleep(0.600)
    team_season_game_file_name = folder_path + "/team_season_game.txt"
    game_string_file_name = folder_path + "/game.txt"
    with open(team_season_game_file_name, 'w') as f:
        f.write(team_season_per_game_string)
    with open(game_string_file_name, 'w') as f:
        f.write(game_string)

finally:
    connection.close()