const Create = {
Team: [
  { label: 'Team ID', name: 'team_id', type: 'int' },
  { label: 'Full Name', name: 'full_name_p', type: 'text' },
  { label: 'Abbreviation', name: 'abbreviation_p', type: 'text' },
  { label: 'Year Founded', name: 'year_founded_p', type: 'int' },
  // { label: 'Conference', name: 'conference_p', type: 'text' },
],

Player: [
  { label: 'Player ID', name: 'player_id_p', type: 'int' },
  { label: 'First Name', name: 'first_name_p', type: 'varchar(255)' },
  { label: 'Last Name', name: 'last_name_p', type: 'varchar(255)' },
  { label: 'Is Active', name: 'is_active_p', type: 'int' },
],


Game: [
  { label: 'Game ID', name: 'game_id_p', type: 'number' },
  { label: 'Game Date', name: 'game_date_p', type: 'date' },
  { label: 'Home Team ID', name: 'home_team_id_p', type: 'number' },
  { label: 'Home Team Points', name: 'home_team_points_p', type: 'number' },
  { label: 'Visiting Team ID', name: 'visiting_team_id_p', type: 'number' },
  { label: 'Visiting Team Points', name: 'visiting_team_points_p', type: 'number' },
],

  Season: [
    { label: 'Season Name', name: 'season_name', type: 'text' },
  ],
};

const Update = {
  Team: [
    { label: 'Team ID', name: 'team_id', type: 'text' },
    { label: 'Founded', name: 'founded', type: 'text' },
  ],
  Player: [
    { label: 'Player ID', name: 'player_id', type: 'text' },
    { label: 'Player Name', name: 'player_name', type: 'text' },
    { label: 'Position', name: 'position', type: 'text' },
    { label: 'Height', name: 'height', type: 'text' },
    { label: 'Weight', name: 'weight', type: 'text' },
    { label: 'Age', name: 'age', type: 'text' },
    { label: 'Experience', name: 'experience', type: 'text' },
  ],
  Game: [
    { label: 'Game ID', name: 'game_id', type: 'text' },
    { label: 'Home Team ID', name: 'home_team_id', type: 'text' },
    { label: 'Away Team ID', name: 'away_team_id', type: 'text' },
    { label: 'Season ID', name: 'season_id', type: 'text' },
    { label: 'Home Team Score', name: 'home_team_score', type: 'text' },
    { label: 'Away Team Score', name: 'away_team_score', type: 'text' },
    { label: 'Date', name: 'date', type: 'text' },
    { label: 'Time', name: 'time', type: 'text' },
    { label: 'Stadium', name: 'stadium', type: 'text' },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'State', name: 'state', type: 'text' },
  ],
  Arena: [
    { label: 'Arena ID', name: 'arena_id', type: 'text' },
    { label: 'Arena Name', name: 'arena_name', type: 'text' },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'State', name: 'state', type: 'text' },
  ],
};


const Delete = {
  Team: [
    { label: 'Team ID', name: 'team_id', type: 'text' },
  ],
  Player: [
    { label: 'Player ID', name: 'player_id', type: 'text' },
  ],
  Game: [
    { label: 'Game ID', name: 'game_id', type: 'text' },
  ],
  Arena: [
    { label: 'Arena ID', name: 'arena_id', type: 'text' },
  ],
};


export const CrudForms = {
    Create: Create,
    Update: Update,
    Delete: Delete,
};
