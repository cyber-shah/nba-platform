export function getTeamLogoUrl(teamId) {
  // Construct the logo URL based on the provided team ID
  const logoUrl = `https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`;
  return logoUrl;
}

export function getPlayerImageUrl(playerId) {
  // Construct the player image URL based on the provided player ID
  const imageUrl = `https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`;
  return imageUrl;
}

