const Create = {
  Team: [
    { label: 'Team Name', name: 'team_name', type: 'text' },
    { label: 'Founded', name: 'founded', type: 'text' },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'State', name: 'state', type: 'text' },
  ],
  Player: [
    { label: 'Player Name', name: 'player_name', type: 'text' },
    { label: 'Position', name: 'position', type: 'text' },
    { label: 'Height', name: 'height', type: 'text' },
    { label: 'Weight', name: 'weight', type: 'text' },
    { label: 'Age', name: 'age', type: 'text' },
    { label: 'Experience', name: 'experience', type: 'text' },
  ],
  Game: [
    { label: 'Home Team ID', name: 'home_team_id', type: 'text' },
    { label: 'Away Team ID', name: 'away_team_id', type: 'text' },
    { label: 'Home Team Score', name: 'home_team_score', type: 'text' },
    { label: 'Away Team Score', name: 'away_team_score', type: 'text' },
    { label: 'Date', name: 'date', type: 'text' },
    { label: 'Time', name: 'time', type: 'text' },
    { label: 'Stadium', name: 'stadium', type: 'text' },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'State', name: 'state', type: 'text' },
  ],
  Season: [
    { label: 'Season Name', name: 'season_name', type: 'text' },
  ],
};

const Update = {
  Team: [
    { label: 'Team ID', name: 'team_id', type: 'text' },
    { label: 'Team Name', name: 'team_name', type: 'text' },
    { label: 'Founded', name: 'founded', type: 'text' },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'State', name: 'state', type: 'text' },
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



export const CrudForms = {
    Create: Create,
    Update: Update,
};
