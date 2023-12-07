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






# list of procedures

## Season Home
1. get all teams :
   returns: 
   1. team_id
   2. team_name
   3. founded
   4. city
   5. state
2. get all games :
   returns: 
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
3. get standings
   western and eastern conference
   returns columns
    1. team_id 
    2. team_name
    3. wins
    4. losses
    5. win_percentage
    6. games_behind
 4. get season leaders
   for assists, points, rebounds, steals, blocks
    returns columns
     1. player_id
     2. player_name
     3. team_id
     4. team_name
     5. stat
     6. stat_type
     7. rank


## Team Home
1. get team roster - return columns:
   1. player_id
   2. player_name
   3. position
   4. height
   5. weight
   6. age
   7. experience

2. get team stats - returns columns
   1. 