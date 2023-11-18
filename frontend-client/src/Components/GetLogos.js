function getTeamLogoUrl(teamId) {
  // Construct the logo URL based on the provided team ID
  const logoUrl = `https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`;

  return logoUrl;
}

// Example usage:
const miamiHeatLogo = getTeamLogoUrl(1610612748); // Miami Heat's team ID
console.log('Miami Heat Logo URL:', miamiHeatLogo);

const warriorsLogo = getTeamLogoUrl(1610612744); // Golden State Warriors' team ID
console.log('Golden State Warriors Logo URL:', warriorsLogo);

function getPlayerImageUrl(playerId) {
  // Construct the player image URL based on the provided player ID
  const imageUrl = `https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`;

  return imageUrl;
}

// Example usage:
const lebronJamesImage = getPlayerImageUrl(2544); // LeBron James' player ID
console.log('LeBron James Image URL:', lebronJamesImage);

const stephCurryImage = getPlayerImageUrl(201939); // Stephen Curry's player ID
console.log('Stephen Curry Image URL:', stephCurryImage);