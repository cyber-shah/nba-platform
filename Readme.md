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

3. **Get Standings:**
   - Western and Eastern Conference
   - Returns Columns:
     1. team_id
     2. team_name
     3. wins
     4. losses
     5. win_percentage
     6. games_behind

4. **Get Season Leaders:**
   - For assists, points, rebounds, steals, blocks
   - Returns Columns:
     1. player_id
     2. player_name
     3. team_id
     4. team_name
     5. stat
     6. stat_type
     7. rank

## Team Home
1. **Get Team Roster:**
   - Returns Columns:
     1. player_id
     2. player_name
     3. position
     4. height
     5. weight
     6. age
     7. experience

2. **Get Team Stats:**
   - Returns Columns:
     1. [Specify the columns]

3. **Get Team Schedule:**
   - Returns Columns:
     1. date
     2. opponent_id
     3. opponent_name
     4. result
     5. home_team_score
     6. away_team_score

## Player Home
1. **Get Player Stats:**
   - Returns Columns:
     1. player_id
     2. player_name
     3. team_id
     4. team_name
     5. games played
     6. minutes
     7. points
     8. rebounds
     9. assists
     10. steals
     11. [Specify additional columns]


## Create Operations
1. **Create Team:**
   - Parameters:
     1. team_name
     2. founded
     3. city
     4. state
   - Returns:
     1. team_id

2. **Create Player:**
   - Parameters:
     1. player_name
     2. position
     3. height
     4. weight
     5. age
     6. experience

3. **Create Game:**
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

4. **Create Season**
   - Parameters:
     1. season_name


## Update Operations
1. **Update Team:**
   - Parameters:
     1. team_id
     2. team_name
     3. founded
     4. city
     5. state

2. **Update Player:**
   - Parameters:
     1. player_id
     2. player_name
     3. position
     4. height
     5. weight
     6. age
     7. experience

3. **Update Game:**
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

4. **Update Schedule:**
   - Parameters:
      1. game_id
      2. date
      3. home_team_id
      4. away_team_id
      5. stadium
      6. city
      7. state
      8. time


## Delete Operations
1. **Delete Team:**
   - Parameters:
     1. team_id

2. **Delete Player:**
    - Parameters:
      1. player_id


3. **Delete Game:**
   - Parameters:
     1. game_id


4. **Delete Season:**
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
