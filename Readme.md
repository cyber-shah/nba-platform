# Tasks:

## 01 League
### League Home
- [x] Season Selector
- [x] Tabs for Each Component
- [x] LeagueServer Created
- [x] LeagueAPI Created

#### Standings
- [x] Front End
- [x] API Created:
    - [x] Get All Standings
- [x] Server Setup Created
    - [ ] Connection with MySQL

#### Games
- [ ] Your Task Here    


#### Season Leaderboard Players
- [x] Front End
- [x] API Created:
    - [x] Get All Standings
- [x] Server Setup Created
    - [$$ ] Connection with MySQL

#### Teams List
- [x] Front End
- [x] API Created:
    - [x] Get All Teams
- [x] Server Setup Created
    - [ ] Connection with MySQL 

## 02 Teams

### Team Home
- [x] Front End
  - [x] Team Header
  - [ ] Team news
  - [x] Tabs for Each Component

#### Team Stats
- [ ] Front End
- [x] API Created:
    - [x] Get All Stats
- [x] Server Setup Created
    - [ ] Connection with MySQL


#### Team Roster
- [x] Front End
- [x] API Created:
    - [x] Get All Players
- [x] Server Setup Created
    - [ ] Connection with MySQL

#### Team Schedule
- [ ] Front End
- [x] API Created:
    - [x] Get All Games
- [x] Server Setup Created
    - [ ] Connection with MySQL




## 03 Players

### Player Home
- [ ] Front End
  - [x] Player Header
  - [ ] Tabs for Each Component


#### Player Stats
- [ ] Front End
- [ ] API Created:
    - [ ] Get All Stats
- [ ] Server Setup Createdq
    - [ ] Connection with MySQL






# List of Procedures

## Season Home
1. **Get All Teams: (get_all_teams)**
   - Returns:
     1. team_id
     2. team_name
     3. conference
     4. year_founded
     5. city
     6. state

2. **Get All Games for a Specific Season: (get_season_games)**
   - Parameters:
     1. season_id
   - Returns:
     1. game_id
     2. home_team_id
     3. home_team_name
     4. away_team_id
     5. away_team_name
     6. home_team_score
     7. away_team_score
     8. date
     10. stadium
     11. city
     12. state

4. **Get Standings for Specific Conference and Season: (get_season_standings)**
   - Parameters:
       1. conference: Western or Eastern Conference
       2. season_id
   - Returns Columns:
     1. team_id
     2. team_name
     3. wins
     4. losses
     5. win_percentage

6. **Get Season Leaders: (get_season_points_leaders, get_season_assist_leaders, get_season_rebounds_leaders, get_season_steals_leaders, get_season_blocks_leaders, get_season_minutes_leaders, get_season_turnovers_leaders)**
   - For assists, points, rebounds, steals, blocks
   - Returns Columns:
     1. player_id
     2. player_name
     3. team_id
     4. team_name
     5. stat
     6. stat_type

## Team Home
1. **Get Team Roster: (get_team_roster)**
   - Returns Columns:
     1. player_id
     2. player_name

2. **Get Team Stats: (get_team_stats)**
   - Returns Columns:
     1. [Specify the columns]

3. **Get Team Schedule: (get_team_schedule)**
   - Returns Columns:
     1. date
     2. opponent_id
     3. opponent_name
     4. result
     5. home_team_score
     6. away_team_score

## Player Home
1. **Get Player Stats: (get_player_stats_per_year)**
   - Returns Columns:
     1. player_id
     2. player_name
     3. team_id
     4. team_name
     6. minutes
     7. points
     8. rebounds
     9. assists
     10. steals
     11. [Specify additional columns]


## Create Operations
1. **Create Team: (create_team)**
   - Parameters:
     1. team_name
     2. founded
     3. city
     4. state
   - Returns:
     1. team_id

2. **Create Player: (create_player)**
   - Parameters:
     1. player_name
     2. position
     3. height
     4. weight
     5. age
     6. experience

3. **Create Game: (create_game)**
   - Parameters:
     1. home_team_id
     2. away_team_id
     3. home_team_score
     4. away_team_score
     5. date
     6. time
     7. stadium
     8. city
     9. state

4. **Create Season (create_season)**
   - Parameters:
     1. season_name


## Update Operations
1. **Update Team: (update_team)**
   - Parameters:
     1. team_id
     2. team_name
     3. founded
     4. city
     5. state

2. **Update Player: (update_player)**
   - Parameters:
     1. player_id
     2. player_name
     3. position
     4. height
     5. weight
     6. age
     7. experience

3. **Update Game: (update_game)**
   - Parameters:
     1. game_id
     2. home_team_id
     3. away_team_id
     4. Season_id
     5. home_team_score
     6. away_team_score
     7. date
     8. time
     9. stadium
     10. city
     11. state

## Delete Operations
1. **Delete Team: (delete_team)**
   - Parameters:
     1. team_id

2. **Delete Player: (delete_player)**
    - Parameters:
      1. player_id


3. **Delete Game: (delete_game)**
   - Parameters:
     1. game_id


4. **Delete Season: (delete_season)**
   - Parameters:
     1. season_id


## Read Operations
1. **Get All Teams:**
   - Returns:
     1. team_id
     2. team_name
     3. founded
     4. city
     5. state

2. **Get All Games:**
   - Returns:
     1. game_id
     2. home_team_id
     3. home_team_name
     4. away_team_id
     5. away_team_name
     6. home_team_score
     7. away_team_score
     8. date
     9. time
     10. stadium
     11. city
     12. state


3. **Get All Players:**
   - Returns:
     1. player_id
     2. player_name
     3. position
     4. height
     5. weight
     6. age
     7. experience


4. **Get All Seasons:**
   - Returns:
     1. season_id
     2. season_name
     3. start_date
     4. end_date
     5. current_season
